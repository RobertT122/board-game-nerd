class GamesCatergory < ApplicationRecord
  validates :game_id, uniqueness: {scope: :category_id, message: " already belongs to category"}
  validates :game_id, :category_id, presence: true

  belongs_to :game
  belongs_to :category
  
end
