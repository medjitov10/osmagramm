import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers/reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class AppDemo extends Component {
  render() {
    return (
      <div>TEst</div>
    )
  }
}



document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('content');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router path="demo" routes={AppDemo}/>
    </Provider>, root);
});
