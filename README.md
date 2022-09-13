# README

## BoardGameNerd is Live [here](https://board-game-nerd.herokuapp.com/#/)

BoardGameNerd is a clone of the popular website [BoardGameGeek](https://boardgamegeek.com).

## Overview:

The purpose of this site is offer the user an easy and interactive way to see the most popular games out right now.
In BoardGameNerd you can explore a ranked list of board games sorted by user reviews. A user can visit the site and see relevant information on the games they are interested in, as well as make reviews and view other users comments and ratings. Your changes will dynamically alter the average review of the game and its ranked position of all games on the site. 

## Technologies:
This full stack aplication is built using :
* Ruby on Rails as the backend API controller and provides the MVC framework
* Postgres for the database
* React and Redux for front end navigatein and architecture

## Features: 

* The app features fully functional and encrypted user authentication using 
  * BCrypt for password hashing
  * Session Cookies for tracking current user sessions
  * interactive login with error management
  * A modal is used for the login form and a redirect is used for the sign in form to simulate BGGs patterns
 

* This app also contains a fully interactive reviewing and commenting system that
  * Has fully functional CRUD operations
  * Autofills forms using information on the current user
  * Dynamically changes the average rating of a game and its position on the overall rankings
  * The review form is presented as a modal

Below is the method I used for creating the modal for both user login and the review form modals:

```js

const selectModal = ({activeModal}) => {
  switch(activeModal){
    case "login":
      return <LoginModal/>
    case "reviewForm":
      return <ReviewFormModal/>
    default:
      return null
  }
}

const Modal = props => {
  let location = useLocation()
  useEffect(props.hideModal, [location.pathname])

  const activeModal = selectModal(props)
  if(activeModal) {
    return(
      <div className="modal-background" onClick={props.hideModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {activeModal}
        </div>
      </div>
    )
  } else {
    return <></>
  }

}

const mapSTP = state => ({
  activeModal: state.ui.modal
})

const mapDTP = dispatch => ({
  hideModal: () => dispatch(hideModal())
})


const ModalContainer = connect(mapSTP, mapDTP)(Modal)


```

Checkout my wiki for more information about my project...
