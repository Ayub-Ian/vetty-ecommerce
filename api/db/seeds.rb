# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Create some example products
product1 = Product.create(name: 'Fish Pellets', price: 5.99)
product2 = Product.create(name: 'Chicken Vaccine', price: 10.99)
product3 = Product.create(name: 'Pet Grooming', price: 20.99)
product4 = Product.create(name: 'Dog Vaccination', price: 15.99)

# Create some example users
user1 = User.create(name: 'John', email: 'john@gmail.com', password_digest: 'password')
user2 = User.create(name: 'Alice', email: 'alicegmaille.com', password_digest: 'password')
user3 = User.create(name: 'June', email: 'june@gmail.com', password_digest: 'password')

#create some services
service1 = Service.create(name: 'Fish Pellets', description: 'best fish pellets in town', price: 5.99)
service2 = Service.create(name: 'Chicken Vaccine', description: 'vaccinate your chicken now', price: 10.99)
service3 = Service.create(name: 'Pet Grooming', description: 'Dont we all like a clean buddy',price: 20.99)
service4 = Service.create(name: 'Dog Vaccination',description: 'all dog vaccination against rabbies', price: 15.99)

# Create some sample product orders

product_order1 = ProductOrder.create(user: user1, user_id: 40, product: product1, quantity: 2, status: "pending")

product_order2 = ProductOrder.create(user: user2, user_id: 41,product: product2, quantity: 1, status: "approved")

product_order3 = ProductOrder.create(user: user3, user_id: 42,product: product3, quantity: 3, status: "completed")

puts "Seed data for orders created successfully!"