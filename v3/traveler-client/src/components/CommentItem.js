import React from 'react';

const CommentItem = ({comment, removeCommentAction}) => {
   function onClickDeleteHandler (event){
        event.preventDefault();
        const path = `/api/users/${comment.user._id}/posts/${comment.post}/comments/${comment._id}`;
        removeCommentAction(path);
    };
    return(
        <div className="row">
            <div className="comment">
                <div className="col-1-of-4">
                    <img className="comment__profile-image" src={comment.user.profileImageUrl} alt=""/>
                </div>
                <div className="col-3-of-4">
                    <div className="comment__header">
                        <h3 className="comment__header__username">{comment.user.username}</h3>
                        <p className="comment__header__date">{comment.createdAt}</p>
                    </div>
                    <p className="paragraph">{comment.text}</p>
                    <div className="comment__buttons">
                        <a className="btn-text btn-text-small" onClick={onClickDeleteHandler} href="#">Delete</a>
                        <a className="btn-text btn-text-small" href="#">Edit</a>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default CommentItem;