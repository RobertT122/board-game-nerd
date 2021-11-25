import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute } from "../util/route_util";


import SignUpFormContainer from "./session/signup_form_container";
import Header from "./header/header";
import ModalContainer from "./modal/modal";
import Splash from "./splash/splash";
import GamePage from "./game/game_page";

const MainApp = () => (
  <div>
    <Header />
    <ModalContainer />
    <Switch>
      <Route path="/game/:game_id" component={GamePage} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
)


const App = (props) => (
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route component={MainApp} />
    </Switch>
  </div>

)

export default App;