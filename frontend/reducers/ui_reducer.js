import { combineReducers } from "redux";
import loadingReducer from "./loading_reducer";
import modalReducer from "./modal_reducer";
import successReducer from "./success_reducer";

const uiReducer = combineReducers({
  modal: modalReducer,
  loading: loadingReducer,
  success: successReducer,
})

export default uiReducer;