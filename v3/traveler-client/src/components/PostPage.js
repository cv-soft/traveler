import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GalleryComponent from './GalleryComponent';

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
            <section className="story-section">
                <div className="row">
                <div >
                    <img className="story-section__image" src={this.props.posts[0].postImageUrl[0]} alt={this.props.posts[0].postName}/>
                </div>
                    <div className="story-section__description">
                            <h1 className="secondary-heading u-text-center">
                                {this.props.posts[0].postName}
                            </h1>
                            <div className="paragraph">
                                <p>
                                    {this.props.posts[0].description}
                                </p>
                            </div>
                            {(this.props.currentUser.user.id === this.props.posts[0].user._id) && (
                                <div>
                                    <div className="story-section__button">
                                        <Link className="btn-text" to='/posts' onClick={this.onClickRemoveHandler}>remove post</Link>
                                    </div>
                                    <div className="story-section__button">
                                        <a className="btn-text" href="/" onClick={this.onClickEditHandler}>edit post</a>
                                    </div>
                                </div>
                            )}
                    </div>
                    <div className="image__gallery">
                        <GalleryComponent postImageUrl={this.props.posts[0].postImageUrl}/>
                    </div>
                </div>
                </section>
            )
        }
};
export default PostPage;