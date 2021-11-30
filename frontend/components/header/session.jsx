import React from 'react';


const Session = ({ currentUser, logout, history, showLogin}) => {

  const redirectToSignup = () => {
    history.push("/signup")
  }
  
  const showUserOptions = () => {
    return null
  }

  const sessionButtons = () => (
    <div className="header-buttons">

      <button onClick={showLogin}>Login</button>

      <button onClick={() => redirectToSignup()}>Sign up</button>
    </div>
  );

  const userDropDown = () => (
    <div className="header-buttons">
      <button onClick={showUserOptions}>{currentUser.username}</button>
      <button onClick={logout}>Log out</button>
    </div>
  );

  return currentUser ? userDropDown() : sessionButtons();
};

export default Session