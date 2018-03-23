import React, { Component } from 'react';
import { connect } from 'react-redux';
import {LikePost, UnLikePost} from './../../../actions/posts';
import { fetchLikeOwners } from './../../../actions/index';

class Likes extends Component {


  likePost() {
    this.props.LikePost(this.props.post_id);
  }

  unlikePost() {
    this.props.UnLikePost(this.props.post_id);
  }

  onLikeInfoClick(params) {
    this.props.fetchLikeOwners(params)
  }

  render() {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const { currentUser, created_at } = this.props;

    const date = new Date(created_at);
    console.log(date.getDay());
    console.log(date);
    const data_in_word = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const likes = this.props.likes.filter( like => {
      return like.post_id == this.props.post_id;
    });

    const users_id = likes.map( l => l.user_id);
    return (
      <div className='like-row'>
        {
          users_id.includes(currentUser.id) ?
          <div onClick={this.unlikePost.bind(this)} className='like liked'></div> :
          <div onClick={this.likePost.bind(this)} className='like no-like'>
          </div>
        }
        <div className='amount-of-likes' onClick={ () => {
          this.onLikeInfoClick(users_id)
        }}>
          {
            likes.length > 0 ?
            likes.length == 1 ? `1 like` : `${likes.length} like`  :
            null
          }
        </div>
        <div className='post-data'
          style={
            this.props.fromNews ? { bottom: '0'} : null
        }>
          {data_in_word}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes
  }
}

export default connect(mapStateToProps, { LikePost, UnLikePost, fetchLikeOwners })(Likes)
