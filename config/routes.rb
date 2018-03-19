Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'static_pages#root'

  devise_for :users, :controllers => { registrations: 'users/registrations' }

  resources :posts
  get '/postitem/:id', to: 'posts#showItem'
  delete '/unfollowfromfollowing/:id', to: 'followings#unFollowFromFollowing'
  get '/followfromfollowing/:id', to: 'followings#followFromFollowing'
  post '/updatelogo', to: 'users#updatelogo'
  resources :users
  resources :followers
  resources :followings
  resources :comments
  resources :likes
  get '*path', to: 'static_pages#root'

end
