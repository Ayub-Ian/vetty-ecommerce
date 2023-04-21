class CartsController < ApplicationController
  before_action :authenticate_user!

 def index
  if current_user
    @cart = current_user.cart
  else
    # handle the case where the user is not logged in
  end
end
end
