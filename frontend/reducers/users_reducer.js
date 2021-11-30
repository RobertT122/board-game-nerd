import { RECIVE_GAME_REVIEWS } from "../actions/review_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, 
        state,
        { [action.user.id]: action.user }
      );
    case RECIVE_GAME_REVIEWS:
      return Object.assign({}, state, action.payload.users)
    default:
      return state;
  }
}

export default usersReducer;