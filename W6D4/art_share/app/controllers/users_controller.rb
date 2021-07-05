class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    if params[:id] = "search"
      if !params.has_key?(:username)
        render json: "Error: must input a username to search with."
      elsif user = User.find_by(username: params[:username])
        render json: user
      else
        render json: user.errors.full_messages
      end
    else
      if user = User.find_by(id: params[:id])
        render json: user
      else
        render json: params
      end
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages
    end
  end

  def update
    if user = User.find_by(id: params[:id])
      if user.update(user_params)
        render json: user
      else
        render json: user.errors.full_messages
      end
    else
      render json: "User not found."
    end
  end

  def destroy
    if user = User.find_by(id: params[:id])
      if user.destroy
        render json: user
      else
        render json: user.errors.full_messages
      end
    else
      render json: "User not found."
    end
  end

  private
  def user_params
    params.require(:user).permit(:username)
  end
end
