import { SUCCEEDED, RESET_SUCCESS } from "../actions/ui_actions";

const successReducer = (state = false, action) => {
  switch(action.type){
    case RESET_SUCCESS: 
      return false
    case SUCCEEDED:
      return true
    default:
      return state;
  }
}
export default successReducer