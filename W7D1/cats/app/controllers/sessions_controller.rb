class SessionsController < ApplicationController
  before_action :require_no_current_user, only: [:new, :create]

  def new
    render :new
  end

  def create
    if user = User.find_by_credentials(session_params[:username], session_params[:password])
      login!(user)
      redirect_to cats_url
    else
      flash[:errors] = ["Username/password combination is incorrect."]
      redirect_to new_session_url
    end
  end

  def destroy
    if user = current_user
      logout!(user)
      redirect_to new_session_url
    else
      flash[:errors] = ["No one is logged in!"]
      redirect_to new_session_url
    end
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end

  def require_no_current_user
    if current_user
      redirect_to cats_url
    end
  end
end
