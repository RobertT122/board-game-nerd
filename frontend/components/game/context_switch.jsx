import React from "react";
import { useLocation, matchPath } from "react-router";
import ReviewListContainer from "../reviews/reviewsList";
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
      return <ReviewListContainer game_id={game.id}/>
    default:
      return <Overview description={game.description} />
  }
}

export default ContextSwitch