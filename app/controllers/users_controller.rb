class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

    user = {
      email: current_user.email,
      last_name: current_user.last_name,
      first_name: current_user.first_name,
      id: current_user.id,
      logo_img: current_user.logo_img.url(:square),
      nickname: current_user.nickname,
      bio: current_user.bio
    }

    render json: {
      :current_user => user,
      :following => current_user.followings,
      :followers => current_user.followers
    }
  end

  def show
    @user = User.where(nickname: params[:id]).first
    @info = {
      id: @user.id,
      last_name: @user.last_name,
      first_name: @user.first_name,
      nickname: @user.nickname,
      logo_img: @user.logo_img.url(:square),
      bio: @user.bio
    }
    render json: {
      :personalInfo => @info,
      :followers => @user.followers,
      :following => @user.followings
    }

  end

  def updatelogo
    @user = current_user
    puts params
    @user.update(info_params)
    puts @user
    if @user.save
      render json: {
        logo_img: current_user.logo_img.url(:square),
      }
    end
  end

  def update
    @user = current_user
    @user.update(info_params);
    @info = {
      id: @user.id,
      last_name: @user.last_name,
      first_name: @user.first_name,
      nickname: @user.nickname,
      bio: @user.bio
    }
    if @user.save
      render json: {
        :personalInfo => @info,
        :followers => @user.followers,
        :following => @user.followings
      }
    else
      render json: { errors: @user.errors.full_messages }
    end
  end



  private
  def info_params
    params.require(:user).permit(:last_name, :first_name, :nickname, :logo_img, :bio);
  end
end
