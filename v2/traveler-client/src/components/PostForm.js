import React, {Component} from 'react';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            postName: '',
            description: '',
            postImageUrl: ''
        }
    }
    componentDidMount(){
        if(this.props.edit && this.props.posts.length>0) {
            this.setState((state, props) => ({
                postName: props.posts[0].postName,
                description: props.posts[0].description,
                postImageUrl: props.posts[0].postImageUrl
            }));
        }
    }

    addPost = () => {
        const path = `/api/users/${this.props.currentUser.user.id}/posts`;
        this.props.addPostAction(path, this.state).then(()=>{
            this.props.history.push('/posts');
        }).catch(()=>{
            return;
        })
    };
    editPost = () => {
        const path = `/api/users/${this.props.posts[0].user}/posts/${this.props.posts[0]._id}`
        this.props.editPostAction(path, this.state).then(()=> {
            this.props.history.push('/posts')
        }).catch(()=>{
            return;
        })
    };

    onSubmitHandler = event =>{
        event.preventDefault();
        this.props.edit ? this.editPost() : this.addPost()

    };
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render(){
        const {postName, description, postImageUrl} = this.state;
        const {heading, buttonText, errors} = this.props;
        return(
            <div>
                <section>
                    <div className="container form_animate">
                        <h4>{heading}</h4>
                        {errors.message &&(<div className="alert alert-danger">{errors.message}</div>)}
                        <div className="form">
                            <form onSubmit={this.onSubmitHandler} className="form_area">
                                <div className="add_post">
                                    <p>Post name <span id="star">*</span></p>
                                    <input type="text"
                                           name="postName"
                                           id="postName"
                                           className="form-input"
                                           value={postName}
                                           onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="add_post">
                                    <p>Post image url <span id="star">*</span></p>
                                    <input type="text"
                                           name="postImageUrl"
                                           id="postImageUrl"
                                           className="form-input"
                                           value={postImageUrl}
                                           onChange={this.handleOnChange}
                                    />
                                </div>

                                <div className="add_post">
                                    <p>Description <span id="star">*</span></p>
                                    <textarea name="description"
                                              type="text"
                                              className="form-input message"
                                              id="description"
                                              value={description}
                                              onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="add_post">
                                    <button name="button" type="normal" className="btn">{buttonText}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default PostForm;