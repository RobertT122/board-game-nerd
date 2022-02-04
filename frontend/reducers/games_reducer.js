import { RECIVE_GAME_REVIEWS } from "../actions/review_actions";
import { 
  RECIEVE_ALL_GAMES, 
  RECIEVE_GAME, 
  RECIEVE_QUICK_SEARCH, 
  RECIEVE_TOP_TEN,
  RECIEVE_USER_GAMES
} from "../actions/game_actions";

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_GAME:
      return Object.assign({}, state, {[action.game.id]: action.game} )
    case RECIEVE_USER_GAMES:
    case RECIEVE_TOP_TEN:
      const newOverRideState = {}
      action.gamesList.forEach(game => {
        Object.assign(newOverRideState, {[game.id]: game});
      });
      return Object.assign({}, state, newOverRideState);
    case RECIEVE_QUICK_SEARCH:
      const newState = {}
      action.gamesList.forEach(game => {
        Object.assign(newState, {[game.id]: game});
      });
      return Object.assign({}, newState, state);
    case RECIEVE_ALL_GAMES:
      return Object.assign({}, action.games)
    case RECIVE_GAME_REVIEWS:
      return Object.assign({}, action.payload.games, state)
    default:
      return state;
  }
}

export default gamesReducer;