import * as ReviewsUtil from "../util/reviews_util"

export const RECIVE_GAME_REVIEWS = "RECIVE_GAME_REVIEWS"
export const LOADING_REVIEWS = "LOADING_REVIEWS"

export const startLoadingReviews = () => ({
  type: LOADING_REVIEWS
})

const receiveGameReviews = payload => ({
  type: RECIVE_GAME_REVIEWS,
  payload
})

export const fetchReviews = game_id => dispatch => {
  dispatch(startLoadingReviews())
  return ReviewsUtil.fetchReviews(game_id)
    .then( payload => dispatch(receiveGameReviews(payload)))
}