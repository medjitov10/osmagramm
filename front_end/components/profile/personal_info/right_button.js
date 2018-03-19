import React, { Component } from 'react';
import { Link } from "react-router";

import {connect} from 'react-redux';

import { follow, unfollow, followFromFollowing, unFollowFromFollowing } from './../../../actions/index';

class RightButton extends Component {

  follow() {
    this.props.fromDetail ?
    this.props.followFromFollowing(this.props.user_id) :
    this.props.follow(this.props.user_id);
  }

  unfollow() {
    this.props.fromDetail ?
    this.props.unFollowFromFollowing(this.props.user_id) :
    this.props.unfollow(this.props.user_id);
  }

  rightButton() {
    if ( this.props.currentUser.current_user ) {
      if ( this.props.currentUser.current_user.id === this.props.user_id) {
        return (
          <Link to='/profile/edit/' className='button'>{this.props.fromDetail ? 'Edit' : 'Edit Profile'}</Link>
        );
      } else if ( !this.props.currentUser.following.includes(this.props.user_id) ) {
        return (
          <span className='button button-follow' onClick={ () => { this.follow(); }}>Follow</span>
        );
      } else {
        return (
          <span className='button button-unfollow' onClick={ () => { this.unfollow(); }}>Unfollow</span>
        );
      }
    }
  }


  render() {
    return (
      <div style={{minWidth: '100px'}}>
        {this.rightButton()}
      </div>
    );
  }
}

export default connect(null, { follow, unfollow, followFromFollowing, unFollowFromFollowing })(RightButton);
