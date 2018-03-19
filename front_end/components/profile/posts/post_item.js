import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddComment from '../comments/add_comment';
import Comments from './../comments/comments'
import Likes from './../like/like';
import { clearPostItem } from './../../../actions/posts';

class PostItem extends Component {


  render() {
    const { postItem, currentUser, personalInfo } = this.props;
    const comments = postItem.comments ? postItem.comments : [];

    return (
      <div className='current-post-item-main' onClick={ this.props.click }>
        <div className='current-post-item-close'>
          <i className="fas fa-times fa-lg"></i>
        </div>
        <div className='current-post-item' onClick={ e => e.stopPropagation() }>

          <div className='current-post-item-img'
            style={{ backgroundImage: `url(${postItem.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          </div>


          <div className='current-post-item-comments'>
            <div className='current-post-item-comments-img'>
              <a href={personalInfo.nickname}>
                { personalInfo.logo_img !== '/logo_imgs/square/missing.png' ?
                  <div style={{
                    background: `url(${personalInfo.logo_img}) center center`,
                    backgroundSize: 'cover'
                  }}></div> :
                  <div className='not-found-avatar' ></div>
                }

              </a>
              <div className='comments-font'>{personalInfo.nickname}</div>
            </div>

              <div className='comments'>
                <Comments comments={comments}
                  body={postItem.body}
                  nickname={personalInfo.nickname}
                  current_user_id={currentUser.current_user.id}
                  post_id={postItem.user_id}
                />

              </div>
              <div className='bottom-comment-menu'>
                <div className='comment-info'>
                  <Likes currentUser={currentUser.current_user} post_id={postItem.id} created_at={postItem.created_at}/>
                </div>
                <div className='add-comment-div'>
                  <AddComment post_id={postItem.id}/>
                </div>
              </div>
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personalInfo: state.proFile.personalInfo,
    postItem: state.postItem,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, {clearPostItem})(PostItem);
