class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    if user = User.find_by_credentials(session_params[:username], session_params[:password])
      login!(user)
      redirect_to cats_url
    else
      flash[:error] << "Username/password combination is incorrect."
      redirect_to new_session_url
    end
  end

  def destroy
    if user = current_user
      logout!(user)
      redirect_to new_session_url
    else
      flash[:error] << "No one is logged in!"
      redirect_to new_session_url
    end
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
