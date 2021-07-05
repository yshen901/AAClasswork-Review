class ArtworksController < ApplicationController
  def index
    if user = User.find_by(id: params[:user_id])
      render json: user.artworks + user.shared_artworks
    else
      render json: "User not found."
    end
  end

  def show
    if artwork = Artwork.find_by(id: params[:id])
      render json: artwork
    else
      render json: "Artwork not found"
    end
  end

  def update
    if artwork = Artwork.find_by(id: params[:id])
      if artwork.update(artwork_params)
        render json: artwork
      else
        render json: artwork.errors.full_messages
      end
    else
      render json: "Artwork not found"
    end
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages
    end
  end

  def destroy
    if artwork = Artwork.find_by(id: params[:id])
      if artwork.destroy
        render json: artwork
      else
        render json: artwork.errors.full_messages
      end
    else
      render json: "Artwork not found"
    end
  end

  private
  def artwork_params
    params.require(:artwork).permit(:title, :artist_id, :image_url)
  end
end
