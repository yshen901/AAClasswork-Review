class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    nil unless session[:session_token]
    
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user
  end
end
