import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../store/actions/posts";
import PostItem from '../components/PostItem';
import { getPostAction } from "../store/actions/posts";

class PostList extends Component{
    componentDidMount(){
            const postsPath = '/api/posts';
            const ownPostsPath = `/api/users/${this.props.currentUser.user.id}/posts`;
            const path = this.props.postsOwner ? ownPostsPath : postsPath;
            this.props.fetchPosts(path);
    }
    render(){
        const posts = this.props.posts.map((post)=>{
            return <PostItem getPostAction={this.props.getPostAction}
                             post={post}
                             history={this.props.history}
                             postId={post._id}
                             userId={post.user._id}
                             key={post._id}
                             imageUrl={post.postImageUrl}
                             postName={post.postName}
                             createdAt={post.createdAt}
                             description={post.description}
                    />
        });

        return(
            <section className="stories">
                <div className="row">
                    <h4 className="secondary-heading u-text-center">select your next story</h4>
                    <hr/>
                    <p className="paragraph u-text-center u-margin-bottom-large">– “Travel isn’t always pretty. It isn’t always comfortable.
                        Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you;
                        it should change you. It leaves marks on your memory, on your consciousness, on your heart,
                        and on your body. You take something with you. Hopefully, you leave something good behind.”
                        – Anthony Bourdain</p>
                    {posts}
                </div>
            </section>
        )
    }
}
function mapStateToProps(state) {
    return{
        currentUser: state.currentUser,
        posts: state.posts
    }
}
export default connect(mapStateToProps, {fetchPosts, getPostAction})(PostList);

