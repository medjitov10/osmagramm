## OSMAGRAM
[OSMAGRAM live](https://osmagramm.herokuapp.com/)

OSMAGRAM is a full stack application programmed for the instagram's architecture. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.
### Features & Implementation
##### Routes
```javascript
  <Route path='/' component={App} >
    <IndexRoute component={News} />
    <Route path='/profile/edit/' component={ProFileInfoEdit} />
    <Route path='/:nickname' component={Profile} />
  </Route>
```
