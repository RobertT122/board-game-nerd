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
class Game < ApplicationRecord

  validates :name, :description, :designer, :artist, :year, :tag_line, :playtime_min, :player_count_min, :uploader_id, presence: true
  validates :name, uniqueness: true

  has_many :reviews, dependent: :destroy

  has_many :games_catergories, dependent: :destroy

  has_many :categories, 
    through: :games_catergories,
    source: :category

  has_many :reviewers,
    through: :reviews,
    source: :user

    

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User
  
  after_initialize :update_avg_rating!
  # used for pre-seeded reviews

  has_one_attached :photo
  # game_instance.photo.attach(io: File.open("/file/path/name.jpeg"), filename: "filename.jpeg")
  # to render you can use the rails helper url_for(game_instance.photo)

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
