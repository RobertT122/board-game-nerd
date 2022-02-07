import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

import { AuthRoute, ProtectRoute, GoHomeRoute } from "../util/route_util";

import { fetchCurrentUser } from "../actions/session_actions";
import { fetchCategories } from "../actions/categories_actions";

import SignUpFormContainer from "./session/signup_form_container";

import Header from "./header/header";
import ModalContainer from "./modal/modal";
import Footer from "./footer/footer";

import Splash from "./splash/splash";
import GamePage from "./game/game_page";

import CreateGame from "./game_form/create_game";
import EditGame from "./game_form/edit_game";




const App = (props) => {
  useEffect(()=>{
    props.fetchCurrentUser();
    props.fetchCategories();
  },[])
  
  const MainApp = () => (
    <div>
      <Header />
      <ModalContainer />
      <Switch>
        <ProtectRoute exact path="/game/new" component={CreateGame} />
        <ProtectRoute exact path="/game/edit/:game_id" component={EditGame}/>
        <Route path="/game/:game_id" component={GamePage} />
        <Route path="/splash" component={Splash} />
        <GoHomeRoute path="/" />
      </Switch>
      <Footer/>
    </div>
  )
  
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