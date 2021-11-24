json.array! @games do |game|
  json.set! game.id do
    json.extract! game, :id, :name
  end
end

