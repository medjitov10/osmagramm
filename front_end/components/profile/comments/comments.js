import React, {Component} from 'react';
import CommentItem from './comment_item';

class Comments extends Component {


  render() {
    const { nickname, body, current_user_id, post_id,fromNews } = this.props;

    return (
      <div style={{ marginBottom: '15px'}}>
        <div className='user-comment' >
          {
            fromNews ?
            null :
            <div className='comment'>
              <a href={nickname}>{nickname}</a>
              &nbsp;
              <span>{body}</span>
            </div>
          }
        </div>
        {
          this.props.comments.map( comment => {
            return <CommentItem
              comment={comment}
              key={comment.id}
              current_user_id={current_user_id}
              post_id={post_id}
              fromNews={this.props.fromNews}
            />
          })
         }
      </div>
    );
  }
}

export default Comments;
