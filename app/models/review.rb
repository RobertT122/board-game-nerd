class Review < ApplicationRecord
  validates :rating, :body, :user_id, :game_id, presence: true
  validates :user_id, uniqueness: {scope: :game_id, message: "User has already reviewed this game"}
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }

  belongs_to :game
  belongs_to :user

end
