import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import AuthForm from '../components/AuthForm';
import PostList from './PostList'
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import {addPostAction, getPostAction, editPostAction } from "../store/actions/posts";
import PostForm from '../components/PostForm';
import PostContainer from './PostContainer';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import withAuth from '../hocs/withAuth';

const Main =({authUser, errors, removeError, currentUser, addPostAction, getPostAction, posts, editPostAction}) => {
    return(
        <div>
            <Switch>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contacts" component={ContactPage}/>
                <Route exact path="/users/:id/posts/new" render={props =>
                    <PostForm addPostAction={addPostAction}
                              removeError={removeError}
                              currentUser={currentUser}
                              heading='Add new story'
                              buttonText='Add'
                              errors={errors}
                              {...props}/>}
                />
                <Route exact path="/users/:id/posts/:postId/edit" render={props =>
                    <PostForm
                        editPostAction={editPostAction}
                        removeError={removeError}
                        getPostAction={getPostAction}
                        edit={true}
                        posts={posts}
                        heading='Edit post'
                        buttonText='Save changes'
                        errors={errors}
                        {...props}/>}
                />
                <Route exact path="/users/:id/posts" render={props => <PostList postsOwner {...props}/>}/>
                <Route exact path="/posts" render={props => <PostList {...props}/>}/>

                <Route exact path="/users/:id/posts/:postId" component={PostContainer}/>
                <Route exact path="/" render={props => <HomePage currentUser={currentUser} {...props}/>} />
                <Route exact path="/signup" render={props =>
                    <AuthForm removeError={removeError}
                              errors={errors}
                              signed
                              authUser={authUser}
                              buttonText="Sign up"
                              heading="Join Pro Traveler Blog Today"
                              {...props}/>}
                />
                <Route exact path="/signin" render={props =>
                    <AuthForm removeError={removeError}
                              errors={errors}
                              authUser={authUser}
                              buttonText="Log in"
                              heading="Welcome Back!"
                              {...props}/>}
                />
            </Switch>
        </div>
    )
};
function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors,
        posts: state.posts
    }
}
export default withRouter(connect(mapStateToProps, {authUser, removeError, addPostAction, getPostAction, editPostAction})(Main));