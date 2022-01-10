import React from "react";
import { useState } from "react";
import { quickSearchGames } from "../../actions/game_actions";

//create the actions and reducers for the search bar
//setup a timeout for updating the search bar results
//press a key send a result, start timeout, if key is pressed while in timeout queue another fetch for results, ect....
//store the currently typed results in the state
//store the timeouts current cycle in the state

const updateSearchBar = () =>{
  //updates the state so which stores the search
  //calls requestSearch
}

const requestSearch = () =>{
  //sends the search to be dispatched if conditions are met
  //creates a timeout in the store to prevent searched from being called after every keystroke
}

const SearchBar = (props) => {

  return(
    <form>
      <input type="text" onChange={updateSearchBar}/>
    </form>
  )
}




const mapSearchResults = (games, search) => {
  search.map(id => ({id: id, name: games[id]}))
}

const mapSTP = ({entities:{games, search}}) => {
  return {
    searchResults: mapSearchResults(games, search)
  };
};

const mapDTP = dispatch => ({
  quickSearchGames: partial => dispatch(quickSearchGames({partial_name: partial}))
});

const SearchBarContainer = withRouter(connect(mapSTP, mapDTP)(SearchBar));
export default SearchBarContainer