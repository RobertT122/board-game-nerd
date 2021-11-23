import React from "react";
import { connect } from "react-redux";


const Errors = ({errors}) => (
  <ul className="error-list">
    {
      errors.map(error => (
        <li className="error_item">
          {error}
        </li>
      ))
    }
  </ul>
)

const mapSTP = state => ({
  errors: state.errors
})

const ErrorsContainer = connect(mapSTP)(Errors)
export default ErrorsContainer;