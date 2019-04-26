import React, { Component } from 'react';
import '../stylesheets/new.css';

class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            profileImageUrl: '',
            password: ''
        }
    }
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    onSubmitHandler = event => {
        event.preventDefault();
        const type = this.props.signed ? 'signup' : 'signin';
        this.props.authUser(type, this.state).then(()=>{
            this.props.history.push('/');
        }).catch(()=>{
            return;
        });
        this.setState({
            username: '',
            email: '',
            password: '',
            profileImageUrl: ''
        })
    };
    render(){
        const {buttonText, heading, signed, errors, removeError, history} = this.props;
        const {username, email, password, profileImageUrl} = this.state;
        history.listen(()=>{
            removeError();
        });
        return(
            <div>
                <section>
                    <div className="container form_animate">
                        <h4>{heading}</h4>
                        {errors.message &&(<div className="alert alert-danger">{errors.message}</div>)}
                        <div className="form">
                            <form onSubmit={this.onSubmitHandler} className="form_area">
                                <div className="add_post">
                                    <p>Email <span id="star">*</span></p>
                                    <input type="text"
                                           name="email"
                                           id="email"
                                           className="form-input"
                                           value={email}
                                           onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="add_post">
                                    <p>Password <span id="star">*</span></p>
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           className="form-input"
                                           value={password}
                                           onChange={this.handleOnChange}
                                    />
                                </div>
                                {signed && (
                                    <div>
                                        <div className="add_post">
                                            <p>User name <span id="star">*</span></p>
                                            <input type="text"
                                                   name="username"
                                                   id="username"
                                                   className="form-input"
                                                   value={username}
                                                   onChange={this.handleOnChange}
                                            />
                                        </div>
                                        <div className="add_post">
                                            <p>Profile image url <span id="star">*</span></p>
                                            <input type="text"
                                                   name="profileImageUrl"
                                                   id="profileImageUrl"
                                                   className="form-input"
                                                   value={profileImageUrl}
                                                   onChange={this.handleOnChange}
                                            />
                                        </div>
                                    </div>
                                    )}
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

export default AuthForm;