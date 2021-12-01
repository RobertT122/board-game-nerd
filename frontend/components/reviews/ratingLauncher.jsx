import React from "react";
import { connect } from "react-redux";
import { showLoginModal, showReviewForm } from "../../actions/ui_actions";

const RatingLauncher = props => {
  
  const handleRatingButton = () => {
    if (props.currentUser){
      props.showReviewForm()
    }else{
      props.showLogin()
    }
  }
  return <button className="link rating-launcher" onClick={handleRatingButton}>MyRating</button>
}

const mapSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDTP = dispatch => ({
  showLogin: () => dispatch(showLoginModal()),
  showReviewForm: () => dispatch(showReviewForm()),
})

const RatingLauncherContainer = connect(mapSTP, mapDTP)(RatingLauncher)

export default RatingLauncherContainer;