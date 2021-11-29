json.key_format! camelize: :lower

begin
  json.image_url asset_path("game_art/#{@game.image_url}")
rescue 
  json.image_url @game.image_url
end

@game.attributes.reject{|k, v| k=='created_at' || k=='updated_at' || k=='image_url' }
  .each do |key, value|
    json.set! key, value
  end