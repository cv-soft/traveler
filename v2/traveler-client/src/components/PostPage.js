import React, { Component } from 'react';

class PostPage extends Component {
    constructor(props){
        super(props);
        this.state={isLoaded: true, posts: []}
    }
    componentWillMount(){
        console.log("postpageprops: ", this.props)
    }
    onClickRemoveHandler = event =>{
        event.preventDefault();
        const path =`/api/users/${this.state.user._id}/posts/${this.state._id}`;
        this.props.removePostAction(path).then(() => {
            this.props.history.push(`/users/${this.props.posts[0].user._id}/posts`)
        })
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
                                    <a href="/" onClick={this.onClickRemoveHandler}>remove post</a>
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