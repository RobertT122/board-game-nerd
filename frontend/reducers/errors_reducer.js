import { RECIEVE_REVIEW_ERRORS } from '../actions/review_actions';
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { SHOW_LOGIN_MODAL, HIDE_MODAL } from '../actions/ui_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case SHOW_LOGIN_MODAL:
      return [];
    case RECIEVE_REVIEW_ERRORS:
      return action.errors;
    case HIDE_MODAL:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer