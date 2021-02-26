import {GeneresCount, GENERE_ALL} from '../consts';

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

export const sortByGenre = (filmsList, genre) => {
  if (genre === GENERE_ALL) {
    return filmsList;
  }
  return filmsList.filter((film) => film.genre === genre);
};

export const getGenresType = (films) => {
  const genresList = films.map((film) => film.genre).sort();
  return [GENERE_ALL, ...new Set(genresList)].slice(GeneresCount.MIN, GeneresCount.MAX);
};
