import * as GamesUtil from "../util/games_util";

export const RECIEVE_GAME = "RECIEVE_GAME"
export const RECIEVE_ALL_GAMES = "RECIEVE_ALL_GAMES"

const recieveGame = game => ({
  type: RECIEVE_GAME,
  game
})

const recieveAllGames = games => ({
  type: RECIEVE_ALL_GAMES,
  games
})

export const retrieveGame = game_id => dispatch => (
  GamesUtil.retrieveGame(game_id)
    .then( game => dispatch(recieveGame(game)))
)

export const retrieveAllGames = () => dispatch => (
  GamesUtil.retrieveAllGames()
    .then(games => dispatch(recieveAllGames(games)))
)