import { RECIEVE_USER_GAMES } from "../actions/game_actions";

const userGamesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_USER_GAMES:
      return action.gamesList.map(game => game.id)
    default:
      return state;
  }
}

export default userGamesReducer;