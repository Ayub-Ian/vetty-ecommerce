class User < ApplicationRecord
    has_many :orders
    
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :presence, length: { minimum: 6 }
    end
