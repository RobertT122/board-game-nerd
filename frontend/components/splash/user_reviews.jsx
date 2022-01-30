import React from "react";
import { connect } from "react-redux";

const UserReviews = props => {

  return (
    <h1>user reviews</h1>
  );
}

const mapSTP = state =>({

});
const mapDTP = dispatch =>({

});

const UserReviewsContainer = connect(mapSTP, mapDTP)(UserReviews);

export default UserReviewsContainer;