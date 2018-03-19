import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {current_user} from './../actions/index';

class Header extends Component {
  componentWillMount() {
    this.props.current_user();
  }

  render () {
    const nickname =
      this.props.currentUser.current_user ?
      this.props.currentUser.current_user.nickname :
      null;
    return (
      <div className='header'>
        <div className='header-content'>
          <Link to="/"><div className='logo-img'></div></Link>
          <a href={`/${nickname}`}><div className='profile-icon'></div></a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { current_user })(Header);
