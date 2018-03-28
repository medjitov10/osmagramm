## OSMAGRAM
[OSMAGRAM live](https://osmagramm.herokuapp.com/)

OSMAGRAM is a full stack application programmed for the instagram's architecture. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.
### Features & Implementation
#### Models
##### User
  User contains inforamtion about user (full name, nickname, bio, avatar) and by using Devise gem I connect user and auth.
  `user_id` have relationship with all of others models
  ```ruby
    class User < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable and :omniauthable

    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :trackable, :validatable

    validates :nickname, uniqueness: { case_sensitive: false }

    has_many :posts
    has_many :followers
    has_many :followings
    has_many :comments
    has_many :likes
    has_one :info

    has_attached_file :logo_img, styles: {
      thumb: '100x100>',
      square: '150x150#',
      medium: '300x300>'
    }

    validates_attachment_content_type :logo_img, :content_type => /\Aimage\/.*\Z/

  end

  ```
##### Post
##### Like
##### Following
##### Follower
##### Routes
There is simple routing where after sign-in, user go to News component. Also, user able to move to any user he want by adding nickname of person. Moreover, any person can change his information by clicking edit.
```javascript
  <Route path='/' component={App} >
    <IndexRoute component={News} />
    <Route path='/profile/edit/' component={ProFileInfoEdit} />
    <Route path='/:nickname' component={Profile} />
  </Route>
```
