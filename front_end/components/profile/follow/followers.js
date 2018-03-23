import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchFollowers} from './../../../actions/index';



class Followers extends Component {


  following() {
    this.props.fetchFollowers(this.props.personalInfo.id);
  }



  render() {
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
      </div>


    );
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.proFile.personalInfo,
});



export default connect(mapStateToProps, { fetchFollowers })(Followers);
