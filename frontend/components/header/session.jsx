import React from 'react';

const redirectToSignup = () => {
  return null
}

const renderLoginModal = () => {
  return null
}

const renderUserOptions = () => {
  return null
}

cosnt 

const Session = ({ currentUser, logout, match }) => {
  const sessionButtons = () => (
    <div className="login-signup">
      <button onClick={renderLoginModal}>Login</button>
      <button onClick={redirectToSignup}>Sign up</button>
    </div>
  );

  const userDropDown = () => (
    <div className="user-drop-down">
      <button onClick={renderUserOptions}>{currentUser.username}</button>
      <button onClick={logout}>Log out</button>
    </div>
  );

  return currentUser ? userDropDown() : sessionButtons();
};

export default Session