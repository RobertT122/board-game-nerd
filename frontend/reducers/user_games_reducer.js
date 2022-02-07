import { RECIEVE_USER_GAMES, REMOVE_GAME } from "../actions/game_actions";

const userGamesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_USER_GAMES:
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

export default userGamesReducer;