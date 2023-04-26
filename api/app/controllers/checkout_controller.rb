class CheckoutController < ApplicationController
    def create
      cart_data = params[:cart_data]
      order = Order.new(cart_data: cart_data)
  
      if order.save
        render json: { message: 'Order processed successfully!' }, status: :ok
      else
        render json: { message: 'Unable to process order.' }, status: :unprocessable_entity
      end
    end
  end
  
