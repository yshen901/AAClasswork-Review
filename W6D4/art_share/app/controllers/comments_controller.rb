class CommentsController < ApplicationController
  def index
    if params[:user_id]
      if user = User.find_by(id: params[:user_id])
        render json: user.comments
      else
        render json: user.errors.full_mesages
      end
    elsif params[:artwork_id]
      if artwork = Artwork.find_by(id: params[:artwork_id])
        render json: artwork.comments
      else
        render json: artwork.errors.full_messages
      end
    else
      render json: "Error: no user_id or artwork_id found."
    end
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages
    end
  end

  def destroy
    if comment = Comment.find_by(id: params[:id])
      if comment.destroy
        render json: comment
      else
        render json: comment.errors.full_messages
      end
    else
      render json: "Comment not found or already delete."
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :artwork_id, :body)
  end
end
