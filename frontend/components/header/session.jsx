import React from 'react';
import { useState } from 'react';


const Session = ({ currentUser, logout, history, showLogin}) => {

  const [hidden, setHidden] = useState(true);

  const redirectToSignup = () => {
    history.push("/signup")
  }
  
  const showUserOptions = () => {
    hidden? setHidden(false) : setHidden(true)
  }

  const sessionButtons = () => (
    <div className="header-buttons session-header-buttons">

      <button onClick={showLogin}>Login</button>

      <button onClick={() => redirectToSignup()}>Sign up</button>
    </div>
  );

  const userDropDown = () => (
    <div className="header-buttons">
      <button onClick={showUserOptions}>{currentUser.username}</button>
      <button onClick={logout} className={hidden? 'logout-hidden' : 'logout'}>Log out</button>
    </div>
  );

  return currentUser ? userDropDown() : sessionButtons();
};

export default Session