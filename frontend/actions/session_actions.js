import * as SessionUtil from '../util/session_util'
import { hideModal } from './ui_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionUtil.signup(user)
    .then(
      user => (dispatch(receiveCurrentUser(user))), 
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    )
);

export const login = user => dispatch => (
  SessionUtil.login(user)
    .then( 
      user => (dispatch(receiveCurrentUser(user))),
      errors => (dispatch(receiveErrors(errors.responseJSON)))
    )
    .then(
      () => (dispatch(hideModal()))
    )
);

export const fetchCurrentUser = () => dispatch => (
  SessionUtil.fetchCurrentUser()
    .then(
      user => {
        if(user){
          dispatch(receiveCurrentUser(user))
        }
      }
    )
);

export const logout = () => dispatch => (
  SessionUtil.logout()
    .then(() => (dispatch(logoutCurrentUser())))
);