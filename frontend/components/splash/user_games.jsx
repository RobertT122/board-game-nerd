import React from "react";
import { connect } from "react-redux";

const UserGames = props => {

  return (
    <h1>user games</h1>
  );
}

const mapSTP = state =>({

});
const mapDTP = dispatch =>({

});

const UserGamesContainer = connect(mapSTP, mapDTP)(UserGames);

export default UserGamesContainer;