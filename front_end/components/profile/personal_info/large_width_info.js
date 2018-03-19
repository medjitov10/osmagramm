import React, { Component } from 'react';
import Followers from './../follow/followers';
import Following from './../follow/following';

export default class LargeWidthInfo extends Component {
  render() {

    return (
      <div>
        <div className='followers-following'>
          <div className="followers">
            <Followers onFollowingClick={this.props.onFollowingClick}  qty={this.props.proFile.followers.length} />
          </div>

          <div className="following">
            <Following onFollowingClick={this.props.onFollowingClick}  qty={this.props.proFile.following.length} />
          </div>
        </div>
        <div className="last-and-first-name">
          <span>{this.props.proFile.personalInfo.first_name} </span>
          <span>{this.props.proFile.personalInfo.last_name} </span>
          <span className='bio'>{this.props.proFile.personalInfo.bio}</span>
        </div>
      </div>
    )

  }
}
