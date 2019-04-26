import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../store/actions/posts";
import PostItem from '../components/PostItem';
import { getPostAction } from "../store/actions/posts";
import '../stylesheets/new.css'

class PostList extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const postsPath = '/api/posts';
        const ownPostsPath = `/api/users/${this.props.currentUser.user.id}/posts`;
        const path = this.props.postsOwner ? ownPostsPath : postsPath;
        this.props.fetchPosts(path);
    }
    componentDidUpdate(){
        const postsPath = '/api/posts';
        const ownPostsPath = `/api/users/${this.props.currentUser.user.id}/posts`;
        const path = this.props.postsOwner ? ownPostsPath : postsPath;
        this.props.fetchPosts(path);
    }
    render(){
        const posts = this.props.posts.map((post)=>{
            return <PostItem getPostAction={this.props.getPostAction}
                             post={post}
                             postId={post.id}
                             userId={post.user}
                             key={post._id}
                             imageUrl={post.postImageUrl}
                             postName={post.postName}
                             description={post.description}
                    />
        });
        return(
            <section className="container">
                <div className="heading_text">
                    <h4>select your next story</h4>
                    <span id="gorithontal_line"></span>
                    <p className="text_heading_text">– “Travel isn’t always pretty. It isn’t always comfortable.
                        Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you;
                        it should change you. It leaves marks on your memory, on your consciousness, on your heart,
                        and on your body. You take something with you. Hopefully, you leave something good behind.”
                        – Anthony Bourdain</p>
                </div>
                {posts}
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

