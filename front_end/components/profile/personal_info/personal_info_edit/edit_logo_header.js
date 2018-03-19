import React, { Component } from 'react';

import { updatelogo } from './../../../../actions/index';
import { connect } from 'react-redux';
import Loading from './loading';

class EditLogoHeader extends Component {
  constructor() {
    super();
    this.state = {
      onSpanClick: false,
      onInputChange: false,
    };
  }

  onSpanClick() {
    this.setState({onSpanClick: true});
  }

  onCancelClick() {
    this.setState({onSpanClick: false});
  }

  onInputChange(e) {
    this.setState({
      onInputChange: true,
      onSpanClick: false,
    });
    this.props.updatelogo(e.target.files[0])
      .then(() => {
        this.setState({onInputChange: false});
      });
  }

  popup() {
    return (
      <div className='edit-logo-popup'>
        <ul>
          <li>
            <div>
              <label htmlFor="title">Upload Photo </label>
              <input
                style={{ display: 'none' }}
                id="title"
                type="file"
                onChange={this.onInputChange.bind(this)}/>
            </div>
          </li>
          <li onClick={ () => this.onCancelClick() }><div>Cancel</div></li>
        </ul>
      </div>
    );
  }



  render() {
    const { logo_img, nickname } = this.props;
    return (
      <div className='edit-logo-header'>
        <div className='edit-logo-img'>
          <img src={logo_img} alt=""/>
        </div>
        <div className='edit-logo-nickname'>
          <div className='edit-logo-nickname-nickname'>{nickname}</div>
          <span onClick={ () => this.onSpanClick() }>Edit Profile Photo</span>
        </div>
        {
          this.state.onSpanClick ?
          this.popup() :
          null
        }
        {
          this.state.onInputChange ?
          <Loading /> :
          null
        }
      </div>
    );
  }
}



export default connect(null, {updatelogo})(EditLogoHeader);
