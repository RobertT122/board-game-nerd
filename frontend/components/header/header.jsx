import React from "react";
import GamePage from "../game/game_page";
import LoginModal from "../modal/login_modal";
import SessionContainer from "./session_container";

const Header = props => (
  <>
  <div className="header">
    <div className="left-header">

    </div>
    <div className="right-header">
    <SessionContainer />
    </div>
  </div>
  <div className="header-spacer"></div>
  </>
)

export default Header