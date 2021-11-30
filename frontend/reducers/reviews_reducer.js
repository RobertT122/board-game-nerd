import { RECIVE_GAME_REVIEWS } from "../actions/review_actions";

const reviewsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECIVE_GAME_REVIEWS:
      return Object.assign({}, action.payload.reviews)
    default:
      return state
  }
}

export default reviewsReducer; 