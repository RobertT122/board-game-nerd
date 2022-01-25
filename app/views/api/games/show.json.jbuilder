json.key_format! camelize: :lower

if @game.photo.attached?
  json.image_url url_for(@game.photo)
else
  json.image_url asset_path("no_image.png")
end

json.categories @game.categories.map{|category| {name: category.name, id: category.id}}

@game.attributes.reject{|k, v| k=='created_at' || k=='updated_at' || k=='image_url' }
  .each do |key, value|
    json.set! key, value
  end