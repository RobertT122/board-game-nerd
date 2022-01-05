class Game < ApplicationRecord
  validates :name, :description, :designer, :artist, :year, :tag_line, :image_url, :playtime_min, :player_count_min, presence: true
  validates :name, uniqueness: true

  has_many :reviews, dependent: :destroy

  has_many :reviewers,
    through: :reviews,
    source: :user
  
  after_initialize :update_avg_rating!
  # used for pre-seeded reviews
  has_one_attached :photo

  def update_avg_rating!
    # call this function whenever a review is added
    ratings = self.reviews.load.select(:rating).map{|rating| rating.rating}
    if ratings.size > 0
      self.avg_rating = (ratings.inject{ |sum, el| sum + el }.to_f / ratings.size).round(1)
    else
      self.avg_rating = nil
    end
  end

end
