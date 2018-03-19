import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addPost } from './../../../actions/posts';

class AddPost extends Component {
  constructor() {
    super();
    this.state = { body: '', file: {}, formStyle: {}, divStyle: {}, errors: ''};
  }

  onInputChange(e) {
    this.setState({ body: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const obj = {
      body: this.state.body,
      file: this.state.file
    };

    this.props.addPost(obj).then( (data) => {
      if ( data.payload.data.errors )
        {
          this.setState({errors: data.payload.data.errors})
        } else {
          this.props.onCloseClick();
        }
    });

    this.setState({ body: ''});
  }

  onFileChange(e) {
    this.setState({
      file: e.target.files[0]
    })
  }

  componentWillMount() {
    const animation = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.setState({
            formStyle: {
              marginTop: '15%'
            }
          });
        }, 10);

        let wait = setTimeout(() => {
          resolve();
        }, 1000)
      });
    }

    animation().then( (response) => {
      this.setState({
        divStyle: {
          background: 'rgba(0,0,0,.3)'
        }
      })
    });
  }


  render() {

    return (
      <div className='add-post' style={this.state.divStyle} onClick={this.props.onCloseClick}>
        <div className='current-post-item-close'>
          <i className="fas fa-times fa-lg"></i>
        </div>
        <form onSubmit={ this.onFormSubmit.bind(this)} style={this.state.formStyle} onClick={ e => e.stopPropagation()}>
          <div className='errors' style={{ height: '0px'}}>{this.state.errors}</div>
          <div className='add-post-body'>
            <label htmlFor="body">Write a caption: </label><br/>
            <textarea id='body' type="text" value={this.state.body} onChange={this.onInputChange.bind(this)}/>
          </div>

          <div className='add-post-last-div'>
            <label htmlFor="myfileinput">
              <div className='upload-img'></div>
            </label>
            <input style={{display: 'none'}}
              id='myfileinput' name="myFile"
              type="file"
              onChange={this.onFileChange.bind(this)}/>
          <div className='buttonsubmit'>
            <button type='submit'>new post</button>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {addPost})(AddPost);
