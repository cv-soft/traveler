import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = ({postName, imageUrl, description, userId, getPostAction, post, history}) => {
    const onClickHandler = event =>{
        event.preventDefault();
        getPostAction(`/api/users/${userId}/posts/${post._id}`);
        history.push(`/users/${userId}/posts/${post._id}`);
    };

    return(
        <div className="post_section">
            <img className="post_section_img left_animate" src={imageUrl} alt={postName}/>
            <div className="post_section_heading right_animate">
                <h4>{postName}</h4>
                <p className="post_section_text">{description}</p>
                <div className="post_section_btn">
                    <Link onClick={onClickHandler} to={`/users/${userId}/posts/${post._id}`}>read more</Link>
                </div>
                <div className="marker">
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i> Itineraries, Lisbon</span>
                </div>
            </div>
        </div>
    )
};
export default PostItem;