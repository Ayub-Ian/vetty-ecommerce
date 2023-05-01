class User < ApplicationRecord
    has_secure_password
    has_many :orders
    has_one :cart, dependent: :destroy


    enum role: [:user, :admin]

    
    # validates :name, presence: true
    # validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    # validates :presence, length: { minimum: 6 }

    def is_admin?
        User.role == "admin"
    end
end
