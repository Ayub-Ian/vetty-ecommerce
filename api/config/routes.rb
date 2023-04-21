
Rails.application.routes.draw do
  resources :product_orders
  resources :services
  resources :products
  resources :users
  resources :carts

  # ... other routes ...

  resources :product_orders, only: [:index, :show, :create, :update, :destroy] do
    member do
      patch 'approve' # Route for approving a product order
      patch 'disapprove' # Route for disapproving a product order
      post 'add_to_cart'
    end
  end
end
