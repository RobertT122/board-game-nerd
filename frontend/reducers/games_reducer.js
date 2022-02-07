import { RECIVE_GAME_REVIEWS } from "../actions/review_actions";
import { 
  RECIEVE_ALL_GAMES, 
  RECIEVE_GAME, 
  RECIEVE_QUICK_SEARCH, 
  RECIEVE_TOP_TEN,
  RECIEVE_USER_GAMES,
  REMOVE_GAME
} from "../actions/game_actions";

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {}
  switch(action.type){
    case RECIEVE_GAME:
      return Object.assign({}, state, {[action.game.id]: action.game} )
    case RECIEVE_USER_GAMES:
    case RECIEVE_TOP_TEN:
      action.gamesList.forEach(game => {
        Object.assign(newState, {[game.id]: game});
      });
      return Object.assign({}, state, newState);
    case RECIEVE_QUICK_SEARCH:
      action.gamesList.forEach(game => {
        Object.assign(newState, {[game.id]: game});
      });
      return Object.assign({}, newState, state);
    case RECIEVE_ALL_GAMES:
      return Object.assign({}, action.games)
    case RECIVE_GAME_REVIEWS:
      return Object.assign({}, action.payload.games, state)
    case REMOVE_GAME:
      Object.assign(newState, state);
      delete newState[action.gameId]
      return newState;
    default:
      return state;
  }
}

export default gamesReducer;