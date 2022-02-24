import { connect } from 'react-redux';
import { showLoginModal } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import Session from './session';
import {withRouter} from 'react-router-dom'

const mapSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDTP = dispatch => ({
  logout: () => dispatch(logout()),
  showLogin: () => dispatch(showLoginModal())
});

const SessionContainer = withRouter(connect(mapSTP, mapDTP)(Session));

export default SessionContainer
