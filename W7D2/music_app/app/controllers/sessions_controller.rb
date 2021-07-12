class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(session_params[:username], session_params[:password])
    if user
      login!(user)
      # redirect_to music_url
    else
      flash.now[:errors] = ["Couldn't find a user with those credentials."]
      render :new
    end
  end

  def destroy
    if @current_user
      logout!(@current_user)
      redirect_to new_session_url
    else
      flash[:errors] = ["No active session found."]
    end
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
