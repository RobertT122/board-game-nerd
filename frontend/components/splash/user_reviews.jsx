import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserReviews } from "../../actions/review_actions";

const UserReviews = ({reviews, fetchReviews}) => {
  useEffect(() => fetchReviews(), [])
  return (
   <h1>Reviews</h1>
  );
}

const mapSTP = ({entities: {reviews}}) =>({
  reviews
});
const mapDTP = ( dispatch, ownProps ) =>({
  fetchReviews: () => dispatch(fetchUserReviews(ownProps.user.id))
});

const UserReviewsContainer = connect(mapSTP, mapDTP)(UserReviews);

export default UserReviewsContainer;