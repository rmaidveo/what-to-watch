import {ActionCreator} from "./actions";
import {AuthorizationStatus} from "../consts";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilmsList(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const loginOut = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(`/logout`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const getUserInfo = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.getUserInfo(data)))
);
export const getFilmOnId = () => (dispatch, _getState, api, id) => (
  api.get(`/films/:${id}`)
    .then(({data}) => dispatch(ActionCreator.loadFilmById(data)))
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
  .then(({data}) => dispatch(ActionCreator.loadFilmById(data)))
  .catch()
);

export const fetchCommentsOnFilmByID = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then(({data})=> dispatch(ActionCreator.loadComments(data)))
  .catch()
);

export const postCommentOnFilmByID = (id, rating, comment) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setReviewFormDisabled(true));
  api.post(`/comments/${id}`, {rating, comment})
  .then(() => {
    dispatch(ActionCreator.redirectToRoute(`/films/${id + 1}`));
    dispatch(ActionCreator.setReviewFormDisabled(false));
  })
  .catch((err) => {
    dispatch(ActionCreator.onReviewFormError(err));
    dispatch(ActionCreator.setReviewFormDisabled(false));
  });
};
