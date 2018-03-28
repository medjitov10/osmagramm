## OSMAGRAM
[OSMAGRAM live](https://osmagramm.herokuapp.com/)

OSMAGRAM is a full stack application programmed for the instagram's architecture. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.
### Features & Implementation
#### Amazon Web Services (AWS)
  All images of project storing in aws
#### Models
##### User
  User(full name, nickname, bio, avatar) model contains inforamtion about user and by using Devise gem I connect user and auth.
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
  Post(body, img) is the model for creating posts and connect it with User and Comments and Likes models
  ```ruby
    class Post < ApplicationRecord
     validates :post_image, presence: true
      belongs_to :user
      has_many :comments
      has_many :likes

      has_attached_file :post_image, styles: {
        thumb: '100x100>',
        square: '200x200#',
        medium: '600x600>',
        large: '1200x1200>'
      }

      validates_attachment_content_type :post_image, :content_type => /\Aimage\/.*\Z/
  end
  ```
##### Like
  Like is the model to like posts
  ```ruby
    class Like < ApplicationRecord
      belongs_to :user
      belongs_to :post
      validates :user_id, presence: true
      validates :post_id, presence: true
    end

  ```
##### Following and Follower
  Following and Follower are models to connect users whom want to follow each other
  ```ruby
    class Following < ApplicationRecord
      belongs_to :user
    end
    class Follower < ApplicationRecord
      belongs_to :user
    end

  ```
#### Routes
There is simple routing where after sign-in, user go to News component. Also, user able to move to any user he want by adding nickname of person. Moreover, any person can change his information by clicking edit.
```javascript
  <Route path='/' component={App} >
    <IndexRoute component={News} />
    <Route path='/profile/edit/' component={ProFileInfoEdit} />
    <Route path='/:nickname' component={Profile} />
  </Route>
```

