# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)
# # Create some example products
# product1 = Product.create(name: 'Fish Pellets', price: 5.99)
# product2 = Product.create(name: 'Chicken Vaccine', price: 10.99)
# product3 = Product.create(name: 'Pet Grooming', price: 20.99)
# product4 = Product.create(name: 'Dog Vaccination', price: 15.99)

# # Create some example users
# user1 = User.create(name: 'John', email: 'john@gmail.com', password: 'password123')
# user2 = User.create(name: 'Alice', email: 'alicegmaille.com', password: 'password123')
# user3 = User.create(name: 'June', email: 'june@gmail.com', password: 'password123')

# #create some services
# service1 = Service.create(name: 'Fish Pellets', description: 'best fish pellets in town', price: 5.99)
# service2 = Service.create(name: 'Chicken Vaccine', description: 'vaccinate your chicken now', price: 10.99)
# service3 = Service.create(name: 'Pet Grooming', description: 'Dont we all like a clean buddy',price: 20.99)
# service4 = Service.create(name: 'Dog Vaccination',description: 'all dog vaccination against rabbies', price: 15.99)

# # Create some sample product orders

# product_order1 = ProductOrder.create(user: user1, user_id: 40, product: product1, quantity: 2, status: "pending")

# product_order2 = ProductOrder.create(user: user2, user_id: 41,product: product2, quantity: 1, status: "approved")

# product_order3 = ProductOrder.create(user: user3, user_id: 42,product: product3, quantity: 3, status: "completed")

# puts "Seed data for orders created successfully!"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Create some example products
# 10.times do
#   Product.create(
#     name: Faker::Creature::Animal.name, # Generate a fake animal name
#     description: Faker::Lorem.sentence, # Generate a fake description
#     price: Faker::Commerce.price(range: 1..100.0), # Generate a fake price between 1 and 100
#     image_url: Faker::Placeholdit.image(size: '300x300', format: 'jpg'), # Generate a fake image URL
#   )
# end


# product1 = Product.create(name: 'Fish Pellets', 
#   price: 5.99, 
#   description: '
#   Manufactured feeds are an important part 
#   of modern commercial aquaculture, providing the balanced 
#   nutrition needed by farmed fish. The feeds, in the form of 
#   granules or pellets, provide the nutrition in a stable and concentrated form,
#   enabling the fish to feed efficiently and grow to their full potential.',
#   image_url:"https://cdn.pixabay.com/photo/2016/02/17/08/16/fish-food-1204648_960_720.jpg"

# )
puts "creating products"

product1 = Product.create(name: 'Pet Grooming', 
  price: 20.99, 
  description: 'This includes acticities such as bathing, brushing, trimming, and styling the fur or coat of the animal, 
  as well as nail trimming, 
  ear cleaning, and sometimes dental care. ',
  image_url: "https://images.pexels.com/photos/6816848/pexels-photo-6816848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
)

product2 = Product.create(name: 'Chicken Vaccine',
   price: 10.99, 
   description: 'A vaccine is available for Fowlpox and is typically administered in the wing web of birds at 10 to 12 weeks of age. T
   he vaccine exposes birds to a mild version of the active virus,
    so birds should be completely healthy before the vaccine is administered 
    to avoid complications.',
   image_url:"https://images.pexels.com/photos/5726693/pexels-photo-5726693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


  )
product3 = Product.create(name: 'Pet Grooming', 
  price: 20.99, 
  description: 'This includes acticities such as bathing, brushing, trimming, and styling the fur or coat of the animal, 
  as well as nail trimming, 
  ear cleaning, and sometimes dental care. ',
  image_url: "https://images.pexels.com/photos/6816848/pexels-photo-6816848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
)
product4 = Product.create(name: 'Amerix', 
  price: 20.99, 
  description: 'This includes acticities such as bathing, brushing, trimming, and styling the fur or coat of the animal, 
  as well as nail trimming, 
  ear cleaning, and sometimes dental care. ',
  image_url: "https://images.pexels.com/photos/6816848/pexels-photo-6816848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
)
product5 = Product.create(name: 'Pet Grooming', 
  price: 20.99, 
  description: 'This includes acticities such as bathing, brushing, trimming, and styling the fur or coat of the animal, 
  as well as nail trimming, 
  ear cleaning, and sometimes dental care. ',
  image_url: "https://images.pexels.com/photos/6816848/pexels-photo-6816848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
)

