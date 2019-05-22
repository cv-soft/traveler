import React, {Component} from 'react';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.inputData = [];
        this.imageUrls = [];
        this.state = {
            count: 0,
            postName: '',
            description: '',
            postImageUrl: [],
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
        const post = ({postName: this.state.postName, description: this.state.description, postImageUrl: this.imageUrls});
        const path = `/api/users/${this.props.currentUser.user.id}/posts`;
        this.props.addPostAction(path, post).then(()=>{
            this.props.history.push('/posts');
        }).catch(()=>{
            return;
        })
    };
    editPost = () => {
        const path = `/api/users/${this.props.posts[0].user._id}/posts/${this.props.posts[0]._id}`
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
    handleOnChangeImageUrl = event =>{
        event.preventDefault();
        this.imageUrls[this.state.count] = event.target.value;
        this.setState({profileImageUrl: this.imageUrls});

    };
    handleAppendInput = event => {
        event.preventDefault();
        this.inputData.push(
            <div className="form__group">
                <input type="text"
                       value={this.state.postImageUrl[this.state.count]}
                       name="postImageUrl"
                       id="postImageUrl"
                       className="form__group--input"
                       placeholder="Image URL"
                       onInput={this.handleOnChangeImageUrl}
                />
                <label key="df" className="form__group--label" htmlFor="postImageUrl">Image URL</label>
            </div>
        )
        this.setState({count: this.state.count+1});

    };
    render(){
        const {postName, description, postImageUrl} = this.state;
        const {heading, buttonText, errors, removeError, history} = this.props;
        const input = this.inputData.map((element, index) =>{
           return <div key={index}>{element}</div>
        });
        history.listen(()=>{
            removeError();
        });
        console.log(this.state.profileImageUrl)

        return(
            <div>
                <section className="post-form-section">
                    <div className="row">
                        <h2 className="secondary-heading u-text-center u-margin-bottom-large">{heading}</h2>
                        {errors.message &&(<div className="alert alert-danger">{errors.message}</div>)}
                        <div className="form">
                            <form onSubmit={this.onSubmitHandler} className="post__form">
                                <div className="form__group">
                                    <input type="text"
                                           name="postName"
                                           id="postName"
                                           className="form__group--input"
                                           value={postName}
                                           placeholder="Title"
                                           onChange={this.handleOnChange}
                                    />
                                    <label className="form__group--label" htmlFor="postName">Title</label>
                                </div>
                                <div className="form__group">
                                    <input type="text"
                                           name="postImageUrl"
                                           id="postImageUrl"
                                           className="form__group--input"
                                           value={postImageUrl[0]}
                                           placeholder="Image URL"
                                           onChange={this.handleOnChangeImageUrl}
                                    />
                                    <label className="form__group--label" htmlFor="postImageUrl">Image URL</label>
                                </div>

                                {input}
                                <div className="btn-plus"><a href="#" onClick={this.handleAppendInput}><i className="far fa-plus-square"/></a></div>
                                <div className="form__group">
                                    <textarea name="description"
                                              type="text"
                                              className="form__group--textarea"
                                              id="description"
                                              value={description}
                                              placeholder="Description"
                                              onChange={this.handleOnChange}
                                    />
                                    <label className="form__group--label" htmlFor="description">Description</label>
                                </div>
                                <div className="add_post">
                                    <button name="button" type="normal" className="btn btn--green">{buttonText}</button>
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