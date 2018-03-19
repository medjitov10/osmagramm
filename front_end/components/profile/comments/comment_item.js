import React, {Component } from 'react';
import { deleteComment } from './../../../actions/comments';
import {connect} from 'react-redux';

class CommentItem extends Component {
    onDeleteClick(id) {
      this.props.deleteComment(id);
    }
    render() {


      const {comment, post_id, current_user_id, fromNews} = this.props;
      const style = fromNews ? null : 'comment'
      return (
        <div className='user-comment' >

          <div className={style} style={{ width: '80%'}}>
            <a href={comment.user_nickname}>{comment.user_nickname}</a>
            &nbsp;
            <span>{comment.body}</span>
          </div>

          {
            post_id == current_user_id ?
            <div className='delete-comment' onClick={() => this.onDeleteClick(comment.id)}>
            </div> :
            comment.user_id === current_user_id ?
            <div className='delete-comment' onClick={() => this.onDeleteClick(comment.id)}>
            </div> : null
          }

        </div>
      )
    }
}


export default connect(null, { deleteComment })(CommentItem);
