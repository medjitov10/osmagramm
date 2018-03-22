import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loading from './personal_info/personal_info_edit/loading';
import PersonalInfo from './personal_info/personal_info';
import Followers from './follow/followers';
import Following from './follow/following';
import RightButton from './personal_info/right_button';
import Posts from './posts/posts';
import LargeWidthInfo from './personal_info/large_width_info';
import SmallWidthInfo from './personal_info/small_width_info';
import FollowingDetail from './follow/following_detail';

import { fetchInfo, follow, current_user, unfollow } from './../../actions/index';
import { fetchPosts } from './../../actions/posts';


class Profile extends Component {
  constructor() {
    super();
    if ( window.innerWidth < 735 ) {
      this.state = {width: window.innerWidth, following: [], loaded: false};
    } else {
      this.state = {width: screen.width, following: [], loaded: false};
    }

  }

  componentWillMount() {
    this.props.fetchInfo(this.props.params.nickname).then( (data) => {
      this.props.fetchPosts(data.payload.data.personalInfo.id).then( () => this.setState({loaded: true}));
    });
    this.props.current_user();


    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    if ( window.innerWidth < 735 ) {
      this.setState({width: window.innerWidth});
    } else {
      this.setState({width: screen.width, });
    }
  }

  onFollowingClick(callback) {
    this.setState({following: callback})
  }

  closeDetail() {
    this.setState({ following: [] });
  }


  render() {
    if (this.props.proFile && this.state.loaded) {
      return (
        <div>
          <div className='personal-info-main'>
            <div className="logo-main">
              {
                this.props.proFile.personalInfo.logo_img !== '/logo_imgs/square/missing.png' ?
                <div style={{
                  background: `url(${this.props.proFile.personalInfo.logo_img}) center center`,
                  backgroundSize: 'cover'
                }}>
                </div> :
                <div className='not-found-avatar'></div>
              }

            </div>


            <div className="info-right-main">
              <div className='nickname-and-button'>

                <div className='personal-info'>
                  <PersonalInfo
                    personalInfo = {this.props.proFile.personalInfo}
                  />
                </div>
                <div className='edit-follow-unfollow-button'>
                  <RightButton
                    user_id={this.props.proFile.personalInfo.id}
                    currentUser={this.props.currentUser}
                  />
                  <a rel="nofollow" data-method="delete" href="/users/sign_out"><div className='sign-out'></div></a>

                </div>
              </div>

                { this.state.width > 735 ?
                    <LargeWidthInfo
                      onFollowingClick={this.onFollowingClick.bind(this)}
                      proFile={this.props.proFile}
                    />  : null

                }
                {
                  this.state.following.length ?
                  <FollowingDetail
                    following={this.state.following}
                    closeDetail={this.closeDetail.bind(this)}
                    who='Followings'
                  /> :
                  null
                }

            </div>
            { this.state.width < 735 ?
              <SmallWidthInfo
                postsQty={this.props.posts.length}
                onFollowingClick={this.onFollowingClick.bind(this)}
                proFile={this.props.proFile}
              />  : null
            }

          </div>

          <div className='posts-main'>
            <Posts posts={this.props.posts}/>
          </div>
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }

  }
}

const mapStateToProps = (state) => ({
  proFile: state.proFile,
  currentUser: state.currentUser,
  posts: state.posts
});

export default connect(mapStateToProps, { fetchInfo, follow, unfollow, current_user, fetchPosts})(Profile);
