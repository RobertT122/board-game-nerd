
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

export const retrieveTopTen = () => (
  $.ajax({
    method: "GET",
    
  })
)

export const createNewGame = formData => (
  $.ajax({
    url: '/api/games',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  }).then(
    (res) => console.log(res.message),
    (res) => console.log(res.responseJSON)
  )
)