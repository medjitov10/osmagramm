import React, {Component} from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {fetchNews, fetchLikeOwners} from './../../actions/news';
import FollowingDetail from './../profile/follow/following_detail';

import NewsItem from './news_item';

class News extends Component {
  constructor() {
    super();
    this.state = { users: []}
  }

  componentWillMount() {
    this.props.fetchNews();
  }

  onLikeInfoClick(params) {
    const ids = params.map( par => par.user_id )
    const request = axios.put(`/likes/id`, {user_id: ids}).then( data => this.setState({ users: data.data }) );
  }

  closeDetail() {
    this.setState({ users: []})
  }

  render() {

    if ( this.props.currentUser ) {
      return (
        <div className='news'>
          
          {
            this.props.news.map( post => {
              return (
                <NewsItem key={post.id} post={post} currentUser={this.props.currentUser} callback={this.onLikeInfoClick.bind(this)}/>
              )
            })
          }
          {
            this.state.users.length ?
            <FollowingDetail
              following={this.state.users}
              closeDetail={this.closeDetail.bind(this)}
              who='Likes'
            /> : null
          }

        </div>

      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, {fetchNews, fetchLikeOwners})(News)
