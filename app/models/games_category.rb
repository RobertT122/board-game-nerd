# == Schema Information
#
# Table name: games_categories
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  game_id     :bigint           not null
#
# Indexes
#
#  index_games_categories_on_category_id              (category_id)
#  index_games_categories_on_game_id                  (game_id)
#  index_games_categories_on_game_id_and_category_id  (game_id,category_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (game_id => games.id)
#
class GamesCategory < ApplicationRecord
  validates :game_id, uniqueness: {scope: :category_id, message: " already belongs to category"}
  validates :game_id, :category_id, presence: true

  belongs_to :game
  belongs_to :category
  
end
