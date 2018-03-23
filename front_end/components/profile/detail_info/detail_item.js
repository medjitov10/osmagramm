import React, { Component } from 'react';
import RightButton from './../personal_info/right_button';

export default class DetailItem extends Component {
  render() {

    return (
      <div className='following-detail-item'>
        <div className='following-detail-item-logo'>
          { this.props.follower.logo_img !== '/logo_imgs/thumb/missing.png' ?
            <div style={{
              background: `url(${this.props.follower.logo_img}) center center`,
              backgroundSize: 'cover'
            }} ></div> :
            <div className='not-found-avatar'></div>
          }
        </div>
        <div className='following-detail-item-nickname'>
          <div>
            <a href={this.props.follower.nickname}>
              <span>{this.props.follower.nickname}</span>
            </a>
          </div>
          <div className='following-detail-item-full-name'>
            <span>{this.props.follower.first_name} </span>
            <span>{this.props.follower.last_name}</span>
          </div>
        </div>
        <div className='following-detail-item-following'>
          <RightButton
            user_id={this.props.follower.id}
            currentUser={this.props.currentUser}
            fromDetail={true}
          />
        </div>
      </div>
    )
  }
}
