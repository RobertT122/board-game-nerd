const retrieveCategories = () => (
  $.ajax({
    method: "GET",
    url: 'api/categories'
  })
)

export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';

const recieveCategories = categories => ({
  type: RECIEVE_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => (
  retrieveCategories().then(res => dispatch(recieveCategories(res)))
)

