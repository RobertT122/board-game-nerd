import * as ReviewsUtil from "../util/reviews_util"
import { hideModal } from "./ui_actions"

export const RECIVE_GAME_REVIEWS = "RECIVE_GAME_REVIEWS"
export const LOADING_REVIEWS = "LOADING_REVIEWS"
export const RECIEVE_REVIEW = "RECIEVE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIEW"
export const RECIEVE_REVIEW_ERRORS = "RECIEVE_REVIEW_ERRORS"


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

export const recieveReviewErrors = errors => ({
  type: RECIEVE_REVIEW_ERRORS,
  errors
})

const recieveReview = review => ({
  type: RECIEVE_REVIEW,
  review
})

export const createReview = review => dispatch => (
  ReviewsUtil.createReview(review)
    .then(
      review => (dispatch(recieveReview(review))),
      errors => (dispatch(recieveReviewErrors(errors.responseJSON)))
    )
    .then(
      () => (dispatch(hideModal()))
    )
)

export const updateReview = review => dispatch => (
  ReviewsUtil.updateReview(review)
    .then(
      review => (dispatch(recieveReview(review))),
      errors => (dispatch(recieveReviewErrors(errors.responseJSON)))
    )
    .then(
      () => (dispatch(hideModal()))
    )
)


const removeReview = review => ({
  type: DELETE_REVIEW,
  review
})

export const deleteReview = review_id => dispatch => (
  ReviewsUtil.deleteReview(review_id)
    .then(
      review => (dispatch(removeReview(review))),
      errors => (dispatch(recieveReviewErrors(errors.responseJSON)))
    )
    .then(
      () => (dispatch(hideModal()))
    )
)
