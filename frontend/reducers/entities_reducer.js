import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import gamesReducer from "./games_reducer";
import reviewsReducer from "./reviews_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  games: gamesReducer,
  reviews: reviewsReducer,
  search: searchReducer,
})

export default entitiesReducer;