class Game < ApplicationRecord
  validates :name, :description, :designer_name, presence: true
  validates :name, uniqueness: true
  
end
