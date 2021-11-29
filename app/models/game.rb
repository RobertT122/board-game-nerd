class Game < ApplicationRecord
  validates :name, :description, :designer, :artist, :year, :tag_line, :image_url, :playtime_min, :player_count_min, presence: true
  validates :name, uniqueness: true
  
end
