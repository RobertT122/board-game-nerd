import React from "react";
import { connect } from "react-redux";
import LoginModal from "./login_modal";
import {hideModal} from "../../actions/ui_actions"
import ReviewFormModal from "./review_form_modal";

const selectModal = ({activeModal, hideModal}) => {
  switch(activeModal){
    case "login":
      return <LoginModal hide={hideModal}/>
    case "reviewForm":
      return <ReviewFormModal/>
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