export const getRating = (rating) => {
  let result = ``;
  if (rating <= 3) {
    result = `Bad`;
  }
  if (rating > 3 && rating <= 5) {
    result = `Normal`;
  }
  if (rating > 5 && rating <= 8) {
    result = `Good`;
  }
  if (rating > 8 && rating < 10) {
    result = `Very Good`;
  }
  if (rating === 10) {
    result = `Awesome`;
  }
  return result;
};


export const getRunTime = (time) => {
  let h = Math.floor(time / 60);
  let min = time % 60;
  return min !== 0 ? `${h}h ${min}m` : `${h}h`;
};

export const getActiveFilmById = (films, filmId) => {
  films.find((item) => item.id === parseInt(filmId, 10));
};
