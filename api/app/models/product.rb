class Product < ApplicationRecord
    has_many :product_orders
    # has_many :orders, through: :order_items
    validates :name, presence: true
    validates :price, presence: true, numericality: { greater_than: 0 }
    end
    