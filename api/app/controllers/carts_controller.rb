class CartsController < ApplicationController
  def index
    begin
      @cart = Cart.find(params[:id])
      render json: @cart, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Cart with ID #{params[:id]} not found" }, status: :not_found
    rescue Exception => e
      render json: { error: e.message }, status: :unprocessable_entity
    end
  end
end  
