import React from "react";
import { useHistory } from "react-router";
import SessionContainer from "./session_container";

const Header = props => {
  let history = useHistory()
  return (
  <>
  <div className="header">
    <div className="left-header">
      <button onClick={() => history.push('/')}>Home</button>
    </div>
    <div className="right-header">
    <SessionContainer />
    </div>
  </div>
  <div className="header-spacer"></div>
  </>
  )
}

export default Header