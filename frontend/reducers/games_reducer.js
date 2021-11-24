import { RECIEVE_ALL_GAMES, RECIEVE_GAME } from "../actions/game_actions";

const gamesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_GAME:
      return Object.assign({}, state, {currentGame: action.game})
    case RECIEVE_ALL_GAMES:
      return Object.assign({}, state, {list: action.games})
    default:
      return state;
  }
}

export default gamesReducer;