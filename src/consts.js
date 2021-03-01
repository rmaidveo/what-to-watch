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
  USER_LIST: `/mylist`,
  PLAYER: `/player/:id?`,
  REVIEW: `/films/:id?/review`,
  FILM_PAGE: `/films/:id?`
};
const GENERE_ALL = `All genres`;

export {
  RATING_STARS,
  StarList,
  TabsTypes,
  RouteType,
  GENERE_ALL,
  GeneresCount,
  FILMS_COUNT
};
