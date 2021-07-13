class ApplicationController < ActionController::Base
  helper_method :login, :logout!, :current_user, :require_login
  protect_from_forgery with: :exception

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!(user)
    session[:session_token] = nil
    user.reset_session_token!
  end

  def current_user
    nil unless session[:session_token]

    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user
  end

  def require_login
    flash[:errors] = ["Please login to access resource."]
    redirect_to new_session_url unless current_user
  end
end
