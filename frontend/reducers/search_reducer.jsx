import { RECEIVE_SEARCH } from "../actions/game_actions";

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_SEARCH: 
      return action.game_ids
    default:
      return state;
  }
}

export default gamesReducer;