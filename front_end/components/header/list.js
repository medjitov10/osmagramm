import React, {Component} from 'react';
import ListItem from './list_item';

export default class List extends Component {
  render() {
    console.log(this.props.searchedUsers);
    return (
      <div>
        <div className='search-list-arrow'></div>
        <div className='search-list'>
          {
            this.props.searchedUsers.map( user => {
              return (
                <ListItem user={user} key={user.id}/>
              )
            })
          }
        </div>

      </div>
    )
  }
}
