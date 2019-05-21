import React, { Component } from 'react';
import CommentItem from './CommentItem'

class CommentList extends Component {
    constructor(props){
        console.log('from comment list', props)
        super(props)
    }
    render(){
        let comments = this.props.comments.map(comment => {
            return <CommentItem key={comment._id}
                                currentUser={this.props.currentUser}
                                comment={comment}
                                removeCommentAction={this.props.removeCommentAction}
                    />
        });
        return(
            <div>
                {comments}
            </div>
        )
    }
}
export default CommentList;