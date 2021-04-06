import PropTypes from 'prop-types';

const filmPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}).isRequired;

const reviewPropTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

const filmListPropTypes = PropTypes.arrayOf(
    PropTypes.shape(filmPropTypes).isRequired
);

const reviewsListPropsTypes = PropTypes.arrayOf(
    PropTypes.shape(reviewPropTypes).isRequired
);
const filmReviewsPropTypes = {
  film: filmPropTypes,
  reviews: reviewsListPropsTypes,
  getReviews: PropTypes.func.isRequired,
};
const appPropTypes = {
  onLoadData: PropTypes.func.isRequired,
};

const mainPagePropTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};
const filmPreviewPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
const videoPlayerPropTypes = {
  isPlaying: PropTypes.bool.isRequired,
  preview: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
const playerPagePropTypes = {
  onExitButtonClick: PropTypes.func.isRequired,
  onLoadFilmById: PropTypes.func.isRequired
};
const genresListPropTypes = {
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};
const avatarPropTypes = {
  userInfo: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

const filmPageOfFilmPropTypes = {
  films: filmListPropTypes,
  commentsOnActiveFilm: reviewsListPropsTypes,
  onLoadFilmById: PropTypes.func.isRequired
};

const addReviewPagePropTypes = {
  onLoadFilmById: PropTypes.func.isRequired,
  onPostReview: PropTypes.func.isRequired,
};
const formReviewPropTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onPostReview: PropTypes.func.isRequired,
};
const myListPropTypes = {
  favoriteFilmsList: filmListPropTypes,
  onLoadFavoriteData: PropTypes.func.isRequired
};
const addInListpropTypes = {
  id: PropTypes.number.isRequired,
  onAddUserListСlick: PropTypes.func.isRequired
};
const catalogPropTypes = {
  films: filmListPropTypes,
  visibleFilms: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const autorizedPropTypes = {
  onSignInClick: PropTypes.func.isRequired
};
const headerPropTypes = {
  authorizationStatus: PropTypes.string.isRequired
};
const signInErrorMessagePropTypes = {
  isLoginError: PropTypes.bool.isRequired,
  isValidEmail: PropTypes.bool.isRequired
};

const signInPagePropTypes = {
  onSubmit: PropTypes.func.isRequired,
  setUserInfo: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};
export {
  appPropTypes,
  filmListPropTypes,
  mainPagePropTypes,
  filmPropTypes,
  filmPreviewPropTypes,
  reviewPropTypes,
  videoPlayerPropTypes,
  genresListPropTypes,
  avatarPropTypes,
  filmPageOfFilmPropTypes,
  addReviewPagePropTypes,
  formReviewPropTypes,
  filmReviewsPropTypes,
  myListPropTypes,
  playerPagePropTypes,
  addInListpropTypes,
  catalogPropTypes,
  autorizedPropTypes,
  headerPropTypes,
  signInErrorMessagePropTypes,
  signInPagePropTypes
};
