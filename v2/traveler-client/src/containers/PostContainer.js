import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostPage from '../components/PostPage'
import CommentList from '../components/CommentList';
import { getPostAction } from "../store/actions/posts";
import { fetchComments, addCommentAction } from "../store/actions/comments";

class PostContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded : true,
            showCommentForm: false,
            text: '',
            isLoadedPost: true,
            stopFetch: true
        }
    }

    componentDidMount(){
        const path = `/api${window.location.pathname}`;
        this.props.getPostAction(path);
        const commentsPath = `/api${window.location.pathname}/comments`;
        this.props.fetchComments(commentsPath);
    }
    componentWillUpdate(){
        if( this.state.stopFetch && this.props.posts.length>0){
            this.setState({isLoadedPost: false, stopFetch: false})
        }
    }
    onClickHandler = event => {
        event.preventDefault();
        this.setState({showCommentForm: true})
    };
    onSubmitHandler = event =>{
        event.preventDefault();
        const path = `/api/users/${this.props.currentUser.user.id}/posts/${this.props.posts[0]._id}/comments`;
        const data = this.state.text;
        this.props.addCommentAction(path, {text: data});
        this.setState({text: '', showCommentForm: false})

    };
    onChangeHandler = event => {
        event.preventDefault();
        this.setState({text: event.target.value})
    };
    render() {
        const {posts, currentUser, getPostAction, history, comments} = this.props;
        const {showCommentForm} = this.state;
        if (this.state.isLoadedPost) {
            return (
                <div>
                    Loading
                </div>
            )
        } else {
            return (
                <div>
                    <PostPage posts={posts}
                              currentUser={currentUser}
                              getPostAction={getPostAction}
                              history={history}
                    />
                    <CommentList comments={comments}/>
                    {currentUser.isAuthenticated &&
                        <a onClick={this.onClickHandler} className="btn btn-large">Add comment</a>
                    }
                    {showCommentForm &&
                        <form onSubmit={this.onSubmitHandler} className="comment_area">
                            <textarea onChange={this.onChangeHandler} value={this.state.text} name="" id="" cols="30"
                                      rows="10" placeholder="Write your comment"/>
                            <div className="comment_are_btn">
                                <button name="button" type="normal" className="btn">Send</button>
                            </div>
                        </form>
                    }
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return{
        currentUser: state.currentUser,
        posts: state.posts,
        comments: state.comments
    }
}

export default connect(mapStateToProps, {getPostAction, fetchComments, addCommentAction})(PostContainer)