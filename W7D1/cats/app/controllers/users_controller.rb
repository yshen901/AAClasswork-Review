class UsersController < ApplicationController
  before_action :require_no_current_user, only: [:new, :create]

  def new
    render :new
  end

  def create
    user = User.new(user_params)

    if user.save
      login!(user)
      redirect_to cats_url
    else
      flash.now[:error] << user.errors.full_messages
      redirect_to new_user_url
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

  def require_no_current_user
    if current_user
      redirect_to cats_url
    end
  end
end
