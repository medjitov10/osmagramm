import React,{ Component } from 'react';
import Comments from './../profile/comments/comments';
import AddComment from './../profile/comments/add_comment';

export default class NewsComments extends Component {
  constructor() {
    super();
    this.state = { LoadMoreComment: false }
  }

  onLoadCommentsClick() {
    this.setState({ LoadMoreComment: true})
  }

  LoadMoreComment(post, currentUser) {


    return (
      <div>
        <div onClick={ () => this.onLoadCommentsClick() } className='load-more-comments'>Load More Comments</div>
        <Comments
          comments={post.comments.slice(post.comments.length-3, post.comments.length)}
          body={post.body}
          nickname={post.user}
          current_user_id={currentUser.current_user.id}
          post_id={post.user_id}
          fromNews={true}
        />
      </div>
    )
  }

  render() {
    const { post, currentUser } = this.props;
    return (
      <div>
        {
          post.comments.length > 3 ?
          this.state.LoadMoreComment ?
          <Comments
            comments={post.comments}
            body={post.body}
            nickname={post.user}
            current_user_id={currentUser.current_user.id}
            post_id={post.user_id}
            fromNews={true}
          /> :
          this.LoadMoreComment(post, currentUser) :
          <Comments
            comments={post.comments}
            body={post.body}
            nickname={post.user}
            current_user_id={currentUser.current_user.id}
            post_id={post.user_id}
            fromNews={true}
          />
        }
        <div className='add-comment-news'>
          <AddComment post_id={post.id} fromNews={true}/>
        </div>
      </div>


    )
  }
}
