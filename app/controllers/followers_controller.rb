class FollowersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    @array_of_users = User.find(params[:id]).followers.map {|follower| follower.follower_id }

    @followers = User.find(@array_of_users)
    @result = @followers.map do |follower|
      {
        id: follower.id,
        first_name: follower.first_name,
        last_name: follower.last_name,
        nickname: follower.nickname,
        logo_img: follower.logo_img.url(:thumb)
      }
    end
    render json: @result

  end

  def create
    @user = User.find(params[:id])
    if @user.followers.any?{ |el| el.follower_id == params[:id]}
      render json: { :error => "You can't follow one person twice" }
    elsif
      @follower = Follower.new(follower_id: current_user.id)
      @user.followers << @follower

      @following = Following.new(followed_id: params[:id]);
      current_user.followings << @following
      if @following.save && @follower.save
        render json: @follower
      end
    end

  end

  def destroy
    @following = Following.where(followed_id: params[:id]).where(user_id: current_user.id).first
    @follower = Follower.where(follower_id: current_user.id).where(user_id: params[:id]).first
    if @following.destroy && @follower.destroy
      render json: @follower
    end
  end
end
