import React, {Component} from 'react';
import axios from 'axios';
import Loading from './../profile/personal_info/personal_info_edit/loading';

import {connect} from 'react-redux';
import {fetchNews, fetchLikeOwners} from './../../actions/news';
import { deleteDetail } from './../../actions/index';
import Detail from './../profile/detail_info/detail';

import NewsItem from './news_item';

class News extends Component {
  constructor() {
    super();
    this.state = { users: []}
  }

  componentWillMount() {
    this.props.fetchNews();
  }

  closeDetail() {
    this.props.deleteDetail();
  }

  render() {

    if ( this.props.currentUser && this.props.news ) {
      return (
        <div className='news'>
          {
            this.props.news.map( post => {
              return (
                <NewsItem key={post.id} post={post} currentUser={this.props.currentUser}/>
              )
            })
          }
          {
            this.props.detail.length ?
            <Detail
              following={this.props.detail[0]}
              closeDetail={this.closeDetail.bind(this)}
              who={this.props.detail[1]}
            /> : null
          }
        </div>
      )
    } else {
      return (
        <Loading />
      );
    }

  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    currentUser: state.currentUser,
    detail: state.detail
  }
}

export default connect(mapStateToProps, {fetchNews, fetchLikeOwners, deleteDetail})(News)
