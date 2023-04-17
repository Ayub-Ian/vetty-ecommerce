
Rails.application.routes.draw do
  resources :product_orders
  resources :services
  resources :products
  resources :users

  # ... other routes ...

  resources :product_orders, only: [:index, :show, :create, :update, :destroy] do
    member do
      patch 'approve' # Route for approving a product order
      patch 'disapprove' # Route for disapproving a product order
    end
  end
end
