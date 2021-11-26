class Api::TodosController < ApplicationController
  before_action :require_login 

  def show
    @todo = Todo.find(params[:id])
    render json: @todo, include: :tags
  end

  def index
    @todos = current_user.todos
    render json: @todos, include: :tags
  end

  def create
    @todo = current_user.todos.new({
      title: todo_params[:title],
      body: todo_params[:body],
      done: todo_params[:done]
    })  
    if @todo.save
      @todo.tag_names = todo_params[:tag_names]
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status:422
    end
  end

  def update
    @todo = current_user.todos.find(params[:id])
    if @todo
      if @todo.update(todo_params)
        render json: @todo, include: :tags
      else
        render json: @todo.errors.full_messages, status:422
      end
    else
      render json: ["Todo not found!"]
    end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
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
    params.require(:todo).permit(:title, :body, :done, :tag_names=>[])
  end
end
