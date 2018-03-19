class InfosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: {
      :current_user => current_user,
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
      nickname: @user.nickname
    }
    render json: {
      :personalInfo => @info,
      :followers => @user.followers,
      :following => @user.followings
    }

  end

  def update
    debugger
    @info = Info.find(params[:id]);

    @info.update(info_params)

    @user = User.find(@info[:user_id])

    render json: {
      :personalInfo => @info,
      :followers => @user.followers,
      :following => @user.followings
    }
  end

  private
  def info_params
    params.require(:info).permit(:user_id, :last_name, :first_name, :nickname);
  end

end
