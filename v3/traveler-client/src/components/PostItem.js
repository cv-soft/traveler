import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = ({postName, imageUrl, description, userId, getPostAction, post, history, createdAt}) => {
    const onClickHandler = event =>{
        event.preventDefault();
        getPostAction(`/api/users/${userId}/posts/${post._id}`);
        history.push(`/users/${userId}/posts/${post._id}`);
    };

    return(
        <div className="row">
            <div className="story">
                <div className="col-2-of-3">
                    <img className="story__image" src={imageUrl} alt={postName}/>
                </div>
                <div className="col-1-of-3">
                    <div className="story__info">
                        <h4 className="secondary-heading">{postName}</h4>
                        <p className="story__info__description">{description}</p>
                        <Link className="btn-text" onClick={onClickHandler} to={`/users/${userId}/posts/${post._id}`}>read more &rarr;</Link>
                        <p className="story__info__createdAt">Created at: {createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default PostItem;