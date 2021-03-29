import {loadFilmsList, loadPromoFilm, requireAuthorization, loadFavoriteFilmsList, getUserAuthInfo, redirectToRoute, authorizationError, loadFilmById, loadComments, postFilmInUserList, setIsApplycationReady} from "./actions";
import {AuthorizationStatus, APIRoute} from "../consts";

export const fetchData = () => (dispatch, _getState, api) => (
  Promise.all([
    api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(data))),
    api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilmsList(data)))
    .then(() => dispatch(setIsApplycationReady(true))),
  ])
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.USER_LIST)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadFavoriteFilmsList(data));
    })
    .catch()
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(getUserAuthInfo(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(getUserAuthInfo(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(APIRoute.INDEX));
      dispatch(authorizationError(false));
    })
    .catch(() => {
      dispatch(authorizationError(true));
      dispatch(redirectToRoute(APIRoute.LOGIN));
    })
);

export const loginOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOG_OUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const getUserInfo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(getUserAuthInfo(data)))
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
  .then(({data}) => dispatch(loadFilmById(data)))
  .catch()
);

export const fetchCommentsOnFilmByID = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
  .then(({data})=> dispatch(loadComments(data)))
  .catch()
);

export const addFilmInUserList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.USER_LIST}/${id}/${Number(!status)}`)
  .then(({data}) => dispatch(postFilmInUserList(data)))
  .catch()
);

export const postCommentOnFilmByID = (id, rating, comment) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
  .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`)))
  .catch();
};
