import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from "../store/actions/auth";
import { fetchPosts } from "../store/actions/posts";

class Navbar extends Component{
    logout = event => {
        event.preventDefault();
        this.props.logOut();
        this.props.history.push('/')
    };
    toOwnPosts = event => {
        event.preventDefault();
        this.props.fetchPosts(`/api/users/${this.props.currentUser.user.id}/posts`);
        this.props.history.push(`/users/${this.props.currentUser.user.id}/posts`);
    };
    render(){
        const {currentUser} = this.props;
        return(
            <div className="navigation">
                <nav className="navigation__background">
                    <div className="navigation__menu--left">
                        <ul className="navigation__list">
                            <li className="navigation__list--item"> <Link className="navigation__list--link" to="/">Traveller Blog</Link></li>
                            <li className="navigation__list--item"> <Link className="navigation__list--link" to="/about">About</Link></li>
                            <li className="navigation__list--item"> <Link className="navigation__list--link" to="/contacts">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="navigation__menu--right">
                        {currentUser.isAuthenticated ? (
                            <ul className="navigation__list">
                                <li className="navigation__list--item"><Link onClick={this.toOwnPosts} className="navigation__list--link" to={`/users/${currentUser.user.id}/posts`}>{currentUser.user.username}</Link></li>
                                <li className="navigation__list--item"><Link className="navigation__list--link" to={`/users/${currentUser.user.id}/posts/new`}>New Post </Link></li>
                                <li className="navigation__list--item"><Link className="navigation__list--link" to='/' onClick={this.logout}>Log out</Link></li>
                            </ul>
                            )
                            :(
                                <ul className="navigation__list">
                                    <li className="navigation__list--item"><Link className="navigation__list--link" to="/signin">Login</Link></li >
                                    <li className="navigation__list--item"><Link className="navigation__list--link" to="/signup">Sign up</Link></li>
                                </ul>
                            )}
                    </div>
                </nav>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        currentUser: state.currentUser
    }
}
export default withRouter(connect(mapStateToProps, {logOut, fetchPosts})(Navbar));
