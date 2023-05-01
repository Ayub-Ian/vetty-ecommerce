class ServicesController < ApplicationController
    # before_action :authenticate_user
  
    # GET /admin/services
    def index
      @services = Service.all
      render json: @services, status: :ok
    end
  
    # GET /admin/services/:id
    def show
      @service = Service.find(params[:id])
      render json: @service
    end
  
    # POST /admin/services
    def create
      @service = Service.create(service_params)
      if @service.valid?
        render json: @service, status: :created
      else
        render json: @service.errors.full_messages, status: :unprocessable_entity
      end
    end
  
    # PUT /admin/services/:id
    def update
      @service = Service.find(params[:id])
      if @service.update(service_params)
        render json: @service
      else
        render json: @service.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /admin/services/:id
    def destroy
      @service = Service.find(params[:id])
      @service.destroy
      head :no_content
    end
  
    # POST /admin/services/:id/approve
    def approve
      @service = Service.find(params[:id])
      @service.update(status: 'approved')
      render json: @service
    end
  
    # POST /admin/services/:id/disapprove
    def disapprove
      @service = Service.find(params[:id])
      @service.update(status: 'disapproved')
      render json: @service
    end
  
    private
  
    def service_params
      params.permit(:name, :description, :price, :status, :image_url)
    end
  end