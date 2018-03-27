import React, { Component } from "react";
import {connect} from 'react-redux';

import {addComment, addCommentNews} from './../../../actions/comments';

class AddComment extends Component {

  constructor() {
    super();
    this.state = { body: '' };
  }

  onButtonClick(e) {
    const str = e.target.value;
    if (str.charCodeAt(str.length-1) === 10) {
      this.props.fromNews ?
      this.props.addCommentNews(this.state.body, this.props.post_id):
      this.props.addComment(this.state.body, this.props.post_id);
      this.setState({body: ''});
    } else {
      this.setState({ body: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <form >
          <textarea type="text"
            value={this.state.body}
            onChange={ e => {  this.onButtonClick(e);}}
            placeholder='Add a comment...'>

          </textarea>
        </form>
      </div>
    );
  }
}

export default connect(null, {addComment, addCommentNews})(AddComment);
