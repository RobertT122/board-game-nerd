import * as GamesUtil from "../util/games_util";
import { fetchReviews } from "./review_actions";

export const RECIEVE_GAME = "RECIEVE_GAME"
export const RECIEVE_ALL_GAMES = "RECIEVE_ALL_GAMES"

export const LOADING_ALL_GAMES = "LOADING_ALL_GAMES"
export const LOADING_GAME = "LOADING_GAME"

export const RECIEVE_SEARCH = "RECIEVE_SEARCH"

export const startLoadingGame = () => ({
  type: LOADING_GAME
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
  type: RECIEVE_SEARCH,
  gamesList
})

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
    .then(games=>{
      dispatch(recieveSearch(games))
    })
}