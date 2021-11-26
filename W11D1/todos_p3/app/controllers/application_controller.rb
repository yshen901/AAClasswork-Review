class ApplicationController < ActionController::Base
  helper_method :login!, :logout!, :current_user, :require_login, :require_no_login
  protect_from_forgery with: :exception

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user
  end

  def require_login
    unless current_user
      flash[:errors] = ["Must login to access this page!"]
      redirect_to new_session_url
    end
  end

  def require_no_login
    if current_user
      flash[:errors] = ["You are already logged in!"]
      redirect_to root_url
    end
  end
end
