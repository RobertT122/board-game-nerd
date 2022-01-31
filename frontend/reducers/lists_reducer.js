import { combineReducers } from "redux";
import quickSearchReducer from "./quick_search_reducer";
import topTenReducer from "./top_ten_reducer";

const listsReducer = combineReducers({
  quickSearch: quickSearchReducer,
  topTen: topTenReducer,
})

export default listsReducer