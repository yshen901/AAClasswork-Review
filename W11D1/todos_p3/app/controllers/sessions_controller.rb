class SessionsController < ApplicationController
    # before_action :require_no_login # can't use this since it would invalidate destroy

    def new
      if current_user
        redirect_to root_url
      else
        render :new
      end
    end
  
    def create
      redirect_to root_url if current_user
  
      @user = User.find_by_credentials(
        session_params[:username],
        session_params[:password]
      )
  
      if @user
        login!(@user)
        redirect_to root_url
      else
        flash[:errors] = ["Username/password incorrect!"]
        redirect_to new_session_url
      end
    end
  
    def destroy
      if current_user
        logout!(current_user)
      else
        flash[:errors] = ["Invalid request: no user logged in."]
      end
      redirect_to new_session_url
    end
  
    private
    def session_params
      params.require(:session).permit(:username, :password)
    end
end
