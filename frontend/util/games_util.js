export const retrieveGame = game_id =>(
  $.ajax({
    method: "GET",
    url: `api/games/${game_id}`
  })
)

export const retrieveAllGames = () =>(
  $.ajax({
    method: "GET",
    url: 'api/games'
  })
)

export const quickSearchGames = search =>(
  $.ajax({
    mehtod: "GET",
    url: 'api/games/quickSearch',
    data: {search}
  })
)