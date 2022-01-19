# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  game_id    :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_reviews_on_user_id_and_game_id  (user_id,game_id) UNIQUE
#
class Review < ApplicationRecord
  validates :rating, :user_id, :game_id, presence: true
  validates :user_id, uniqueness: {scope: :game_id, message: " has already reviewed this game"}
  validates :rating, numericality: { greater_than: 0, less_than_or_equal_to: 10 }

  belongs_to :game
  belongs_to :user

end
