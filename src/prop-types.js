import PropTypes from 'prop-types';

const filmPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

const promoPropTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

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

const appPropTypes = {
  promo: promoPropTypes,
  films: filmListPropTypes,
  reviews: reviewsListPropsTypes
};

const mainPagePropTypes = {
  films: filmListPropTypes,
  reviews: reviewsListPropsTypes,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const dataPropTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

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
const genresListPropTypes = {
  films: filmListPropTypes,
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
  activeFilm: PropTypes.object.isRequired,
  commentsOnActiveFilm: reviewsListPropsTypes,
  authorizationStatus: PropTypes.string.isRequired,
  activeFilmLoaded: PropTypes.bool.isRequired,
  onLoadFilmById: PropTypes.func.isRequired
};

const addReviewPagePropTypes = {
  onPostReview: PropTypes.func.isRequired,
  activeFilmLoaded: PropTypes.bool.isRequired,
  onLoadFilmById: PropTypes.func.isRequired,
};
const formReviewPropTypes = {
  onPostReview: PropTypes.func.isRequired,
  isReviewFormDisabled: PropTypes.bool.isRequired
};

export {
  appPropTypes,
  mainPagePropTypes,
  dataPropTypes,
  filmPropTypes,
  filmPreviewPropTypes,
  reviewPropTypes,
  videoPlayerPropTypes,
  genresListPropTypes,
  avatarPropTypes,
  filmPageOfFilmPropTypes,
  addReviewPagePropTypes,
  formReviewPropTypes
};
