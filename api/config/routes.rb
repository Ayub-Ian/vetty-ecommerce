
Rails.application.routes.draw do
  resources :product_orders, only: [:index, :show, :create, :update, :destroy]
  resources :services, only: [:index, :show, :create, :update, :destroy]
  resources :products, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  # ... other routes ...

  resources :product_orders, only: [:index, :show, :create, :update, :destroy] do
    member do
      patch 'approve' # Route for approving a product order
      patch 'disapprove' # Route for disapproving a product order
    end
  end

  # authentication routes
  get 'me', controller: :sessions, action: :me
  post 'login', controller: :sessions, action: :login
  post 'register', controller: :sessions, action: :signup
  delete 'logout', controller: :sessions, action: :destroy


  # admin routes 

  namespace :admin do
    resources :users, only: [:index, :show, :update] do
      resources :orders, only: [:index], controller: 'users/todos'
    end
  end
end
