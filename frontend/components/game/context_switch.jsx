import React from "react";
import { useLocation, matchPath } from "react-router";

const ContextSwitch = (props) =>{
  let location = useLocation()
  let match = matchPath(location.pathname, {
    path: "/game/:game_id/:game_name/:context"
  })

  if(!match){
    return <p>description</p>
  }

  switch (match.params.context){
    case 'reviews':
      return <p>reviews</p>
    default:
      return <p>description</p>
  }
}

export default ContextSwitch