class LikesController < ApplicationController
  def index
    if params.has_key?(:comment_id)
      if comment = Comment.find_by(id: params[:comment_id])
        num_likes = comment.likes.count
        render json: "Comment has #{num_likes} likes"
      else
        render json: "Comment not found."
      end
    elsif params.has_key?(:artwork_id)
      if artwork = Artwork.find_by(id: params[:artwork_id])
        num_likes = artwork.likes.count
        render json: "Artwork has #{num_likes} likes"
      else
        render json: "Artwork not found."
      end
    else
      render json: "Comment or artwork id required to make a like."
    end
  end

  def create
    if params.has_key?(:comment_id)
      if comment = Comment.find_by(id: params[:comment_id])
        like = Like.new(imageable_type: "Comment", imageable_id: params[:comment_id])
        if like.save
          render json: like
        else
          render json: like.errors.full_messages
        end
      else
        render json: "Comment not found."
      end
    elsif params.has_key?(:artwork_id)
      if artwork = Artwork.find_by(id: params[:artwork_id])
        like = Like.new(imageable_type: "Artwork", imageable_id: params[:artwork_id])
        if like.save
          render json: like
        else
          render json: like.errors.full_messages
        end
      else
        render json: "Artwork not found."
      end
    else
      render json: "Comment or artwork id required to make a like."
    end
  end

  def destroy
    if like = Like.find_by(id: params[:id])
      if like.destroy
        render json: like
      else
        render json: like.errors.full_messages
      end
    else
      render json: "Like does not exist or has already been destroyed."
    end
  end
end
