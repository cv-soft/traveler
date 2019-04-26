import { GET_POSTS, ADD_POST, GET_POST } from "../actionTypes";

export default (state=[], action) => {
    switch (action.type) {
        case GET_POST:
            return state.filter(post=>post._id === action.post._id);
        case GET_POSTS:
            return [...action.posts];
        case ADD_POST:
            return [...state, action.post];
        default:
            return state;
    }
}