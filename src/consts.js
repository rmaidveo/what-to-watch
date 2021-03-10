const StarList = {
  MIN: 0,
  MAX: 3
};
const GeneresCount = {
  MIN: 0,
  MAX: 9,
};
const RATING_STARS = 10;
const FILMS_COUNT = 8;
const TabsTypes = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};
const RouteType = {
  INDEX: `/`,
  LOGIN: `/login`,
  LOG_OUT: `/logout`,
  USER_LIST: `/mylist`,
  PLAYER: `/player/:id?`,
  REVIEW: `/films/:id?/review`,
  FILM_PAGE: `/films/:id?`
};
const GENERE_ALL = `All genres`;
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};
const TextArea = {
  MIN: 40,
  MAX: 400
};

export {
  RATING_STARS,
  StarList,
  TabsTypes,
  RouteType,
  GENERE_ALL,
  GeneresCount,
  FILMS_COUNT,
  AuthorizationStatus,
  TextArea
};
