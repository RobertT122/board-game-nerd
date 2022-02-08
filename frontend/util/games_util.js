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

export const retrieveTopTen = ({categoryId: category_id, pageIndex: page_index, listSize: list_size}) => (
  $.ajax({
    method: "GET",
    url: 'api/games/topTen',
    data: {topTen: {category_id, page_index, list_size}}
  })
)

export const createNewGame = formData => (
  $.ajax({
    url: '/api/games',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)

export const updateGame = formData => (
  $.ajax({
    url: `/api/games/${formData.get('game[id]')}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
)

export const deleteGame = game_id => (
  $.ajax({
    url: `/api/games/${game_id}`,
    method: "DELETE"
  })
)

export const createGamesCategories = (categoryArr, game_id) => {
  categoryArr.forEach((id) => createGamesCategory(id, game_id))
}

const createGamesCategory = (category_id, game_id) => (
  $.ajax({
    url: '/api/games_categories',
    data: {category: {category_id, game_id}},
    method: 'POST'
  })
)

export const destroyGamesCategories = (categoryArr, game_id) => {
  categoryArr.forEach((id) => destroyGamesCategory(id, game_id))
}

const destroyGamesCategory = (category_id, game_id) => (
  $.ajax({
    url: '/api/games_categories',
    data: {category: {category_id, game_id}},
    method: 'DELETE'
  })
)

export const fetchUserGames = user_id => (
  $.ajax({
    method: "GET",
    url: `api/games/user/${user_id}`,
  })
)