# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create some example users
user1 = User.create(name: 'John', email: 'john@gmail.com', password: 'password123', role: 1)
user2 = User.create(name: 'Alice', email: 'alicegmail.com', password: 'password123')
user3 = User.create(name: 'June', email: 'june@gmail.com', password: 'password123')


puts "Seeding successful!"