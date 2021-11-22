import { SHOW_LOGIN_MODAL, HIDE_MODAL } from "../actions/ui_actions";


const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case SHOW_LOGIN_MODAL:
      console.log("login")
      return "login";
    case HIDE_MODAL:
      return null
    default:
      return state
  }
}

export default modalReducer