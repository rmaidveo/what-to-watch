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
  starring: PropTypes.array.isRequired,
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

const appPropTypes = {

  onLoadData: PropTypes.func.isRequired,
};

const mainPagePropTypes = {
  promo: filmPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
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

export {
  appPropTypes,
  filmListPropTypes,
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
  formReviewPropTypes,
  myListPropTypes
};
