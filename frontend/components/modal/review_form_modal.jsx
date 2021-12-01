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
    e => {
      setState(Object.assign({},state,{[input]: e.currentTarget.value}))
    }
  )

  const isChecked = value => {
    if(state.rating === value){
      return true
    } else
    {
      return false
    }
  }

  return (
    <>
      <h2 className="form-title">My Review</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-input rating-stars">
          <label><span>1</span>
            <input type="radio" className="star" value="1" name="rating" defaultChecked={isChecked(1)}
              onClick={handleChange("rating")}
              // onMouseEnter={ e => e.currentTarget.classList.add("checked")} 
              // onMouseLeave={ e => e.currentTarget.classList.remove("checked")}
            />
          </label>
          <label><span>2</span>
            <input type="radio" className="star" value="2" name="rating" 
              defaultChecked={isChecked(2)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>3</span>
            <input type="radio" className="star" value="3" name="rating" 
            defaultChecked={isChecked(3)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>4</span>
            <input type="radio" className="star" value="4" name="rating" 
              defaultChecked={isChecked(4)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>5</span>
            <input type="radio" className="star" value="5" name="rating" 
              defaultChecked={isChecked(5)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>6</span>
            <input type="radio" className="star" value="6" name="rating" 
              defaultChecked={isChecked(6)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>7</span>
            <input type="radio" className="star" value="7" name="rating" 
              defaultChecked={isChecked(7)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>8</span>
            <input type="radio" className="star" value="8" name="rating" 
              defaultChecked={isChecked(8)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>9</span>
            <input type="radio" className="star" value="9" name="rating" 
              defaultChecked={isChecked(9)}
              onClick={handleChange("rating")} 
            />
          </label>
          <label><span>10</span>
            <input type="radio" className="star" value="10" name="rating" 
              defaultChecked={isChecked(10)}
              onClick={handleChange("rating")} 
            />
          </label>
        </div>

        <textarea
          placeholder="comments"
          className="form-input"
          value={state.body}
          onChange={handleChange("body")}
        ></textarea>
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