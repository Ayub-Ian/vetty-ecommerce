const products = [

    {
      "id": 1,
      "name": "Fish Pellets",
      "description": "Flake food is a type of proprietary or artificially manufactured fish food consumed by a wide variety of tropical and saltwater fish and invertebrates. It is ideally suited to top dwellers and mid-water fish though numerous bottom dwelling species consume flake food once it has settled on the bottom.",
      "price": 5.99,
      image: "https://image.chewy.com/is/image/catalog/254064_MAIN._AC_SL600_V1602610273_.jpg"
    },
    {
      "id": 2,
      "name": "Snappy Tom Chunky Fish With Flaked Snapper",
      "description":  "Natural Real Fish & Chicken Grain Free By-product Free Omega Oils No Artificial Colours, Flavours & Preservatives INGREDIENTS Quality Sardines, Red snapper, Gelling Agents, Permitted Food Colour, Taurine, Vitamins and Minerals",
      "price": 10.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/06/Untitled-design-21-1-600x600.png"
    },
    {
      "id": 3,
      "name": "Grooming Glove",
      "description": "The soft rubber material ensures a gentle massage and grooming without the painful removal of fur or irritating the skin. Afterwards your pets will have a shiny, softer coat, making your pets look healthier, happier and more beautiful. When you?re not using the gloves, just lay them out and your pets can happily brush themselves against them. Perfect for long, short and curly haired dogs, cats, horses and rabbits. ",
      "price": 20.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/09/Pet-Grooming-Deshedding-and-Massage-Glove-for-removing-excess-fur-in-cats-and-dogs-buy-online-in-Kenya-768x768-1.jpg"
    },
    {
      "id": 4,
      "name": "Ankur Heavy Dish With Full Bonded Colored Rubber Base",
      "description": "ANKUR HEAVY DISH BOWL WITH FULL BONDED COLORED RUBBER BASE",
      "price": 15.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/09/Ankur-Heavy-Bondend-Bowl.png"
    },
    {
      "id": 5,
      "name": "Puppy Identification Collars",
      "description": "Muliticolored puppy colars",
      "price": 5.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/09/puppyidcollar1.jpg"
    },
    {
      "id": 6,
      "name": "Pet Air Cages",
      "description": "Acrylic Pet Carrier – IATA Approved Cage",
      "price": 10.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2021/03/petaircage.jpg"
    },
    {
      "id": 7,
      "name": "Pet Flea Comb",
      "description": "Pet Flea Comb",
      "price": 20.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/09/fleacomb.jpg"
    },
    {
      "id": 8,
      "name": "Insectostop Spray",
      "description": "Bob Martin Vetcare Long-Acting Tick and Flea Spray Plus",
      "price": 15.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/11/Insectostop.jpg"
    },
    {
      "id": 9,
      "name": "Gravity Pet Feeder",
      "description": "Automatic Pet Food Feeder",
      "price": 5.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2023/02/petfeeder.jpg"
    },
    {
      "id": 10,
      "name": "Anti-Scratching Spray For Cats",
      "description": "Sanipet Anti-scratching spray for cats",
      "price": 10.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2021/04/antiscratching.jpg"
    },
    {
      "id": 11,
      "name": "Ferplast Kitty Ltr Tray",
      "description": "Crafted with a premium quality material that proffers easy cleaning. Works to prevent obesity in pets.",
      "price": 20.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/06/Untitled-design-3-1-600x600.png"
    },
    {
      "id": 12,
      "name": "Bonnie Parrot Food",
      "description": "Bonnie Parrot food is a mixture of specially selected grains and seeds loved by budgerigars. The wide variety of ingredients ensures that birds get all the required nutrients.",
      "price": 15.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/09/BONNIE-PARROT-FOOD-0.70-Kg.webp"
    },
    {
      "id": 13,
      "name": "Wwong Dog Harness- 4XL",
      "description": "Are you tired of struggling to control your dog on walks? Introducing the No Pull Dog Harness! With two adjustable reflective vest harnesses, this innovative product is sure to make walks with your pup a breeze. Its heavy duty handle and 5 FT leash make it easy to control while the reflective material keeps your pup safe and visible during nighttime walks. Get your pup the No Pull Dog Harness today and make walking with them an enjoyable experience!",
      "price": 5.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2023/03/wwong-grouped-1.png"
    },
    {
      "id": 14,
      "name": "Dog Jacket With Harness",
      "description": "Weatherproof Dog Jacket With Harness",
      "price": 10.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2021/03/waterproffjak1.jpg"
    },
    {
      "id": 15,
      "name": "PET BLANKET",
      "description": "Warm Pet Blanket",
      "price": 20.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2021/12/petblanket.jpg"
    },
    {
      "id": 16,
      "name": "Airdog? Dumbbell Lg",
      "description": "KONG AirDog Squeaker Dumbell Fetch Toy ? Large",
      "price": 15.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/09/ASDB1.jpg"
    },
    {
      "id": 17,
      "name": "Tlc Dog Shampoo 250Ml",
      "description": "TLC Dog Shampoo retains moisture in the skin, has a mildly anti bacterial effect and is anti-inflammatory. This shampoo is particularly suitable for sensitive skin, Your furry friend deserves proper care and nurture and the first step in providing it is maintaining their hygiene at a high level.",
      "price": 17.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/09/Shampoo-1.png"
    },
    {
      "id": 18,
      "name": "Rogz Squeekz Ball Red",
      "description": "KONG AirDog Squeaker Dumbell Fetch Toy ? Large",
      "price": 13.99,
      image: "https://petcentral.co.ke/wp-content/uploads/2022/08/2-SQ02-C-RED.jpg"
    },
    {
      "id": 19,
      "name": "Bird Cage",
      "description": "Bird Cage",
      "price": 19.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2021/12/birdcage.jpg"
    },
    {
      "id": 20,
      "name": "Mantax Scaly",
      "description": "Skin Care for Cage Birds",
      "price": 10.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2021/06/Mantax-Scaly.jpg"
    },
    {
      "id": 21,
      "name": "Happy Star-Shaped Bird Playing Toy",
      "description": "Pado Happy Star-Shaped Bird Playing Toy",
      "price": 16.99,
      image: "https://www.petzone.co.ke/wp-content/uploads/2021/03/starshapedbirdtoy.jpg"
    }
  ]
  module.exports = products;