product6 = Product.create(name: 'Sudocrem',
  price: 10.20, 
  description: 'This can be used in dogs and cats in small amounts. Sudocrem contains zinc-oxide which is highly toxic to birds. Zinc-oxide is also toxic to dogs and cats if ingested in large quantities, but applying a thin layer of sudocrem to sore or irritated skin is generally safe and can be beneficial.',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYJzUj-pKbxblSoJcCpKHAVsMshrGOV8D-A&usqp=CAU"
 )
 product7 = Product.create(name: 'Triatix',
  price: 10.20, 
  description: 'a highly effective ectoparaciticide used for the control of single and multi-host ticks, mange mites, keds, biting and sucking lice on cattle, sheep, goats, camels, pigs and dogs. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05Yn4n_loACUMHBFemzAEa2CIi7i-JC_rjA&usqp=CAU"
 )
 product8 = Product.create(name: 'Triatix',
  price: 10.20, 
  description: 'a highly effective ectoparaciticide used for the control of single and multi-host ticks, mange mites, keds, biting and sucking lice on cattle, sheep, goats, camels, pigs and dogs. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05Yn4n_loACUMHBFemzAEa2CIi7i-JC_rjA&usqp=CAU"
 )
 product9 = Product.create(name: 'Triatix',
  price: 10.20, 
  description: 'a highly effective ectoparaciticide used for the control of single and multi-host ticks, mange mites, keds, biting and sucking lice on cattle, sheep, goats, camels, pigs and dogs. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05Yn4n_loACUMHBFemzAEa2CIi7i-JC_rjA&usqp=CAU"
 )
 product10 = Product.create(name: 'Triatix', 
  description: 'a highly effective ectoparaciticide used for the control of single and multi-host ticks, mange mites, keds, biting and sucking lice on cattle, sheep, goats, camels, pigs and dogs. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05Yn4n_loACUMHBFemzAEa2CIi7i-JC_rjA&usqp=CAU",
  price: 10.20
 )
 product11 = Product.create(name: 'Triatix',

  description: 'a highly effective ectoparaciticide used for the control of single and multi-host ticks, mange mites, keds, biting and sucking lice on cattle, sheep, goats, camels, pigs and dogs. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05Yn4n_loACUMHBFemzAEa2CIi7i-JC_rjA&usqp=CAU",
  price: 10.20
 )
 product12 = Product.create(name: 'Agrocal-ds',
  description: 'The supplement is packed with all the essential nutrients and trace elements such as copper, calcium, zinc, manganese, iron, selenium, boron, etc. The offered Agrocal Gold Animal Supplement helps in increasing the productivity levels, growth speeds, and thereby increases the profit. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmOB-xasRzfaAAu4ESZikTR-OZ-H9IAeU70ivlc65eJhj2uM0lq9s5BUAHKzMw_9Zpjo&usqp=CAU",
  price: 10.20 
 )
 product13 = Product.create(name: 'Bioline hygiene ',
  description: 'Improves the hygiene in the mouth; Natural and organic dental toothpaste; Used with finger or with dog toothbrush to clean teeth; ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PLuhi1cFLJTY1PioWXIqIe7eSEU2H7TZ3A&usqp=CAU",
  price: 12.20
 )
 product14 = Product.create(name: 'Chicken Jerky', 
  description: 'from real chicken?meat. A great source of lean protein. No artificial colours, flavours or preservatives added. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDy0PnQuXjDjZ8Fk5cwz4ODT3Jf8rW36AscM0MMrd1RGoweozGs4TnXZDkdDJx1hvgQy8&usqp=CAU",
  price: 8.20
 )
 product15 = Product.create(name: 'NexGard',
  description: 'NexGard for dogs kills adult fleas before they lay eggs and kills ticks, too. All in a delicious, soft chew that dogs love. NexGard contains an ingredient, afoxolaner that helps treat and control fleas and ticks and keeps killing for a full 30 days per chewable tablet. ',
  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1ZfsDkLnP5-mVpQQsVzf06KJJWAnV0G_Gw&usqp=CAU",
  price: 12.20
 )

# product4 = Product.create(name: 'Dog Vaccination', 
#   price: 15.99,
#   description: 'best fish pellets in town',
#   image_url: ''
# )


# Create some example users
user1 = User.create(name: 'John', email: 'john@gmail.com', password_digest: 'password')
user2 = User.create(name: 'Alice', email: 'alicegmaille.com', password_digest: 'password')
user3 = User.create(name: 'June', email: 'june@gmail.com', password_digest: 'password')

#create some services
Service.create(name: 'Fish Pellets', description: 'Best fish pellets in town', price: 5.99, image_url: 'http://africanmiliki.com/images/Irio.jpg')
Service.create(name: 'Dog Grooming', description: 'Professional dog grooming services', price: 45.99, image_url: 'http://africanmiliki.com/images/DogGrooming.jpg')
Service.create(name: 'Cat Boarding', description: 'Safe and comfortable cat boarding', price: 30.99, image_url: 'http://africanmiliki.com/images/CatBoarding.jpg')

 #Create some sample product orders

# product_order1 = ProductOrder.create(user_id: user1.id, product_id: product1.id, quantity: 2, status: "pending")

# product_order2 = ProductOrder.create(user_id: user2.id, product_id: product2.id, quantity: 1, status: "approved")

# product_order3 = ProductOrder.create(user_id: user3.id,product_id: product3.id, quantity: 3, status: "completed")

puts "Seed data for orders created successfully!"