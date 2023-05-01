class UsersController < ApplicationController
    before_action :authenticate_user

    def index
      # You can customize this action based on your application requirements
      @users = User.all
      render json: @users, status: :ok
   
    end
  
    def show
      @user = User.find(params[:id])
      # You can customize this action based on your application requirements
    end
  
    def edit
      @user = User.find(params[:id])
      # You can customize this action based on your application requirements
    end
  
    def update
      @user = User.find(params[:id])
  
      if @user
        @user.update(user_params)
        render json: { user: @user, message: 'User was successfully updated.'}
      else
        render json: { error: "Something wrong happened!"}
      end
    end
  
    def history
      # View history of purchases made and services requested
      # You can customize this action based on your application requirements
    end
  
    private
  
    def user_params
      params.require(:user).permit(:name, :email, :password, :role) # Update with appropriate user attributes
    end
  end

