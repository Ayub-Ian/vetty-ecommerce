# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)


# Create some example users
user1 = User.create(name: 'John', email: 'john@gmail.com', password_digest: 'password')
user2 = User.create(name: 'Alice', email: 'alicegmaille.com', password_digest: 'password')
user3 = User.create(name: 'June', email: 'june@gmail.com', password_digest: 'password')

# Carts
5.times do |i|
  Cart.create(
    user_id: i + 1
  )
end
# Cart Items
5.times do
  CartItem.create(
    quantity: rand(1..5),
    cart_id: Cart.pluck(:id).sample,
    product_id: rand(1..5),
    service_id: rand(1..5)
  )
end
# Orders
5.times do |i|
  Order.create(
    status: ["pending", "completed"].sample,
    total_price: rand(50..100),
    user_id: i + 1
  )
end

# Order Items
5.times do
  OrderItem.create(
    quantity: rand(1..5),
    order_id: Order.pluck(:id).sample,
    product_id: rand(1..5),
    service_id: rand(1..5)
  )
end


puts "creating services"

# service1= service.create(name: "Dog walking and exercise service", description: "This service enables the dog to exercise moreand stretch itself even more", price:$13, image_url: "https://wag-club.co.uk/img/benefits_dog_walking.jpg")
# service2= service.create(name: "Pet Adoption  Services", description: "Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party such as a person, shelter, or rescue ..." , price:$20, image_url: "https://agrilinks.org/sites/default/files/styles/featured/public/screen_shot_2019-11-26_at_12.42.15.png")
# service3= service.create(name: "Animal tagging services service", description: "using a means of marking is a process done to identify and track specific animals. It is done for a variety of reasons including verification of ownership, biosecurity control, and tracking for research or agricultural purposes.", price:$50, image_url: "https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2017/01/11144732/cows-1209635_1280.jpg")
# service4= service.create(name: "Dental Care services service", description: "Veterinary dentistry includes the cleaning, adjustment, filing, extraction, or repair of your pets' teeth and all other aspects of oral health care. These procedures should be performed by a veterinarian or a board-certified veterinary dentist.", price:$30, image_url: "https://thenoblevet.com/wp-content/uploads/2020/12/The-Noble-Veterinary-Surgeons-Pet-Dentistry.jpg.webp")
# service5= service.create(name: "Animal microchipping services service", description: "Microchips provide an effective, permanent, and reliable means of identifying your animal. Microchips implanted by Animal Services are automatically registered in a national microchip database. It is important, however, that pet owners ensure their information is updated if they move or change phone numbers.", price:$40 image_url: "https://www.msah.com/sites/default/files/Microchip.jpeg")
  #service1= service.create(name: Dental Care services service description: "", prMicrochips provide an effective, permanent, and reliable means of identifying your animal. Microchips implanted by Animal Services are automatically registered in a national microchip database. It is important, however, that pet owners ensure their information is updated if they move or change phone numbers.ice:"" image_url: "https://thenoblevet.com/wp-content/uploads/2020/12/The-Noble-Veterinary-Surgeons-Pet-Dentistry.jpg.webp"
Service.create([
  {
  "name": "Dog Exercise and training",
  "description": "Red velvet cake has endured as one of the most popular cakes in the United States.Cake's name is a descriptor of its soft, velvety texture.",
  "price": 20,
  "image_url": "https://www.dogtopia.com/olathe/wp-content/themes/dogtopia-local-2018/dist/images/training-service-page-body-copy-image.jpg"
  },
  {
  "name": "Animal Tagging",
  "description": "using a means of marking is a process done to identify and track specific animals. It is done for a variety of reasons including verification of ownership, biosecurity control, and tracking for research or agricultural purposes",
  "price": 25,
  "image_url": "https://blog.apnikheti.com/wp-content/uploads/2019/04/New-Project-20.jpg"
  },
  {
  "name": "Dental care services",
  "description": "Veterinary dentistry includes the cleaning, adjustment, filing, extraction, or repair of your pets' teeth and all other aspects of oral health care. These procedures should be performed by a veterinarian or a board-certified veterinary dentist",
  "price": 5,
  "image_url": "https://thenoblevet.com/wp-content/uploads/2020/12/The-Noble-Veterinary-Surgeons-Pet-Dentistry.jpg.webp"
  },
  {
  "name": "Microchippping",
  "description": "Microchips provide an effective, permanent, and reliable means of identifying your animal. Microchips implanted by Animal Services are automatically registered in a national microchip database. It is important, however, that pet owners ensure their information is updated if they move or change phone numbers",
  "price": 15,
  "image_url": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/02/14165945/Cavalier-King-Charles-Spaniel-lying-down-getting-a-microchip-scan-on-a-white-background.jpg"
  },
  
  ])


#create some services
# Service.create(name: 'Fish Pellets', description: 'Best fish pellets in town', price: 5.99, image_url: 'http://africanmiliki.com/images/Irio.jpg')
# Service.create(name: 'Dog Grooming', description: 'Professional dog grooming services', price: 45.99, image_url: 'http://africanmiliki.com/images/DogGrooming.jpg')
# Service.create(name: 'Cat Boarding', description: 'Safe and comfortable cat boarding', price: 30.99, image_url: 'http://africanmiliki.com/images/CatBoarding.jpg')

 #Create some sample product orders

# product_order1 = ProductOrder.create(user_id: user1.id, product_id: product1.id, quantity: 2, status: "pending")

# product_order2 = ProductOrder.create(user_id: user2.id, product_id: product2.id, quantity: 1, status: "approved")

# product_order3 = ProductOrder.create(user_id: user3.id,product_id: product3.id, quantity: 3, status: "completed")

puts "Seed data for orders created successfully!"
