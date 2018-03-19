import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import { updateProfile } from './../../../../actions/index';
import EditLogoHeader from './edit_logo_header';
import EditForm from './edit_form';

class ProFileInfoEdit extends Component {



  render() {
    if ( this.props.proFile ) {
      const {nickname, last_name, first_name, logo_img, bio} = this.props.proFile;

      return (
        <div className="personal-info-edit-main">
            <EditLogoHeader nickname={nickname} logo_img={logo_img}/>
            <EditForm />
        </div>
      );
    } else {
      return <div></div>;
    }


  }
}

const mapStateToProps = state => ({
  proFile: state.currentUser.current_user
});


export default connect(mapStateToProps, { updateProfile })(ProFileInfoEdit);
