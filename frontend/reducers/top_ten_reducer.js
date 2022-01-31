import { RECIEVE_TOP_TEN } from "../actions/game_actions";

const topTenReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type){
    case RECIEVE_TOP_TEN:
      return action.gamesList.map(game => game.id)
    default:
      return state;
  }
}

export default topTenReducer;