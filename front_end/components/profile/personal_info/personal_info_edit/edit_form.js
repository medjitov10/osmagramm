import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateProfile } from './../../../../actions/index';
import { Route, Redirect } from 'react-router'

const validate = values => {
  const errors = {};
  if (!values.last_name) {
    errors.last_name = 'Required';
  }
  if (!values.first_name) {
    errors.first_name = 'Required';
  }
  if (!values.nickname) {
    errors.nickname = 'Required';
  }
  return errors;
};

const renderField = ({
  input,
  placeholder,
  type,
  label,
  meta: { touched, error }
}) => {

  const borderStyle = touched && error ? { border: '1px solid #c4818c', background: '#f2dede' } : {};

  return (
    <div className='edit-input'>
      <div className='edit-label'>
        <label htmlFor="">{label}</label>
      </div>
      <div className='edit-input-item'>
        <input style={borderStyle}
          {...input}
          placeholder={placeholder}
          type={type}
          className='form-input' />
        {touched &&
          (error && <div><span style={{color: '#a94442'}}>{error}</span></div>)}
      </div>

    </div>
  );
};

const renderFieldMessage = ({
  input,
}) => (
  <div className='edit-input'>
    <div className='edit-label'>
      <label htmlFor="">Bio</label>
    </div>
    <div className='edit-input-item'>
      <textarea rows={3} {...input} className='form-input'>
      </textarea>
    </div>
  </div>
);

class Form extends Component {
  constructor() {
    super();
    this.state = { errors: null }
  }
  static contextTypes = {
    router: PropTypes.object
  }

  onFormSubmit(props) {
    this.props.updateProfile(props).then( (data) => {
      const callback = data.payload.data;
      if ( callback.errors ) {
        this.setState({ errors: callback.errors })
      } else {
        const {nickname} = this.props.initialValues
        this.context.router.push(`/${callback.personalInfo.nickname}`)
      }

    })
  }

  render() {
    const { handleSubmit } = this.props;


    return (

      <form className='edit-form' onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
            <div className='errors'>
                {this.state.errors}
            </div>
            <Field
              name="last_name"
              component={renderField}
              type="text"
              label='Last Name'
            />

            <Field
              name="first_name"
              component={renderField}
              type="text"
              label='First name'
            />
            <Field
              name="nickname"
              component={renderField}
              type="text"
              label='Nickname'
            />

            <Field
              name="bio"
              component={renderFieldMessage}
              type="text"
              label='Bio'
            />
        <div className='buttonsubmit'>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
      )
  }
};

function mapStateToProps(state) {
  return {
    initialValues: {
      first_name: state.currentUser.current_user.first_name,
      last_name: state.currentUser.current_user.last_name,
      nickname: state.currentUser.current_user.nickname,
      bio: state.currentUser.current_user.bio,
    }
  }
}

let EditForm = reduxForm({
  form: 'simple',
  validate,
})(Form);


export default connect(mapStateToProps, {updateProfile})(EditForm);
