export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_FILMS_LIST: `films/getFilmsList`,
};
export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsList: () => ({
    type: ActionType.GET_FILMS_LIST
  })
};
