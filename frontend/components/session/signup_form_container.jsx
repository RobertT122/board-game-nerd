import { connect } from "react-redux";
import { signup } from "../../util/session_util";
import SignUpForm from "./signup_form";

const mapDTP = dispatch => ({
  signup: user => dispatch(signup(user))
})


const SignUpFormContainer = connect(null, mapDTP)(SignUpForm)

export default SignUpFormContainer