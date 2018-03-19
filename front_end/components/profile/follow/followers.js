import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchFollowers} from './../../../actions/index';

import FollowingDetail from './following_detail';


class Followers extends Component {

  constructor() {
    super();
    this.state = { following: [] };
  }

  following() {
    this.props.fetchFollowers(this.props.personalInfo.id)
      .then( () => this.props.onFollowingClick(this.props.followers) );
  }



  render() {
    const { following } = this.state;
    return (
      <div>
        {
          this.props.small ?
            <div onClick={ () => this.following()}>
              <div>{this.props.qty}</div>
              <div>followers</div>
            </div> :
          <div onClick={ () => this.following()}>
            Followers {this.props.qty}
          </div>
        }
        {
          following.length ?
          <FollowingDetail following={this.props.followers} closeDetail={this.closeDetail.bind(this)} who='Followers'/> :
          null
        }
      </div>


    );
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.proFile.personalInfo,
  followers: state.followers,

});



export default connect(mapStateToProps, { fetchFollowers })(Followers);
