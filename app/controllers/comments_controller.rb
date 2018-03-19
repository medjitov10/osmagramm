class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show

    @post = Post.find(params[:id])
    render json: @post.comments
  end

  def create
    @comment = Comment.new(body: params[:body], user_nickname: current_user.nickname)
    current_user.comments << @comment
    @post = Post.find(params[:id])
    @post.comments << @comment
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
end
