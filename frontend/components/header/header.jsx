import React from "react";
import { useHistory } from "react-router";
import SessionContainer from "./session_container";
import SearchBar from "./seach_bar";

const Header = props => {
  let history = useHistory()
  return (
  <>
  <div className="header">
    <div className="left-header">
      <button onClick={() => history.push('/splash')}>Home</button>
    </div>
    <div className="right-header">
    { props.signin ? <></> : <SessionContainer />}
    <SearchBar />
    </div>
  </div>
  <div className="header-spacer"></div>
  </>
  )
}

export default Header