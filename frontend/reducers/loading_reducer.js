import * as GameActions from '../actions/game_actions'
import * as ReviewActions from '../actions/review_actions'
import * as CategoriesActions from '../actions/categories_actions'

const loadingReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case GameActions.RECIEVE_GAME:
      return Object.assign({}, state, {gameLoading: false})
    case GameActions.LOADING_GAME:
      return Object.assign({}, state, {gameLoading: true})

    case GameActions.RECIEVE_USER_GAMES:
      return Object.assign({}, state, {userGamesLoading: false})
    case GameActions.LOADING_USER_GAMES:
      return Object.assign({}, state, {userGamesLoading: true})

    case CategoriesActions.CATEGORIES_LOADING:
      return Object.assign({}, state, {categoriesLoading: true})
    case CategoriesActions.RECIEVE_CATEGORIES:
      return Object.assign({}, state, {categoriesLoading: false})
      
    case GameActions.RECIEVE_TOP_TEN:
    case GameActions.RECIEVE_QUICK_SEARCH:
    case GameActions.RECIEVE_ALL_GAMES:
      return Object.assign({}, state, {allGamesLoading: false})
    case GameActions.LOADING_ALL_GAMES:
      return Object.assign({}, state, {allGamesLoading: true})

    case ReviewActions.RECIVE_GAME_REVIEWS:
      return Object.assign({}, state, {reviewsLoading: false})
    case ReviewActions.LOADING_REVIEWS:
      return Object.assign({}, state, {reviewsLoading: true})
      
    default:
      return state;
  }
}

export default loadingReducer