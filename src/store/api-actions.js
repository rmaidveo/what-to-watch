import {ActionCreator} from "./actions";
import {AuthorizationStatus, APIRoute} from "../consts";

export const fetchData = () => (dispatch, _getState, api) => (
  Promise.all([
    api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilmsList(data))),
    api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data))),
  ])
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.USER_LIST)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loadFavoriteFilmsList(data));
    })
    .catch()
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.getUserAuthInfo(data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.getUserAuthInfo(data));
      dispatch(ActionCreator.redirectToRoute(`/`));
      dispatch(ActionCreator.authorizationError(false));
    })
    .catch(() => {
      dispatch(ActionCreator.authorizationError(true));
      dispatch(ActionCreator.setReviewFormDisabled(false));
      dispatch(ActionCreator.redirectToRoute(APIRoute.LOGIN));
    })
);

export const loginOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOG_OUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const getUserInfo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.getUserAuthInfo(data)))
    .catch(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
  .then(({data}) => dispatch(ActionCreator.loadFilmById(data)))
  .catch()
);

export const fetchCommentsOnFilmByID = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
  .then(({data})=> dispatch(ActionCreator.loadComments(data)))
  .catch()
);

export const postCommentOnFilmByID = (id, rating, comment) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setReviewFormDisabled(true));
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
  .then(() => {
    dispatch(ActionCreator.redirectToRoute(`${APIRoute.FILMS}/${id + 1}`));
    dispatch(ActionCreator.setReviewFormDisabled(false));
  })
  .catch((err) => {
    dispatch(ActionCreator.onReviewFormError(err));
    dispatch(ActionCreator.setReviewFormDisabled(false));
  });
};
