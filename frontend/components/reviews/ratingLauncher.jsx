import React from "react";
import { connect } from "react-redux";
import { showLoginModal } from "../../actions/ui_actions";

const RatingLauncher = props => {
  
  const handleRatingButton = () => {
    if (props.currentUser){
      console.log("open review form")
    }else{
    props.showLogin()
    }
  }
  return <button onClick={handleRatingButton}>MyRating</button>
}

const mapSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDTP = (dispatch, ownProps) => ({
  showLogin: () => dispatch(showLoginModal()),
})

const RatingLauncherContainer = connect(mapSTP, mapDTP)(RatingLauncher)

export default RatingLauncherContainer;