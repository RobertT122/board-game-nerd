import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import Root from "./components/root"
import { retrieveAllGames, retrieveGame } from "./actions/game_actions";

// import {login, logout, signup} from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // window.login = user => store.dispatch(login(user));
  // window.signup = user => store.dispatch(signup(user));
  // window.logout = () => store.dispatch(logout());
  window.state = store.getState();



  ReactDOM.render(< Root store={store} />, root)
})