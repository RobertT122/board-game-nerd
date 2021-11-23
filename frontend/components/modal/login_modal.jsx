import React, {Component} from "react";

class LoginModal extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.login(this.state)
  }

  handleChange(input){
    return e => this.setState({
      [input]: e.currentTarget.value
    })
  }

  render(){
    
    return(
      <>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="form-input">
            <label htmlFor="username">username</label>
            <input
              id="username"
              type="text" 
              value ={this.state.username}
              onChange={this.handleChange("username")}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">password</label>
            <input
              id="password"
              type="password" 
              onChange={this.handleChange("password")}
            />
          </div>

          <button type="submit" className="submit-button">Log In</button>
        </form>
      </>
    )
  }
}

export default LoginModal