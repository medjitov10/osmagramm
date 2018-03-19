import React, {Component} from 'react';

import {connect} from 'react-redux';

class PersonalInfo extends Component {

  render() {
    const {last_name, first_name, nickname, user_id} = this.props.personalInfo;
      return (
        <div >
          <span className='nickname'>{nickname}</span>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  personalInfo: state.proFile.personalInfo
});



export default (PersonalInfo);
