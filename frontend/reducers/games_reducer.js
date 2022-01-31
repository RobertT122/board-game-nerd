import { RECIEVE_ALL_GAMES, RECIEVE_GAME, RECIEVE_QUICK_SEARCH, RECIEVE_TOP_TEN } from "../actions/game_actions";

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_GAME:
      console.log(action.game)
      return Object.assign({}, state, {[action.game.id]: action.game} )
    case RECIEVE_TOP_TEN:
    case RECIEVE_QUICK_SEARCH:
      const newState = {}
      action.gamesList.forEach(game => {
        return Object.assign(newState, {[game.id]: game}, state)
      });
      return Object.assign({}, newState, state);
    case RECIEVE_ALL_GAMES:
      return Object.assign({}, action.games)
    default:
      return state;
  }
}

export default gamesReducer;