
json.key_format! camelize: :lower

@games.each do |game|
  json.set! game.id do
    json.extract! game, :id, :name, :avg_rating
    begin
      json.image_url asset_path("game_art/#{game.image_url}")
    rescue 
      json.image_url game.image_url
    end
  end
end


