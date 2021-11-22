import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginModal from "./login_modal";


const mapDTP = dispatch => ({
  login: user => dispatch(login(user))
})

const LoginModalContainer = connect(null, mapDTP)(LoginModal)

export default LoginModalContainer