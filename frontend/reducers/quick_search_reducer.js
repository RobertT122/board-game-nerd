import { RECIEVE_QUICK_SEARCH } from "../actions/game_actions";

const quickSearchReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type){
    case RECIEVE_QUICK_SEARCH:
      return action.gamesList.map(game => game.id)
      // return Object.keys(action.games)
    default:
      return state;
  }
}

export default quickSearchReducer;