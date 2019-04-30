import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostPage extends Component {
    constructor(props) {
        super(props)
    }
    onClickRemoveHandler = () =>{
        const path =`/api/users/${this.props.posts[0].user._id}/posts/${this.props.posts[0]._id}`;
        this.props.removePostAction(path)
    };
    onClickEditHandler = event => {
        event.preventDefault();
        this.props.history.push(`/users/${this.props.posts[0].user._id}/posts/${this.props.posts[0]._id}/edit`)
    };

    render() {
        return (
            <section className="container">
                <div className="article">
                        <h1 className="article_heading">
                            {this.props.posts[0].postName}
                        </h1>
                        <div className="article_img">
                            <img src={this.props.posts[0].postImageUrl} alt={this.props.posts[0].postName}/>
                        </div>
                        <div className="article_text">
                            <div className="left_animate">
                                <p>
                                    {this.props.posts[0].description}
                                </p>
                            </div>
                        </div>
                        {(this.props.currentUser.user.id === this.props.posts[0].user._id) && (
                            <div>
                                <div className="post_section_btn">
                                    <Link to='/posts' onClick={this.onClickRemoveHandler}>remove post</Link>
                                </div>
                                <div className="post_section_btn">
                                    <a href="/" onClick={this.onClickEditHandler}>edit post</a>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )
        }
};
export default PostPage