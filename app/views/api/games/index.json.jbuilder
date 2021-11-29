
json.key_format! camelize: :lower

@games.each do |game|
  json.set! game.id do
    json.extract! game, :id, :name, :avg_rating
  end
end

