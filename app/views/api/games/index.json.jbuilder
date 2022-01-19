
json.key_format! camelize: :lower

@games.each do |game|
  json.set! game.id do
    json.extract! game, :id, :name, :avg_rating
    if game.photo.attached?
      json.image_url url_for(game.photo)
    else
      json.image_url asset_path("no_image.png")
    end
  end
end


