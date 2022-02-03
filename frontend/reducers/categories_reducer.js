import { RECIEVE_CATEGORIES } from "../actions/categories_actions";

const categoriesReducer = (state = {},  action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_CATEGORIES:
      console.log(action)
      return Object.assign({}, action.categories)
    default:
      return state;
  }
}

export default categoriesReducer;