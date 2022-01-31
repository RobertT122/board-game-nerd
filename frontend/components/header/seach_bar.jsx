import React, { useEffect } from "react";
import { useState } from "react";
import { quickSearchGames } from "../../actions/game_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//create the actions and reducers for the search bar
//setup a timeout for updating the search bar results
//press a key send a result, start timeout, if key is pressed while in timeout queue another fetch for results, ect....
//store the currently typed results in the state
//store the timeouts current cycle in the state

const requestSearch = () =>{
  //sends the search to be dispatched if conditions are met
  //creates a timeout in the store to prevent searched from being called after every keystroke
}

const SearchBar = (props) => {
  let [state, setState] = useState('')
  let [hidden, setHidden] = useState(true)
  useEffect(()=> {
    if (state){
      props.quickSearchGames(state)
    }
  }, [state])
  const updateSearchBar = e => {
    setState(
      e.currentTarget.value
    )
  }
  return(
    <div>
      <form className="search-bar-input">
        <input type="text" onChange={updateSearchBar} onClick={()=> setHidden(false)} placeholder="Search"/>
      </form>
      {!hidden?(
        <div className="search-background" onClick={e=> setHidden(true)}>
        <ul className="search-bar-results" >
        {props.searchResults.length > 0?(
          props.searchResults.map(ele => <li key={ele.id}>
            <Link 
              to ={`/game/${ele.id}/${ele.name.toLowerCase().split(" ").join("-")}`}
              onClick={e=>setHidden(true)}
            >
              {ele.name}
            </Link>
          </li>)
        ): <li className="no-results">no results</li>}
      </ul></div>): <></>}
    </div>
  )
}




const mapSearchResults = (games, search) => {
  return search.map(id => ({id: id, name: games[id].name}))
}

const mapSTP = ({entities:{games, lists:{quickSearch: search}}}) => {
  return {
    searchResults: mapSearchResults(games, search)
  };
};

const mapDTP = dispatch => ({
  quickSearchGames: partial => dispatch(quickSearchGames({partial_name: partial}))
});

const SearchBarContainer = connect(mapSTP, mapDTP)(SearchBar);
export default SearchBarContainer