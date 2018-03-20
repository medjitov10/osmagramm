import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers/reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Test extends Component {
  render() {
    return (
      <div>
        TEst
      </div>
    )
  }
}



document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('content');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Test />
      {/* <Router history={browserHistory} routes={routes}/> */}
    </Provider>, root);
});
