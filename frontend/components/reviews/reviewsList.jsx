import React, { useEffect } from "react";
import { connect } from "react-redux";
import RatingIcon from "./rating_icon";
import { fetchReviews } from "../../actions/review_actions";

const ReviewList = ({users, reviews, loading}) => {

  if (loading){
    return <h1>loading...</h1>
  }

  return(
    <>
  
  <h2 className="context-title">Reviews and Comments</h2>
      <ul className="context-body review-list">
        {
          Object.values(reviews).reverse().map(review => (
            <li key={review.id}>
              <RatingIcon rating={review.rating} className="review-list-icon"/>
              <div className="review-list-text">
                <h2>
                {users[review.userId].username}
                </h2>
                <p>
                  {review.body}
                </p>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

const mapSTP = state => ({
  loading: state.ui.loading.reviewsLoading,
  users: state.entities.users,
  reviews: state.entities.reviews
})

const ReviewListContainer = connect(mapSTP)(ReviewList)

export default ReviewListContainer