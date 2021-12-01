import React, { useState } from "react";
import { connect} from "react-redux";
import { useLocation, matchPath } from "react-router";
import { createReview, deleteReview, updateReview } from "../../actions/review_actions";
import { hideModal } from "../../actions/ui_actions";
import ErrorsContainer from "../errors/errors";

const ReviewFormModal = props => {

  //setup the any prefiled data for the user id
  let location = useLocation()
  let match = matchPath(location.pathname, {
    path: "/game/:game_id/"
  })
  let game_id = match.params.game_id
  let currentUserReview = props.findUserReviewId(props.currUserId)
  let action = props.createReview
  let deleteReview = props.hideModal
  if (currentUserReview){
    action = props.updateReview
    deleteReview = () => props.deleteReview(currentUserReview.id)
  } else {
    currentUserReview = {body: "", rating: 0, game_id, user_id: props.currUserId}
  }

  let [state, setState] = useState(currentUserReview)
  
  const handleSubmit = e => {
    e.preventDefault()
    action(state)
  }

  const handleChange = input => (
    e => setState(Object.assign({},state,{[input]: e.currentTarget.value}))
  )

  return (
    <>
      <h2 className="form-title">My Review</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className="form-input"
          type="number"
          value={state.rating} 
          onChange={handleChange("rating")}
        />
        <input
          className="form-input"
          type="text"
          value={state.body}
          onChange={handleChange("body")}
        />
        <button type="submit" className="submit-button">submit</button>
      </form>
      <button onClick={deleteReview} className="link">Delete</button>
      <ErrorsContainer/>
    </>
  )
}




const mapSTP = state => ({
  currUserId: state.session.id,

  findUserReviewId: (userId) => {
    let reviews = state.entities.reviews;
    let key = Object.keys(reviews).find(key =>(
      reviews[key].userId === userId
    ))
    return reviews[key]
  },
})

const mapDTP = dispatch => ({
  deleteReview: review_id => dispatch(deleteReview(review_id)),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  hideModal: () => dispatch(hideModal())
})

const ReviewFormModalContainer = connect(mapSTP, mapDTP)(ReviewFormModal)


export default ReviewFormModalContainer