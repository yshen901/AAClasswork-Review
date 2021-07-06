class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find_by(id: params[:id])
    if @cat
      render :show
    else
      render json: "Cat not found."
    end
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to cats_url(@cat)
    else
      render json: @cat.errors.full_messages
    end
  end

  def edit
    @cat = Cat.find_by(id: params[:id])
    if @cat
      render :edit
    else
      render json: "Cat not found."
    end
  end

  def update
    @cat = Cat.find_by(id: params[:id])
    if @cat
      if @cat.update(cat_params)
        redirect_to cats_url
      else
        render json: @cat.errors.full_messages
      end
    else
      render json: "Cat not found."
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :birth_date, :sex, :description, :color)
  end
end
