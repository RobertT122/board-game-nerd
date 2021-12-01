import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import Root from "./components/root"
import * as ReviewActions from "./actions/review_actions";
import { fetchCurrentUser } from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.getState = store.getState();
  window.createReview = review => store.dispatch(ReviewActions.createReview(review))
  window.updateReview = review => store.dispatch(ReviewActions.updateReview(review))
  window.deleteReview = review_id => store.dispatch(ReviewActions.deleteReview(review_id))
  window.preloadUser = () => store.dispatch(fetchCurrentUser())

  ReactDOM.render(< Root store={store} />, root)
})