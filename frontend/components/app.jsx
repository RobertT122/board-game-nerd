import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectRoute } from "../util/route_util";


import SignUpFormContainer from "./session/signup_form_container";
import Header from "./header/header";
import ModalContainer from "./modal/modal";
import Splash from "./splash/splash";
import GamePage from "./game/game_page";
import { fetchCurrentUser } from "../actions/session_actions";
import { connect } from "react-redux";
import CreateGame from "./game_form/create_game";
import { fetchCategories } from "../actions/categories_actions";

const MainApp = () => (
  <div>
    <Header />
    <ModalContainer />
    <Switch>
      <ProtectRoute exact path="/game/new" component={CreateGame} />
      <Route path="/game/:game_id" component={GamePage} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
)


const App = (props) => {
  useEffect(()=>{
    props.fetchCurrentUser();
    props.fetchCategories();
  },[])

  return(
    <div>
      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route component={MainApp} />
      </Switch>
    </div>
  )

}

const mapDTP = dispatch =>({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()), 
  fetchCategories: () => dispatch(fetchCategories())
})

const AppContainer = connect(null, mapDTP)(App)

export default AppContainer;