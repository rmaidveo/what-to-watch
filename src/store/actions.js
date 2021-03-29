import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_IS_READY: `app/setIsApplycationReady`,
  CHANGE_GENRE: `genre/changeGenre`,
  SHOW_MORE_FILMS: `app/showMoreFilms`,
  RESET_VISIBLE_FILMS: `app/resetVisibleFilms`,
  LOAD_FILMS_LIST: `data/loadFilmsList`,
  LOAD_FAVORITE_FILMS_LIST: `data/loadFavoriteFilmsList`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  AUTHORIZATION_ERROR: `user/authorizationError`,
  GET_USER_INFO: `user/getUserInfo`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  LOAD_FILM_BY_ID: `data/loadFilmById`,
  LOAD_COMMENTS: `data/loadComments`,
  POST_COMMENT: `data/postComment`,
  POST_FILM_IN_USER_LIST: `data/postFilmInUserList`,
  REVIEW_FORM_ERROR: `review/onReviewFormError`
};
export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});
export const showMoreFilms = createAction(ActionType.SHOW_MORE_FILMS);
export const resetVisibleFilms = createAction(ActionType.RESET_VISIBLE_FILMS);
export const loadFilmsList = createAction(ActionType.LOAD_FILMS_LIST, (films) => {
  return {
    payload: films,
  };
});

export const loadFavoriteFilmsList = createAction(ActionType.LOAD_FAVORITE_FILMS_LIST, (films) => {
  return {
    payload: films,
  };
});

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (promo) => {
  return {
    payload: promo,
  };
});
export const setIsApplycationReady = createAction(ActionType.SET_IS_READY, (ready) => {
  return {
    payload: ready,
  };
});
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});
export const getUserAuthInfo = createAction(ActionType.GET_USER_INFO, (userInfo) => {
  return {
    payload: userInfo,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export const loadFilmById = createAction(ActionType.LOAD_FILM_BY_ID, (film) => {
  return {
    payload: film,
  };
});
export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments,
  };
});
export const postComment = createAction(ActionType.POST_COMMENT, (comment) => {
  return {
    payload: comment,
  };
});

export const onReviewFormError = createAction(ActionType.REVIEW_FORM_ERROR, (error) => {
  return {
    payload: error,
  };
});
export const authorizationError = createAction(ActionType.AUTHORIZATION_ERROR, (error) => {
  return {
    payload: error,
  };
});

export const postFilmInUserList = createAction(ActionType.POST_FILM_IN_USER_LIST, (film) =>{
  return {
    payload: {
      id: film.id,
      isFavorite: film.is_favorite,
    }
  };
});

