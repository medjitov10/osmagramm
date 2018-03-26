import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loading from './personal_info/personal_info_edit/loading';
import PersonalInfo from './personal_info/personal_info';
import RightButton from './personal_info/right_button';
import Posts from './posts/posts';
import LargeWidthInfo from './personal_info/large_width_info';
import SmallWidthInfo from './personal_info/small_width_info';
import Detail from './detail_info/detail';

import { fetchInfo,  current_user, deleteDetail } from './../../actions/index';
import { fetchPosts, postItem } from './../../actions/posts';
import PostItem from './posts/post_item';

class Profile extends Component {
  constructor() {
    super();
    if ( window.innerWidth < 735 ) {
      this.state = {
        width: window.innerWidth,
        following: [],
        loaded: false,
        showPostItem: false,
        style: {},
        loading: false
      };
    } else {
      this.state = {
        width: screen.width,
        following: [],
        loaded: false,
        showPostItem: false,
        style: {},
        loading: false
      };
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
    this.props.deleteDetail();
  }


  clearPostItem() {
    this.setState({ showPostItem: false, style: {} })
  }

  renderPostItem() {
    return (
      <PostItem click={this.clearPostItem.bind(this)} />
    )
  }

  onPostClick(id) {
    this.setState({
      style: {
        position: 'fixed',
        width: '100%'
      },
      loading: true
    })
    this.props.postItem(id).then( () => {
      this.setState({showPostItem: true, loading: false});
    });
  }

  render() {
    const style = this.props.detail.length ?
    { position: 'fixed', width: '100%'} : this.state.style
    if (this.props.proFile && this.state.loaded && this.state.loading === false ) {
      return (
        <div>
          {
            this.props.postItem1.user_id && this.state.showPostItem ?
            this.renderPostItem() :
            null
          }
          {
            this.props.detail.length ?
            <Detail
              following={this.props.detail[0]}
              closeDetail={this.closeDetail.bind(this)}
              who={this.props.detail[1]}
            /> : null
          }
          <div style={style}>
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

                  {
                    this.state.width > 735 ?
                      <LargeWidthInfo
                        onFollowingClick={this.onFollowingClick.bind(this)}
                        proFile={this.props.proFile}
                      />  : null
                  }


              </div>
              {
                this.state.width < 735 ?
                <SmallWidthInfo
                  postsQty={this.props.posts.length}
                  onFollowingClick={this.onFollowingClick.bind(this)}
                  proFile={this.props.proFile}
                />  : null
              }

            </div>

            <div className='posts-main'>
              <Posts posts={this.props.posts} onPostClick={this.onPostClick.bind(this)}/>
            </div>
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
  posts: state.posts,
  postItem1: state.postItem,
  detail: state.detail
});

export default connect(mapStateToProps, { fetchInfo,  current_user, fetchPosts, postItem, deleteDetail})(Profile);
