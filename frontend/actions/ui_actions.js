
export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL"
export const HIDE_MODAL = "HIDE_LOGIN_MODAL"
export const SHOW_REVIEW_FORM = "SHOW_REVIEW_FORM"

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL,
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

export const showReviewForm = () => ({
  type: SHOW_REVIEW_FORM,
})