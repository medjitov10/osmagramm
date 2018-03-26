import React, {Component} from 'react';
import Like from './../profile/like/like';
import NewsComments from './news_comments';

export default class NewsItem extends Component {

  constructor() {
    super();
    this.state = { LoadMoreComment: false}
  }

  render () {
    const {post, currentUser } = this.props;
    
    return (
      <div className='news-post' key={post.id}>
        <div className='news-header'>
          {
            post.user_img !== '/logo_imgs/thumb/missing.png' ?
            <div style={{
              background: `url(${post.user_img}) center center`,
              backgroundSize: 'cover',
              height: '40px'}}></div> :
            <div className='not-found-avatar' style={{ height: '40px'}}></div>
          }
          <a href={post.user}><div>{post.user}</div></a>


        </div>


        <div className='news-post-img' style={{
          background: `url(${post.img_url}) center center`,
          backgroundSize: 'cover'
        }}>
        </div>
        <div className='news-like-info'>
          <Like currentUser={currentUser.current_user}
            post_id={post.id}
            created_at={post.created_at}
            fromNews={true}
            key={post.id}
            callback={this.props.callback}
          />
        </div>
        {
          post.body.length ?
          <div className='news-body'>
            <a href={post.user}><span>{post.user} </span></a>
            {post.body}
          </div> :
          null
        }

        <NewsComments post={post} currentUser={currentUser}/>
      </div>
    )
  }
}
