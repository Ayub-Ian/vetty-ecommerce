class CartItem < ApplicationRecord
    belongs_to :cart
    belongs_to :product
    belongs_to :service, optional: true
  
    validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  end
  