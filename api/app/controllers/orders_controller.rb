class OrdersController < ApplicationController
    # before_action :authorize, only: [:index, :show, :create, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
    def index
      orders = Order.all
      render json: orders, include: { order_items: { include: :product, include: :service } }
    end
  
    def show
      order = Order.find(params[:id])
      render json: order, include: { order_items: { include: :product, include: :service } }
    end
  
    def create
      order = Order.create(order_params)
      if order.save
        render json: order, include: { order_items: { include: :product, include: :service } }, status: :created
        else
        render json: { error: "There was an error creating your order. Please try again." }, status: :unprocessable_entity
        end
    end
  
    def update
      order = Order.find(params[:id])
      if order.update(order_params)
        render json: order
      else
        render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      order = Order.find(params[:id])
      order.destroy
      head :no_content
    end
    
    def checkout
        order = Order.find(params[:id])
        if order.status == 'pending'
          order.update(status: 'checked_out')
          render json: { message: "Order #{order.id} has been checked out." }
        else
          render json: { message: "Order #{order.id} has already been checked out." }
        end
      end
    
    private
  
    def order_params
        params.require(:order).permit(:cart_id, :user_id, :status, :total_price, order_items_attributes: [:product_id, :service_id :quantity, :price])
    end
  
    def render_not_found_response
      render json: { error: "Order not found" }, status: :not_found
    end
  
    def render_unprocessable_entity
      render json: { error: "Validity errors" }, status: :unprocessable_entity
    end
  end
  