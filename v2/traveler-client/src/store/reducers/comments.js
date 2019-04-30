import { GET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from "../actionTypes";

export default (state=[], action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return [...action.comments];
        case ADD_COMMENT:
            return[...state, action.comment];
        default:
            return state;
    }
}