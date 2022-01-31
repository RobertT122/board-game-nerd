import { combineReducers } from "redux";
import quickSearchReducer from "./quick_search_reducer";
import topTenReducer from "./top_ten_reducer";
import userGamesReducer from "./user_games_reducer";

const listsReducer = combineReducers({
  quickSearch: quickSearchReducer,
  topTen: topTenReducer,
  userGames: userGamesReducer,
})

export default listsReducer