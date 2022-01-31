//update this when the backend path is recreated and you will be able to change just the single variable
export const fetchReviews = game_id => (
  $.ajax({
    method: "GET",
    url: `api/reviews/game/${game_id}`
  })
)

export const createReview = review => (
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: {review}
  })
)
export const updateReview = review => {
  return $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: {review}
  })
}
export const deleteReview = review_id => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${review_id}`,
  })
)

export const fetchUserReviews = user_id => (
  $.ajax({
    method: "GET",
    url: `api/reviews/${user_id}`,
  })
)