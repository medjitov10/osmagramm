import React, {Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { last_name, first_name, nickname, logo_img } = this.props.user;

    return (
      <a href={nickname} className='list-item-main' style={{marginTop: '13px' }}>
        <div style={{ height: '55px', marginTop: '5px', display: 'flex' }}>
          {
            logo_img !== '/logo_imgs/thumb/missing.png' ?
            <div className='list-item-user-img'
              style={{background: `url(${logo_img}) center`,
              backgroundSize: 'cover'}}></div> :
              <div className='list-item-user-img'
                style={{background: `url(https://s3.us-east-2.amazonaws.com/osman-gramm/users/logo_imgs/000/000/029/assets/question.png)
                center`, backgroundSize: 'cover'}}></div>


          }
          <div className='list-item-info'>
            <div className='list-item-nickname'>{nickname}</div>
            <div className='list-item-name'>{first_name} {last_name}</div>
          </div>
        </div>
      </a>
    )
  }
}
