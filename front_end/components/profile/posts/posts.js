import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts, postItem } from '../../../actions/posts';
import Comments from '../comments/comments';
import PostItem from './post_item';
import AddPost from './add_post'
class Posts extends Component {

  constructor() {
    super();
    this.state = {
      add_post: false
    };
  }


  renderPosts() {
    const posts = this.props.posts.reduce((chunk, item, i) => {
      if (i % 3 === 0) {
        chunk.push([item]);
      } else {
        chunk[chunk.length - 1].push(item);
      }
      return chunk;
    }, []);

    return posts.map ( (postsRow, index) => {
      return (
        <div className='my-row' key={index}>
          {
            postsRow.map ( post => {
              return (
                  <div className='post-item' key={post.id} onClick={ () => this.props.onPostClick(post.id) }>
                    <img src={post.post_image} alt=""/>
                  </div>
                );
            })
          }
        </div>
      )
    });
  }

  onAddPostClick() {
    this.setState({ add_post: true });
  }

  onCloseClick() {
    this.setState({ add_post: false });
  }

  render() {

    return (
      <div className='posts'>
        {
          this.props.currentUser === this.props.proFile ?
          <div className='add-post-style' onClick={ () => this.onAddPostClick()}>
            <i className="fa-lg fas fa-plus-circle"></i>
          </div> : null
        }

        {
          this.state.add_post  ?
          <AddPost onCloseClick={this.onCloseClick.bind(this)}/> : null
        }
        {this.renderPosts()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    proFile: state.proFile.personalInfo.id,
    currentUser: state.currentUser.current_user.id,

  }
}

export default connect(mapStateToProps, { postItem })(Posts);
