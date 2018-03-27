import React, {Component} from 'react';
import Profile from './profile/profile';
import Header from './header/header';
import Footer from './profile/footer';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
