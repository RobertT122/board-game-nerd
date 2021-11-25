begin
  json.image_url asset_path("game_art/#{@game.image_url}")
rescue 
  json.image_url @game.image_url
end
json.merge! @game.attributes.reject {|k, v| k=='created_at' || k=='updated_at' || k=='image_url' }
