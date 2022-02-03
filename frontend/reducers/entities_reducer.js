import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import gamesReducer from "./games_reducer";
import reviewsReducer from "./reviews_reducer";
import listsReducer from "./lists_reducer"
import categoriesReducer from "./categories_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  games: gamesReducer,
  reviews: reviewsReducer,
  lists: listsReducer,
  categories: categoriesReducer
})

export default entitiesReducer;