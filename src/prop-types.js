import PropTypes from 'prop-types';

const appPropTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

const dataPropTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

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
const filmPreviewPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
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
const videoPlayerPropTypes = {
  isPlaying: PropTypes.bool.isRequired,
  preview: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
const genresListPropTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes).isRequired
  ),
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export {
  appPropTypes,
  dataPropTypes,
  filmPropTypes,
  filmPreviewPropTypes,
  reviewPropTypes,
  videoPlayerPropTypes,
  genresListPropTypes
};
