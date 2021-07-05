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
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :artwork_id, :body)
  end
end
