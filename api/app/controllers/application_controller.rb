class ApplicationController < ActionController::API
    wrap_parameters format:[]
    include ActionController::Cookies

    # Pundit rails authorization initialization
    include Pundit::Authorization

    # Pundit error handling 



    private

    def authenticate_user
        header= request.headers['Authorization']
        token= header.split(' ').last if header
        begin
            @decoded = JsonWebToken.decode(token)
            # @current_user = User.find(@decoded[:user_id])
        rescue ActiveRecord::RecordNotFound => e
            render json: {errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            render json: { errors: e.message }, status: :unauthorized
        end
    end
    
    def not_authorized
        render json: { error: "unauthorized"}, status: :unauthorized
    end
    
    def forbidden
        render json: { error: 'Forbidden' }, status: :forbidden
    end
end
