import * as GamesUtil from "../util/games_util";
import { fetchReviews } from "./review_actions";
import { succeeded } from "./ui_actions";

export const RECIEVE_GAME = "RECIEVE_GAME"
export const RECIEVE_GAME_ERRORS = "RECIEVE_GAME_ERRORS"

export const RECIEVE_ALL_GAMES = "RECIEVE_ALL_GAMES"

export const LOADING_ALL_GAMES = "LOADING_ALL_GAMES"
export const LOADING_GAME = "LOADING_GAME"
export const LOADING_USER_GAMES = "LOADING_GAMES"


export const RECIEVE_QUICK_SEARCH = "RECIEVE_SEARCH"
export const RECIEVE_TOP_TEN = "RECIEIVE_TOP_TEN"

export const RECIEVE_USER_GAMES = "RECIEVE_USER_GAMES"

export const startLoadingGame = () => ({
  type: LOADING_GAME
})

export const startLoadingUserGames = () => ({
  type: LOADING_USER_GAMES
})

export const startLoadingAllGames = () => ({
  type: LOADING_ALL_GAMES
})


const recieveGame = game => ({
  type: RECIEVE_GAME,
  game
})

const recieveAllGames = games => ({
  type: RECIEVE_ALL_GAMES,
  games
})


const recieveSearch = gamesList => ({
  type: RECIEVE_QUICK_SEARCH,
  gamesList
})

const recieveTopTen = gamesList => ({
  type: RECIEVE_TOP_TEN,
  gamesList
})

const recieveUserGames = gamesList => ({
  type: RECIEVE_USER_GAMES,
  gamesList
})

export const receiveErrors = errors => ({
  type: RECIEVE_GAME_ERRORS,
  errors
});

export const createNewGame = (formData, categoryArr) => dispatch => (
  GamesUtil.createNewGame(formData)
    .then(
      (res) => {
        dispatch(succeeded())
        GamesUtil.createGamesCategories(categoryArr, res.game_id)
      },
      res => {
        dispatch(receiveErrors(res.responseJSON))
      }
    )
)

export const retrieveGame = game_id => dispatch => {
  dispatch(startLoadingGame())
  return GamesUtil.retrieveGame(game_id)
    .then( game => {
      dispatch(fetchReviews(game.id))
      dispatch(recieveGame(game))
    })
}

export const retrieveAllGames = () => dispatch => {
  dispatch(startLoadingAllGames())
  return GamesUtil.retrieveAllGames()
    .then(games => dispatch(recieveAllGames(games)))
}

export const quickSearchGames = search => dispatch => {
  dispatch(startLoadingAllGames())
  return GamesUtil.quickSearchGames(search)
    .then(gamesList=>{
      dispatch(recieveSearch(gamesList))
    })
}

export const retrieveTopTen = () => dispatch => {
  dispatch(startLoadingAllGames())
  return GamesUtil.retrieveTopTen()
    .then(gamesList=>{
      dispatch(recieveTopTen(gamesList))
    })
}

export const retrieveUserGames = user_id => dispatch => {
  dispatch(startLoadingUserGames())
  return GamesUtil.fetchUserGames(user_id)
    .then(gamesList => {
      dispatch(recieveUserGames(gamesList))
    })
}
