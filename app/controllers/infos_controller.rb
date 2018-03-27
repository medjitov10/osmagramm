class InfosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    if params[:searchString] == ''
      render json: []
    else
      @words = params[:searchString].split(' ')
      @result = []
      @users = []
      if @words.length == 2
        @users = User.where('first_name=? OR last_name=?', @words[0], @words[0]).where('first_name=? OR last_name=?', @words[1], @words[1])
      elsif @words.length == 1
        @users = User.where(first_name: @words[0]).or(User.where(last_name: @words[0])).or(User.where(nickname: @words[0]))
      end
      @users.each do |user|
        @result << {
          last_name: user.last_name,
          first_name: user.first_name,
          logo_img: user.logo_img.url(:thumb),
          nickname: user.nickname,
          id: user.id
        }
      end
      render json: @result
    end
  end





  private
  def info_params
    params.require(:info).permit(:user_id, :last_name, :first_name, :nickname);
  end

end
