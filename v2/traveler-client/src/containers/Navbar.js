import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from "../store/actions/auth";

class Navbar extends Component{
    logout = event => {
        //event.preventDefault();
        this.props.logOut();
    };
    render(){
        const {currentUser} = this.props;
        return(
            <div>
                <header >
                    <div className="container">
                        <nav className="menu_main">
                            <Link to="/posts">
                                <div className="logo">
                                    <span id="logo">
                                        ProTraveler Blog
                                    </span>
                                </div>
                            </Link>
                            <div className="menu">
                                <ul>
                                    <li> <Link to="/about">About</Link></li>
                                    <li> <Link to="/contacts">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="registration_list">
                                    {currentUser.isAuthenticated ? (
                                        <ul>
                                            <li><Link to={`/users/${currentUser.user.id}/posts`}>{currentUser.user.username}</Link></li>
                                            <li><Link to={`/users/${currentUser.user.id}/posts/new`}>New Post </Link></li>
                                            <li><Link to='/' onClick={this.logout}>Log out</Link></li>
                                        </ul>
                                        )
                                        :(
                                        <ul>
                                            <li> <Link to="/signin"> Login</Link></li >
                                            <li><Link to="/signup"> Registration </Link></li>
                                        </ul>
                                    )}
                            </div>
                         </nav>
                     </div>
                </header>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {logOut})(Navbar);
