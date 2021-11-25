class Game < ApplicationRecord
  validates :name, :description, :designer_name, :image_url, :playtime_min, :player_count_min, presence: true
  validates :name, uniqueness: true
  
end
