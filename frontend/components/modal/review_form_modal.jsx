import React from "react";
import { connect} from "react-redux";
import { useLocation, matchPath } from "react-router";
import { createReview, deleteReview, updateReview } from "../../actions/review_actions";


const ReviewFormModal = props => {
  let location = useLocation()
  let match = matchPath(location.pathname, {
    path: "/game/:game_id/"
  })
  const game_id = match.params.game_id
  console.log(game_id)

  const currentUserReview = props.findUserReviewId(props.currUserId)
  console.log(currentUserReview)
  return (
    <h1>reviewForm</h1>
  )
}




const mapSTP = state => ({
  currUserId: state.session.id,

  findUserReviewId: (userId) => {
    let reviews = state.entities.reviews;
    return Object.keys(reviews).find(key =>(
      reviews[key].userId === userId
    ))
  },


})

const mapDTP = dispatch => ({
  deleteReview: () => dispatch(deleteReview),
  createReview: () => dispatch(createReview),
  updateReview: () => dispatch(updateReview),
})

const ReviewFormModalContainer = connect(mapSTP, mapDTP)(ReviewFormModal)


export default ReviewFormModalContainer