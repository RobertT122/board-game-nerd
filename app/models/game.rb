class Game < ApplicationRecord
  validates :name, :description, :designer_name, uniqueness: true
  validates :name, uniqueness: true
  
end
