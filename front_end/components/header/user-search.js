import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSearchUsers } from './../../actions/index';
import List from './list';

class UserSearch extends Component {
  constructor() {
    super();
    this.state = { value: ''}
  }

  onInputChange(e) {
    this.setState({ value: e.target.value }, () => {
      this.props.fetchSearchUsers(this.state.value);
    })

  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {searchedUsers} = this.props;
    return (
      <div className='header-input' onSubmit={ (e)=> { this.onFormSubmit(e) }}>
        <form action="">
          <i className="fas fa-search fa-sm header-input-i"></i>
          <div className='header-input-close' onClick={ () => this.setState({value: ''})}>
            <i className="far fa-times-circle"
              ></i>
          </div>
          <input type="text" onChange={ (e) => this.onInputChange(e)} value={this.state.value}/>
        </form>

        {
          searchedUsers.length ?
          <List searchedUsers={searchedUsers}/> :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchedUsers: state.searchedUsers
  }
}

export default connect(mapStateToProps, {fetchSearchUsers})(UserSearch);
