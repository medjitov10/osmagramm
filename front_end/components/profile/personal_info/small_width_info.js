import React, { Component } from 'react';
import Followers from './../follow/followers';
import Following from './../follow/following';

export default class SmallWidthInfo extends Component {
  render() {
    return (
      <div className='small-width-info'>
        <div className="last-and-first-name">
          <span>{this.props.proFile.personalInfo.first_name} </span>
          <span>{this.props.proFile.personalInfo.last_name}</span>
          <p className='bio'>{this.props.proFile.personalInfo.bio}</p>
        </div>
        <div className='followers-following-small'>
          <div className="follower-line-small">
            <div>
              <div style={{marginTop: '10px'}}>{this.props.postsQty}</div>
              <div>posts</div>
            </div>
          </div>
          <div className="follower-line-small-f">
            <Followers qty={this.props.proFile.followers.length} onFollowingClick={this.props.onFollowingClick} small={true}/>

          </div>
          <div className="follower-line-small-f">
            <Following qty={this.props.proFile.following.length} onFollowingClick={this.props.onFollowingClick} small={true}/>
          </div>
        </div>
      </div>
    )
  }
}
