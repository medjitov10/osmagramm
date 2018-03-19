import React, { Component } from 'react';
import {connect} from 'react-redux';
import FollowingDetail from './following_detail';

import {fetchFollowing} from './../../../actions/index';

class Following extends Component {
  constructor() {
    super();
    this.state = { following: [] };
  }

  following() {
    this.props.fetchFollowing(this.props.personalInfo.id)
      .then( data => this.props.onFollowingClick(this.props.following));
  }

  closeDetail() {
    this.setState({ following: [] });
  }

  render() {
    const { following } = this.state;
    return (
      <div>
        {
          this.props.small ?
            <div onClick={ () => this.following()}>
              <div>{this.props.qty}</div>
              <div>following</div>
            </div> :
            <div onClick={ () => this.following()}>
                Following {this.props.qty}
            </div>
        }

      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.proFile.personalInfo,
  following: state.followings,
  state
});

export default connect(mapStateToProps, { fetchFollowing })(Following);
