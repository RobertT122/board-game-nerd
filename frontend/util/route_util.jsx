import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter} from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => (
      !loggedIn ? ( <Component {...props} /> ) : ( <Redirect to="/" /> )
  )} />
);

const Protect = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => (
      loggedIn ? ( <Component {...props} /> ) : ( <Redirect to="/" /> )
  )} />
);

const mapSTP = state => (
  {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mapSTP)(Auth));
export const ProtectRoute = withRouter(connect(mapSTP)(Protect));
