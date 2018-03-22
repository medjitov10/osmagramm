import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Profile from './components/profile/profile';
import ProFileInfoEdit from './components/profile/personal_info/personal_info_edit/personal_info_edit'
import News from './components/news/news';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={News} />
    <Route path='/profile/edit/' component={ProFileInfoEdit} />
    <Route path='/:nickname' component={Profile} />
  </Route>
);
