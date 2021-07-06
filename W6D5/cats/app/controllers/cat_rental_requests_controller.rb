class CatRentalRequestsController < ApplicationController
  def new
    @cats = Cat.all
    render :new
  end

  def create
    cat_rental_request = CatRentalRequest.new(cat_rental_request_params)
    if cat_rental_request.save
      redirect_to cats_url
    else
      render json: cat_rental_request.errors.full_messages
    end
  end

  def approve
    if cat_rental_request = CatRentalRequest.find_by(id: params[:id])
      cat_rental_request.approve!
      redirect_to cats_url
    else
      render json: "Cat rental request not found."
    end
  end

  def deny
    if cat_rental_request = CatRentalRequest.find_by(id: params[:id])
      cat_rental_request.deny!
      redirect_to cats_url
    else
      render json: "Cat rental request not found."
    end
  end

  private
  def cat_rental_request_params
    params.require(:cat_rental_request).permit(:start_date, :end_date, :cat_id)
  end
end
