import React, {Component} from "react";

class Login extends Component{
  constructor(props){
    super(props)

    state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.signup(this.state)
  }

  handleChange(input){
    return e => this.setState({
      [input]: e.currentTarget.value
    })
  }

  render(){
    
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text" 
          value ={this.state.username}
          onChange={this.handleChange("username")}
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password" 
          onChange={this.handleChange("password")}
        />
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}