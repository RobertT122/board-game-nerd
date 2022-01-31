
json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :game_id, :rating, :body
    end
  end
end