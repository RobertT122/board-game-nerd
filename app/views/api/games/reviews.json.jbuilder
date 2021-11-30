json.key_format! camelize: :lower

json.reviews do
  @game.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :game_id, :rating, :body
    end
  end
end
json.users do
  @game.reviewers.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end
