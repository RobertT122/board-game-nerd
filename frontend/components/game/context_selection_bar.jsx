import React from "react";
import { NavLink } from "react-router-dom";

const ContextSelectionBar = ({id, name = ""}) => {
  let basePath = `/game/${id}/${name.toLowerCase().split(" ").join("-")}`
  return(
    <nav>
      <NavLink to={`${basePath}`} exact>Overview</NavLink>
      <NavLink to={`${basePath}/reviews`}>Reviews</NavLink>
    </nav>
  )
}

export default ContextSelectionBar