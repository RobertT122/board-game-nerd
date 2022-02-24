import React, {Component} from "react";
import ErrorsContainer from "../errors/errors";
import Header from "../header/header";

class SignUpForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    const {signup} = this.props
    e.preventDefault()
    signup(this.state)

  }

  handleChange(input){
    return e => this.setState({
      [input]: e.currentTarget.value
    })
  }

  render(){
    
    return(
      <>
      <Header signin={true}/>
      <div className="form-container">
        <h2 className="form-title">Sign up</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">username</label>
            <input
              className="text-input"
              id="username"
              type="text" 
              value ={this.state.username}
              onChange={this.handleChange("username")}
              />
            <label htmlFor="email">email</label>
            <input
              className="text-input"
              id="email"
              type="email"
              onChange={this.handleChange("email")}
              />
            <label htmlFor="password">password</label>
            <input
              className="text-input"
              id="password"
              type="password"
              onChange={this.handleChange("password")}
              />
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        <ErrorsContainer />

      </div>
      </>
    )
  }
}

export default SignUpForm