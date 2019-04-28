import React, { Component } from 'react';

class PostPage extends Component {
    constructor(props){
        super(props);
        this.state={isLoaded: true, posts: []}
    }
    componentDidUpdate(){
        if(this.state.isLoaded){
            this.setState({posts: this.props.posts[0], isLoaded: false})
        }
    }

    onClickRemoveHandler = event =>{
        event.preventDefault();
        const path =`/api/users/${this.state.user._id}/posts/${this.state._id}`;
        this.props.removePostAction(path).then(() => {
            this.props.history.push(`/users/${this.state.posts.user._id}/posts`)
        })
    };
    onClickEditHandler = event => {
        event.preventDefault();
        this.props.history.push(`/users/${this.state.posts.user._id}/posts/${this.state.posts._id}/edit`)
    };




    render(){
        if(this.state.posts.length<=0){
            return(<div>Loading...</div>)
        }else {
            return(
                <section className="container">
                    <div className="article">
                        <h1 className="article_heading">
                            {this.state.posts.postName}
                        </h1>

                        <div className="article_img">
                            <img src={this.state.posts.postImageUrl} alt={this.state.posts.postName}/>
                        </div>
                        <div className="article_text">
                            <div className="left_animate">
                                <p>
                                    {this.state.posts.description}
                                </p>
                            </div>
                        </div>
                        {(this.props.currentUser.user.id === this.state.posts.user._id) && (
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
    }
};



// function mapStateToProps(state){
//     return{
//         post: state.posts,
//         currentUser: state.currentUser
//     }
// }
// export default connect(mapStateToProps, {removePostAction, getPostAction})(PostPage)

export default PostPage