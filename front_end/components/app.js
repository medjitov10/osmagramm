import React, {Component} from 'react';
import Profile from './profile/profile';
import Header from './header/header';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
