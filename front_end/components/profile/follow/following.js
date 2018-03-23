import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchFollowing} from './../../../actions/index';

class Following extends Component {

  following() {
    this.props.fetchFollowing(this.props.personalInfo.id);
  }

  render() {

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
});

export default connect(mapStateToProps, { fetchFollowing })(Following);
