json.key_format! camelize: :lower

json.image_url url_for(@game.photo)

@game.attributes.reject{|k, v| k=='created_at' || k=='updated_at' || k=='image_url' }
  .each do |key, value|
    json.set! key, value
  end