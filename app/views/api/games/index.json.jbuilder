
json.key_format! camelize: :lower

@games.each do |game|
  json.set! game.id do
    json.extract! game, :id, :name, :avg_rating
    json.image_url url_for(game.photo)
  end
end


