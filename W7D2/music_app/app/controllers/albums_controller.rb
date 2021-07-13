class AlbumsController < ApplicationController
  before_action :require_login

  def show
    if @album = Album.includes(:band, :tracks).find_by(id: params[:id])
      render :show
    else
      flash[:errors] = ["Album does not exist"]
      redirect_to bands_url
    end
  end

  def new
    @album = Album.new
    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to "#{bands_url}/#{album_params[:band_id]}"
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def edit
    if @album = Album.find_by(id: params[:id])
      render :edit
    else
      flash[:errors] = ["Album not found."]
      redirect_to bands_url
    end
  end

  def update
    @album = Album.find_by(id: params[:id])
    if @album.update(album_params)
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :edit
    end
  end

  def destroy
    @album = Album.find_by(id: params[:id])
    if @album.destroy
      redirect_to "#{bands_url}/#{@album.band_id}"
    else
      flash.now[:errors] = @album.errors.full_messages
      render :show
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :year, :live, :band_id)
  end
end
