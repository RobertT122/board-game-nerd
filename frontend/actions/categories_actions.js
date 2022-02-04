const retrieveCategories = () => (
  $.ajax({
    method: "GET",
    url: 'api/categories'
  })
)

export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
export const CATEGORIES_LOADING = 'CATEGORIES_LOADING';

const recieveCategories = categories => ({
  type: RECIEVE_CATEGORIES,
  categories
})

const categoriesLoading =() =>({
  type: CATEGORIES_LOADING,
})

export const fetchCategories = () => dispatch => {
  dispatch(categoriesLoading())
  return retrieveCategories()
    .then(res => dispatch(recieveCategories(res)))
}

