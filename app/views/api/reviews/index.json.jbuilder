json.key_format! camelize: :lower

json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :game_id, :rating, :body
    end
  end
end
json.users do
  @reviews.each do |review|
    json.set! review.user.id do
      json.extract! review.user, :id, :username
    end
  end
end