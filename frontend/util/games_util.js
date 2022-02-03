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
    url: 'api/games/topTen'
  })
)

export const createNewGame = (formData, categoryArr) => (
  $.ajax({
    url: '/api/games',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  }).then(
    (res) => {
      categoryArr.forEach((id) => updateGamesCategories(id, res.game_id))
    },
    (res) => console.log(res.responseJSON)
  )
)

const updateGamesCategories = (category_id, game_id) => (
  $.ajax({
    url: '/api/games_categories',
    data: {categories: {category_id, game_id}},
    method: 'POST'
  }).then(
    (res) => console.log(res.message),
    (res) => console.log(res.responseJSON)
  )
)

export const fetchUserGames = user_id => (
  $.ajax({
    method: "GET",
    url: `api/games/user/${user_id}`,
  })
)