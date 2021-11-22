class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def index
    render json: Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status:422
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo
      if @todo.update(todo_params)
        render json: @todo
      else
        render json: @todo.errors.full_messages, status:422
      end
    else
      render json: ["Todo not found!"]
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo
      if @todo.destroy
        render json: @todo
      else
        render json: @todo.errors.full_messages, status:422
      end
    else
      render json: ["Todo not found!"]
    end
  end

  private
  def todo_params 
    params.require(:todo).permit(:title, :body, :done)
  end
end
