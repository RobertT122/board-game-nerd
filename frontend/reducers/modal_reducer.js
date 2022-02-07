import { SHOW_LOGIN_MODAL, HIDE_MODAL, SHOW_REVIEW_FORM, SHOW_DELETE_FORM } from "../actions/ui_actions";


const modalReducer = (state = {type: null}, action) => {
  Object.freeze(state);
  switch(action.type){
    case SHOW_LOGIN_MODAL:
      return {type: "login"};
    case SHOW_REVIEW_FORM:
      return {type: "reviewForm"};
    case SHOW_DELETE_FORM:
      return {type: "deleteForm", gameId: action.gameId};
    case HIDE_MODAL:
      return {type: null}
    default:
      return state
  }
}

export default modalReducer