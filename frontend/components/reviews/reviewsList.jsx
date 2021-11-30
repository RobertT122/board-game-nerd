import React, { useEffect } from "react";
import { connect } from "react-redux";
import RatingIcon from "./rating_icon";
import { fetchReviews } from "../../actions/review_actions";

const ReviewList = ({users, fetchReviews, reviews, loading}) => {

  if (loading){
    return <h1>loading...</h1>
  }

  return(
    <ul>
      {
        Object.values(reviews).map(review => (
          <li key={review.id}>
            <RatingIcon rating={review.rating}/>
            <div>
              <div>
              {users[review.user_id].username}
              </div>
              <p>
                {review.body}
              </p>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

const mapSTP = state => ({
  loading: state.ui.loading.reviewsLoading,
  users: state.entities.users,
  reviews: state.entities.reviews
})

const ReviewListContainer = connect(mapSTP)(ReviewList)

export default ReviewListContainer