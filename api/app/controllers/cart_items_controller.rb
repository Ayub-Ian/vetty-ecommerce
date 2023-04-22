class CartItemsController < ApplicationController
  
  def create
    @cart = Cart.find(params[:cart_id])
    @product = Product.find(params[:product_id])
    @cart_item = @cart.cart_items.find_by(product_id: @product.id)
    if @cart_item.present?
      @cart_item.update(quantity: @cart_item.quantity + 1)
    else
      @cart_item = @cart.cart_items.build(product_id: @product.id)
    end
    render json: @cart_item, status: :created
  end

  def update
    @cart_item = CartItem.find(params[:id])
    @cart_item.update(quantity: params[:quantity])
    render json: @cart_item, status: :ok
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    head :no_content
  end
end