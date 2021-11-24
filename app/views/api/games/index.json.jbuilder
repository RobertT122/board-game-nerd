@games.each do |game|
  json.set! game.id do
    game.extract! :id, :name
  end
end

