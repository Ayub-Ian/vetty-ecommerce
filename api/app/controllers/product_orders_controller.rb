class ProductOrdersController < ApplicationController
  # before_action :authenticate_admin! # Require admin authentication

  # GET /admin/product_orders
  def index
    @product_orders = ProductOrder.all
    render json: @product_orders
  end

  # GET /admin/product_orders/:id
  def show
    @product_order = ProductOrder.find(params[:id])
    render json: @product_order
  end

  # POST /admin/product_orders
  def create
    @product_order = ProductOrder.new(product_order_params)
    if @product_order.save
      render json: @product_order, status: :created
    else
      render json: @product_order.errors, status: :unprocessable_entity
    end
  end

  # PUT /admin/product_orders/:id
  def update
    @product_order = ProductOrder.find(params[:id])
    if @product_order.update(product_order_params)
      render json: @product_order
    else
      render json: @product_order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/product_orders/:id
  def destroy
    @product_order = ProductOrder.find(params[:id])
    @product_order.destroy
    head :no_content
  end

  # POST /admin/product_orders/:id/approve
  def approve
    @product_order = ProductOrder.find(params[:id])
    @product_order.update(status: 'approved')
    render json: @product_order
  end

  # POST /admin/product_orders/:id/disapprove
  def disapprove
    @product_order = ProductOrder.find(params[:id])
    @product_order.update(status: 'disapproved')
    render json: @product_order
  end

  private

  def product_order_params
    params.require(:product_order).permit(:product_id, :user_id, :quantity, :status)
  end
end
