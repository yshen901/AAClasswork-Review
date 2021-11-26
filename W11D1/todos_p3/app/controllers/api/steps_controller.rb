class Api::StepsController < ApplicationController
  before_action :require_login 
  
  def index
    @steps = Step.all;
    render json: @steps
  end

  def show
    @step = Step.find(params[:id])
    render json: @step
  end

  def create
    @step = Step.create(step_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    if !@step
      render json: ["Step does not exist"]
    else
      if @step.destroy
        render json: @step
      else
        render json: @step.errors.full_messages
      end
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step
      if @step.update(step_params)
        render json: @step
      else
        render json: @step.errors.full_messages
      end
    else
      render json: ["Step does not exist"]
    end
  end

  private
  def step_params
    params.require(:step).permit(:title, :body, :todo_id, :done)
  end
end
