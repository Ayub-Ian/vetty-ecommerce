class UsersController < ApplicationController
    # before_action :authenticate_user! # Add authentication for user login

    def index
      # You can customize this action based on your application requirements
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
  
      if @user.update(user_params)
        redirect_to @user, notice: 'User was successfully updated.'
      else
        render :edit
      end
    end
  
    def history
      # View history of purchases made and services requested
      # You can customize this action based on your application requirements
    end
  
    private
  
    def user_params
      params.require(:user).permit(:name, :email, :password) # Update with appropriate user attributes
    end
  end

