import { RECIEVE_TOP_TEN, REMOVE_GAME } from "../actions/game_actions";

const topTenReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type){
    case RECIEVE_TOP_TEN:
      return action.gamesList.map(game => game.id)
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

export default topTenReducer;