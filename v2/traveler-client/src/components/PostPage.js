import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removePostAction, getPostAction } from "../store/actions/posts";


class PostPage extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillMount(){
        this.setState(this.props.post)
    }
    componentWillUnmount(){
        this.props.getPostAction(this.state)
    }
    onClickRemoveHandler = event =>{
        event.preventDefault();
        const path =`/api/users/${this.state.user._id}/posts/${this.state._id}`;
        this.props.removePostAction(path).then(() => {
            this.props.history.push(`/users/${this.state.user._id}/posts`)
        })
    };
    onClickEditHandler = event => {
        event.preventDefault()
        this.props.history.push(`/users/${this.state.user._id}/posts/${this.state._id}/edit`)
    };
    render(){
        const{postName, postImageUrl, description, user, _id} = this.state;
        if(this.state.length<=0){
            return(<div>Loading...</div>)
        }else {
            return(
                <section className="container">
                    <div className="article">
                        <h1 className="article_heading">
                            {postName}
                        </h1>

                        <div className="article_img">
                            <img src={postImageUrl} alt={postName}/>
                        </div>
                        <div className="article_text">
                            <div className="left_animate">
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                        {(this.props.currentUser.user.id === this.state.user._id) && (
                            <div>
                                <div className="post_section_btn">
                                    <a onClick={this.onClickRemoveHandler}>remove post</a>
                                </div>
                                <div className="post_section_btn">
                                    <Link to={`/users/${user}/posts/${_id}/edit`} onClick={this.onClickEditHandler}>edit post</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )
        }
    }
};
function mapStateToProps(state){
    return{
        post: state.posts[0],
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {removePostAction, getPostAction})(PostPage)

