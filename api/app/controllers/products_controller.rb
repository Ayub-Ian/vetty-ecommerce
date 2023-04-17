class ProductsController < ApplicationController
    # before_action :authenticate_admin! # Require admin authentication
  
    # GET /admin/products
    def index
      @products = Product.all
      render json: @products
    end
  
    # GET /admin/products/:id
    def show
      @product = Product.find(params[:id])
      render json: @product
    end
  
    # POST /admin/products
    def create
      @product = Product.new(product_params)
      if @product.save
        render json: @product, status: :created
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  
    # PUT /admin/products/:id
    def update
      @product = Product.find(params[:id])
      if @product.update(product_params)
        render json: @product
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /admin/products/:id
    def destroy
      @product = Product.find(params[:id])
      @product.destroy
      head :no_content
    end
  
    # POST /admin/products/:id/approve
    def approve
      @product = Product.find(params[:id])
      @product.update(status: 'approved')
      render json: @product
    end
  
    # POST /admin/products/:id/disapprove
    def disapprove
      @product = Product.find(params[:id])
      @product.update(status: 'disapproved')
      render json: @product
    end
  
    private
  
    def product_params
      params.require(:product).permit(:name, :description, :status)
    end
  end