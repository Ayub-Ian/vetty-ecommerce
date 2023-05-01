class Service < ApplicationRecord
    has_many :service_requests
    # has_many :orders, through: :order_items
    mount_uploader :image_url, ImageUploader
    
     validates :name, presence: true
     validates :price, presence: true, numericality: { greater_than: 0 }
    
    end
    