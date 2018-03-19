class LikesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @users = User.find(params[:user_id])
    @result = []
    @users.map do |user|
      @result << {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        nickname: user.nickname,
        logo_img: user.logo_img.url(:thumb)
      }
    end
    render json: @result
  end

  def create
    @like = Like.new
    @post = Post.find(params[:post_id])
    current_user.likes << @like
    if @post.likes.all?{ |like| like.user_id != current_user.id }
      @post.likes << @like
    end
    if @like.save
      render json: @like
    end
  end

  def destroy
    @like = Like.where(user_id: current_user.id).where(post_id: params[:id]).first
    render json: @like.destroy
  end
end
