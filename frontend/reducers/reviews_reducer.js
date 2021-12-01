import * as ReviewActions from "../actions/review_actions";

const reviewsReducer = (state = {}, action ) => {
  switch(action.type){
    case ReviewActions.RECIVE_GAME_REVIEWS:
      return Object.assign({}, action.payload.reviews)
    case ReviewActions.RECIEVE_REVIEW:
      return Object.assign({}, state, action.review)
    case ReviewActions.DELETE_REVIEW:
      let newState = Object.assign({}, state)
      delete newState[Object.keys(action.review)[0]];
      return newState;
    default:
      return state
  }
}

export default reviewsReducer; 