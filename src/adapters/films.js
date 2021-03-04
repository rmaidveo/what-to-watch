export const adapterFilm = (film) => {
  return {
    id: film.id,
    name: film.name,
    imageSrc: film.preview_image,
    previewImageSrc: film.poster_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    description: film.description,
    rating: film.rating,
    scoresCount: film.scores_count,
    director: film.director,
    starring: film.starring,
    runTime: film.run_time,
    genre: film.genre,
    released: film.released,
    isFavorite: film.is_favorite,
  };
};

export const adapterFilms = (films) => {
  return films.map((film) => adapterFilm(film));
};
