export const fetchReviews = game_id => (
  $.ajax({
    method: "GET",
    url: `api/games/${game_id}/reviews`
  })
)

export const createReview = review => (
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: review
  })
)
export const updateReview = review => (
  $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: review
  })
)
export const createReview = review_id => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${review_id}`,
  })
)