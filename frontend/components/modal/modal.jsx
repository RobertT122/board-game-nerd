import React from "react";
import { connect } from "react-redux";
import LoginModalContainer from "./login_modal";
import {hideModal} from "../../actions/ui_actions"

const selectModal = ({activeModal, hideModal}) => {
  switch(activeModal){
    case "login":
      return <LoginModalContainer hide={hideModal}/>
    case "review-form":
      return <h1 style="height: 500px">reviewForm</h1>
    default:
      return null
  }
}

const Modal = props => {
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

export default ModalContainer