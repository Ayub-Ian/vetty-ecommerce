class SessionsController < ApplicationController
    # before_action :authorize_access_request!, only: [:destroy]


    def login
        user = User.find_by(email: user_params[:email])
        if user
            if user.authenticate(user_params[:password])
                session[:uid] = user.id
                session[:expiry] = 6.hours.from_now
                token = JsonWebToken.encode(user_id: user.id, email: user.email)
                time = Time.now + 6.hours.to_i
                render json: { data: { user: user, token: token}}, status: :ok
            else
                render json: { error: "Invalid password" }, status: :unprocessable_entity
            end
        else
            render json: { error: "Username or email not found" }, status: :not_found
        end
    end


    def signup
        user = User.create(user_params)
        if user.valid?
            render json: { data: user }, status: :created
        else
            render json: { data: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy 
        session.delete(:uid)
        session[:expiry] = Time.now
        render json: { message: "Logout successful "}, status: :ok
    end

    def me
        current_user = User.find(session[:uid])
        if current_user
            render json: current_user, status: :ok
        else
            render json: { error: 'Please log in first' }, status: :not_found
        end
        
    end

    private
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
    
end
