class ApplicationController < ActionController::Base
  helper_method :current_user, :logout!, :login!

  def current_user
    nil unless session[:session_token]
    
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user
  end

  def logout!(user)
    user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def login!(user)
    session[:session_token] = user.try(:reset_session_token!)
  end
end
