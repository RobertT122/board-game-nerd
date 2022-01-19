# == Schema Information
#
# Table name: games
#
#  id               :bigint           not null, primary key
#  artist           :string           not null
#  avg_rating       :float
#  description      :string           not null
#  designer         :string           not null
#  name             :string           not null
#  player_count_max :integer
#  player_count_min :integer          not null
#  playtime_max     :integer
#  playtime_min     :integer          not null
#  tag_line         :string           not null
#  year             :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  uploader_id      :integer          not null
#
# Indexes
#
#  index_games_on_name         (name) UNIQUE
#  index_games_on_uploader_id  (uploader_id)
#
require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
