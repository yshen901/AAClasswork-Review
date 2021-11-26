class StaticPagesController < ApplicationController
  before_action :require_login
  def show
    render :root
  end
end
