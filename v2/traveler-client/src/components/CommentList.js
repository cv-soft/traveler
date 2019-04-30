import React, { Component } from 'react';
import CommentItem from './CommentItem'

class CommentList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let comments = this.props.comments.map(comment => {
            return <CommentItem key={comment._id} comment={comment}/>
        });
        return(
            <div>
                {comments}
            </div>
        )
    }
}
export default CommentList;