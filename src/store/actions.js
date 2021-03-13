export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  LOAD_FILMS_LIST: `data/loadFilmsList`,
  LOAD_FAVORITE_FILMS_LIST: `data/loadFavoriteFilmsList`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  AUTHORIZATION_ERROR: `user/authorizationError`,
  GET_USER_INFO: `/getUserInfo`,
  REDIRECT_TO_ROUTE: `game/redirectToRoute`,
  LOAD_FILM_BY_ID: `data/loadFilmById`,
  LOAD_COMMENTS: `data/loadComments`,
  POST_COMMENT: `data/postComment`,
  SET_REVIEW_FORM_DISABLED: `review/setReviewFormDisabled`,
  REVIEW_FORM_ERROR: `review/onReviewFormError`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadFilmsList: (films) => ({
    type: ActionType.LOAD_FILMS_LIST,
    payload: films
  }),
  loadFavoriteFilmsList: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS_LIST,
    payload: films
  }),
  loadPromoFilm: (promo) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: promo
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  getUserAuthInfo: (userInfo) => ({
    type: ActionType.GET_USER_INFO,
    payload: userInfo,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadFilmById: (film) => ({
    type: ActionType.LOAD_FILM_BY_ID,
    payload: film,
  }),
  loadComments: (comments)=>({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  postComment: (comment)=>({
    type: ActionType.POST_COMMENT,
    payload: comment
  }),
  setReviewFormDisabled: (disabled) => ({
    type: ActionType.SET_REVIEW_FORM_DISABLED,
    payload: disabled
  }),
  onReviewFormError: (error) => ({
    type: ActionType.REVIEW_FORM_ERROR,
    payload: error
  }),
  authorizationError: (error) => ({
    type: ActionType.AUTHORIZATION_ERROR,
    payload: error
  })
};
