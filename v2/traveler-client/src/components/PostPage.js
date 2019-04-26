import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePostAction } from "../store/actions/posts";


class PostPage extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillMount(){
        this.setState(this.props.post)
    }
    onClickHandler = event =>{
        event.preventDefault();
        const path =`/api/users/${this.state.user}/posts/${this.state._id}`;
        this.props.removePostAction(path).then(() => {
            this.props.history.push(`/users/${this.state.user}/posts`)
        })

    };
    render(){
        const{postName, postImageUrl, description} = this.state;
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
                        {(this.props.currentUser.user.id === this.state.user) && (
                            <div className="post_section_btn">
                                <a onClick={this.onClickHandler}>remove post</a>
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
export default connect(mapStateToProps, {removePostAction})(PostPage)

