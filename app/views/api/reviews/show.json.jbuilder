json.key_format! camelize: :lower
json.set! @review.id do
  json.extract! @review, :id, :user_id, :game_id, :rating, :body
end