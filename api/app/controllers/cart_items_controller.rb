class CartItemsController < ApplicationController
    before_action :authenticate_user!
  
    def create
      product = Product.find(params[:product_id])
      current_user.cart.add_product(product, params[:quantity])
      redirect_to cart_path
    end
  
    def update
      cart_item = current_user.cart.cart_items.find(params[:id])
      cart_item.update(quantity: params[:quantity])
      redirect_to cart_path
    end
  
    def destroy
      cart_item = current_user.cart.cart_items.find(params[:id])
      cart_item.destroy
      redirect_to cart_path
    end
  end
  