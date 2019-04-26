import {apiCall} from "../../services/api";
import {GET_POSTS, ADD_POST, GET_POST} from "../actionTypes";
import { addError } from "./errors";

export const getPosts = posts => {
    return {
        type: GET_POSTS,
        posts
    }
};
export const addPost = post => {
    return {
        type: ADD_POST,
        post
    }
};
export const getPost = post => {
    return{
        type: GET_POST,
        post
    }
};
export const getPostAction = post => {
    return dispatch => {
        dispatch(getPost(post))
    }
};
export const addPostAction = (path, data) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('post', path, data).then(res =>{
                dispatch(addPost(res));
                resolve()
            }).catch(err => {
                dispatch(addError(err.message));
                reject()
            })
        })
    }
};

export const fetchPosts = (path) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('get',path).then(res => {
                dispatch(getPosts(res))
                resolve();
            }).catch(err =>{
                dispatch(addError(err.message));
                reject();
            })
        })
    }
};