import * as GameActions from '../actions/game_actions'

const loadingReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case GameActions.RECIEVE_GAME:
      return Object.assign({}, state, {gameLoading: false})
    case GameActions.RECIEVE_ALL_GAMES:
      return Object.assign({}, state, {allGamesLoading: false})
    case GameActions.LOADING_GAME:
      return Object.assign({}, state, {gameLoading: true})
    case GameActions.LOADING_ALL_GAMES:
      return Object.assign({}, state, {allGamesLoading: true})
    default:
      return state;
  }
}

export default loadingReducer