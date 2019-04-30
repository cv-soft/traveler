import React from 'react';

const CommentItem = ({comment, removeCommentAction}) => {
   function onClickDeleteHandler (event){
        event.preventDefault();
        const path = `/api/users/${comment.user._id}/posts/${comment.post}/comments/${comment._id}`;
        removeCommentAction(path);
    };
    return(
        <div className="comments">
            <div className="comments_user_area">
                <img src={comment.user.profileImageUrl} alt=""/>
			<span><a href="4">{comment.user.username}</a> </span>
                    <span className="data">{comment.createdAt}</span>
                    <p>{comment.text}</p>
                    <ul className="btn">
                        <li><a onClick={onClickDeleteHandler} href="#">Delete</a></li>
                        <li><a href="#">Edit</a></li>
                    </ul>
            </div>
        </div>
    )
};
export default CommentItem;