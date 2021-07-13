class TracksController < ApplicationController
  def show
    if @track = Track.includes(:album, :band).find_by(id: params[:id])
      render :show
    else
      flash[:errors] = ["Track not found."]
      redirect_to bands_url
    end
  end

  def new
    @track = Track.new
    render :new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      redirect_to albums_url + "/#{@track.album_id}"
    else
      flash.now[:errors] = @track.errors.full_messages
      render :new
    end
  end

  def edit
    if @track = Track.find_by(id: params[:id])
      render :edit
    else
      flash[:errors] = ["Track not found."]
      redirect_to bands_url
    end
  end

  def update
    @track = Track.find_by(id: params[:id])
    if @track.update(track_params)
      redirect_to albums_url + "/#{@track.album_id}"
    else
      flash.now[:errors] = @track.errors.full_messages
      render :edit
    end
  end

  def destroy
    @track = Track.find_by(id: params[:id])
    if @track.destroy
      redirect_to albums_url + "/#{@track.album_id}"
    else
      flash[:errors] = @track.errors.full_messages
      redirect_to albums_url + "/#{@track.album_id}"
    end
  end

  private
  def track_params
    params.require(:track).permit(:title, :ord, :album_id, :bonus)
  end
end
