class Product < ApplicationRecord
    has_many :product_orders
    # has_many :orders, through: :order_items
    validates :name, presence: true
    validates :price, presence: true, numericality: { greater_than: 0 }

    def add_to_cart(user)
        if user.cart.nil?
          user.create_cart
        end
    
        cart_item = user.cart.cart_items.find_by(product_id: id)
    
        if cart_item.nil?
          user.cart.cart_items.create(product_id: id, quantity: 1)
        else
          cart_item.update(quantity: cart_item.quantity + 1)
        end
      end
    end
    