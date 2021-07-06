class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    if user = User.find_by_credentials(session_params[:username], session_params[:password])
      session[:session_token] = user.reset_session_token!
      redirect_to cats_url
    else
      flash[:error] << "Username/password combination is incorrect."
      redirect_to new_session_url
    end
  end

  def destroy
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
