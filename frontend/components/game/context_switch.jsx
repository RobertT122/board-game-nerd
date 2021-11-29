import React from "react";
import { useLocation, matchPath } from "react-router";
import Overview from "./overview";

const ContextSwitch = ({game}) =>{
  let location = useLocation()
  let match = matchPath(location.pathname, {
    path: "/game/:game_id/:game_name/:context"
  })

  if(!match){
    return <Overview description={game.description} />
  }

  switch (match.params.context){
    case 'reviews':
      return <p>reviews</p>
    default:
      return <Overview description={game.description} />
  }
}

export default ContextSwitch