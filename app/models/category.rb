class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :games_catergories, dependent: :destroy
end