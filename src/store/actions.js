export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  LOAD_FILMS_LIST: `data/loadFilmsList`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  GET_USER_INFO: `/getUserInfo`
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
  loadPromoFilm: (promo) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: promo
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  getUserInfo: (userInfo) => ({
    type: ActionType.GET_USER_INFO,
    payload: userInfo,
  }),
};
