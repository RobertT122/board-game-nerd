export const fetchReviews = game_id => (
  $.ajax({
    method: "GET",
    url: `api/games/${game_id}/reviews`
  })
)