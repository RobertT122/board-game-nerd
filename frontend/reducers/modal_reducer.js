import { SHOW_LOGIN_MODAL, HIDE_MODAL } from "../actions/ui_actions";

const defaultState = {
  login: false,
}

const modalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case SHOW_LOGIN_MODAL:
      return Object.assign({}, defaultState, {login: true});
    case HIDE_MODAL:
      return defaultState
    default:
      return state
  }
}

export default modalReducer