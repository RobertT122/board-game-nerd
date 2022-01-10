import { RECIEVE_SEARCH } from "../actions/game_actions";

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_SEARCH:
      console.log(action.games)
      return action.games.keys || []
    default:
      return state;
  }
}

export default searchReducer;