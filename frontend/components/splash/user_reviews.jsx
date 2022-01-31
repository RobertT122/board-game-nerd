import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserReviews } from "../../actions/review_actions";
import RatingIcon from "../reviews/rating_icon";
import { Link } from "react-router-dom";

const UserReviews = ({reviews, games, fetchReviews, loading}) => {
  useEffect(() => fetchReviews(), [])

  if (loading){
    return <></>
  }

  return (
    <div className="body-content splash-reviews">
      <h1 className="context-title"> Your Reviews</h1>
      <ul  className="context-body review-list">
        {
          Object.values(reviews).reverse().map(review => {
            let game = games[review.gameId];
            return(
              <li key={review.id}>
                <RatingIcon rating={review.rating} className="review-list-icon"/>
                <div className="review-list-text">
                  <h2><Link to={`/game/${game.id}/${game.name.toLowerCase().split(" ").join("-")}`}>
                    {game.name}
                  </Link></h2>
                  <p>{review.body}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

const mapSTP = ({entities: {reviews, games}, ui}) =>({
  reviews,
  games,
  loading: ui.loading.reviewsLoading,
});
const mapDTP = ( dispatch, ownProps ) =>({
  fetchReviews: () => dispatch(fetchUserReviews(ownProps.user.id))
});

const UserReviewsContainer = connect(mapSTP, mapDTP)(UserReviews);

export default UserReviewsContainer;