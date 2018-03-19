import React, {Component} from 'react';
import FollowingDetailItem from './following_detail_item';
import {connect} from 'react-redux';

class FollowingDetail extends Component {
  render() {
    return (
      <div className="followers-cover" onClick={this.props.closeDetail}>
        <div className='current-post-item-close'>
          <i className="fas fa-times fa-lg"></i>
        </div>
        <div className="followers-detail-main" onClick={ e => e.stopPropagation() }>
          <div className="followers-header">
            {this.props.who}
          </div>
          <div>
            {
              this.props.following.map( follower => {
                return (
                  <div key={follower.id}>
                    <FollowingDetailItem follower={follower}
                      currentUser={this.props.currentUser}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser

  }
}

export default connect(mapStateToProps)(FollowingDetail);
