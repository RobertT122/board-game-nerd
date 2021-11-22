import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

const mapDTP = dispatch => ({
  login: user => dispatch(login(user))
})

