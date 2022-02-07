
export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL"
export const HIDE_MODAL = "HIDE_LOGIN_MODAL"
export const SHOW_REVIEW_FORM = "SHOW_REVIEW_FORM"
export const RESET_SUCCESS = "RESET_SUCCESS"
export const SUCCEEDED = "SUCCEEDED"
export const SHOW_DELETE_FORM = "SHOW_DELETE_FORM"

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL,
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

export const showReviewForm = () => ({
  type: SHOW_REVIEW_FORM,
})

export const showDeleteForm = gameId => ({
  type: SHOW_DELETE_FORM,
  gameId
})

export const resetSuccess = () => ({
  type: RESET_SUCCESS
})

export const succeeded = () => ({
  type: SUCCEEDED
})