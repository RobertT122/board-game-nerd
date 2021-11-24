import React from "react";
import GamePage from "../game_page/game_page";
import LoginModal from "../modal/login_modal";
import SessionContainer from "./session_container";

const Header = props => (
  <>
  <div className="header">
    <SessionContainer />
  </div>
  <div className="header-spacer"></div>
  </>
)

export default Header