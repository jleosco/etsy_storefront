class Product < ApplicationRecord
  belongs_to :seller

  def self.products_by_seller
  select("products.id, price, description, s.id AS seller_id, s.name AS seller_name, email")
  .joins("INNER JOIN sellers AS s ON s.id = products.seller_id")
  .order("s.id")
  end

end
