class AlbumsController < ApplicationController
  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end

  def new
    @album = Album.new
    render :new
  end

  def create
    @album = Album.new(album_params)
    @album.live = album_params[:live] == "true"
    debugger
    if @album.save
      redirect_to bands_url
    else
      flash[:errors] = @album.errors.full_messages
      redirect_to bands_url
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def album_params
    params.require(:album).permit(:title, :year, :live, :band_id)
  end
end
