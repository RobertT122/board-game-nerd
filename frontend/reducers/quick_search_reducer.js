import { RECIEVE_QUICK_SEARCH, REMOVE_GAME } from "../actions/game_actions";

const quickSearchReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type){
    case RECIEVE_QUICK_SEARCH:
      return action.gamesList.map(game => game.id)
      // return Object.keys(action.games)
    case REMOVE_GAME:
      const newState = [...state];
      const index = indexOf(gameId)
      if(index > -1){
        newState.splice(index, 1);
      }
      return newState;
    default:
      return state;
  }
}

export default quickSearchReducer;