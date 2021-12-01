import React, {Component} from "react";
import ErrorsContainer from "../errors/errors";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";

class LoginModal extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoUser = this.demoUser.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.login(this.state)
  }

  demoUser(e){
    e.preventDefault()
    this.props.login({username: 'DemoBuddy', password: 'password'})
  }

  handleChange(input){
    return e => this.setState({
      [input]: e.currentTarget.value
    })
  }

  render(){
    
    return(
      <>
        <h2 className="form-title">Sign In</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="form-input">
            <input
              className="text-input"
              placeholder="username"
              id="username"
              type="text" 
              value ={this.state.username}
              onChange={this.handleChange("username")}
            />
          </div>
          <div className="form-input">
            <input
              placeholder="password"
              className="text-input"
              id="password"
              type="password" 
              onChange={this.handleChange("password")}
            />
          </div>

          <button type="submit" className="submit-button">Log In</button>
        </form>
        <button className="link" onClick={this.demoUser}>Demo User</button>
        <Link to="/signup" className="link">sign up</Link>
        <ErrorsContainer/>
      </>
    )
  }
}

const mapDTP = dispatch => ({
  login: user => dispatch(login(user)),
})

const LoginModalContainer = connect(null, mapDTP)(LoginModal)

export default LoginModalContainer