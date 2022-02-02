# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "test@test.com", password: 123456)

categories = [
  'shoes',
  'shirts',
  'pants',
  'collectables',
]

10.times do
  a = Seller.create(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )

  5.times do
    num_categories = rand(0..categories.length - 1);
    Buyer.create(
      name: Faker::Name.name,
      max_price: rand(99000..1500000),
      desired_categories: categories.sample(num_categories),
      seller_id: a.id
    )
  end
  
  50.times do
    price = rand(99000..1500000)
    p = Product.create(
      price: price,
      description: Faker::Marketing.buzzwords,
      seller_id: a.id
  )
  end
end