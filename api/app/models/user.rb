class User < ApplicationRecord
    has_many :orders
    has_one :cart, dependent: :destroy

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :presence, length: { minimum: 6 }
    end
