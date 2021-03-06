# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_categories_on_name  (name) UNIQUE
#
class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :games_categories, dependent: :destroy

  has_many :games,
  through: :games_categories,
  source: :game

end
