class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @followings = current_user.followings.map{ |follower| follower.followed_id }


    @result = []
    Post.where(user_id: @followings).order(created_at: :desc).each do |f|
      @user = User.find(f.user_id)
      @result << {
        body: f.body,
        id: f.id,
        img_url: f.post_image.url(:original),
        comments: f.comments,
        likes: f.likes,
        created_at: f.created_at,
        user: @user.nickname,
        user_img: @user.logo_img.url(:thumb)
      }
    end
    render json: @result
  end

  def show
    @user = User.find(params[:id])
    @posts = []
    @user.posts.order(created_at: :desc).each do |post|
      @posts << {
        id: post.id,
        post_image: post.post_image.url(:square)
      }
    end
    render json: @posts
  end

  def showItem
    @post = Post.find(params[:id])
    render json: {
      user_id: @post.user_id,
      id: @post.id,
      img: @post.post_image.url(:original),
      body: @post.body,
      comments: @post.comments,
      likes: @post.likes,
      created_at: @post.created_at
    }
  end

  def new
    @post = Post.new
  end

  def create


    if params[:post][:post_image] == '[object Object]'
      render json: {
        errors: 'You must to add a photo'
      }
      return
    end
    @item = Post.new(post_params)
    current_user.posts << @item
    if @item.save
      @post = {
        id: @item.id,
        post_image: @item.post_image.url(:square)
      }
      render json: @post
    end
  end

  private
    def post_params
      params.require(:post).permit(:body, :post_image);
    end
end
