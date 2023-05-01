class Product < ApplicationRecord
    has_many :product_orders

    mount_uploader :image_url, ImageUploader
    # has_many :orders, through: :order_items
    validates :name, presence: true
    validates :price, presence: true, numericality: { greater_than: 0 }
    validates :image_url, presence: true
    end
    