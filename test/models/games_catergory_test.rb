# == Schema Information
#
# Table name: games_catergories
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  game_id     :bigint           not null
#
# Indexes
#
#  index_games_catergories_on_category_id              (category_id)
#  index_games_catergories_on_game_id                  (game_id)
#  index_games_catergories_on_game_id_and_category_id  (game_id,category_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (game_id => games.id)
#
require 'test_helper'

class GamesCatergoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
