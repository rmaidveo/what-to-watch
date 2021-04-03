import {
  loadFilmsList,
  changeGenre,
  loadFavoriteFilmsList,
  showMoreFilms,
  loadPromoFilm,
  setIsApplycationReady,
  loadComments,
  resetVisibleFilms,
  requireAuthorization,
  getUserAuthInfo,
  redirectToRoute,
  loadFilmById,
  postComment,
  authorizationError,
  postFilmInUserList,
  ActionType,
} from './actions';

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    const status = false;
    const expectedAction = {
      type: ActionType.SET_IS_READY,
      payload: status
    };

    expect(setIsApplycationReady(status)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const status = `AUTH`;
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });
  it(`Action creator for redirectToRoute returns correct action`, () => {
    const route = `/`;
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: route
    };
    expect(redirectToRoute(route)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const films = [{"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}];
    const expectedAction = {
      type: ActionType.LOAD_FILMS_LIST,
      payload: films,
    };

    expect(loadFilmsList(films)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const genre = `All genres`;
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };

    expect(changeGenre(genre)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const films = [{"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS_LIST,
      payload: films,
    };

    expect(loadFavoriteFilmsList(films)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const comments = [{"id": 1, "user": {"id": 10, "name": `Max`}, "rating": 3.9, "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`, "date": `2021-02-18T08:04:28.658Z`}, {"id": 1, "user": {"id": 10, "name": `Max`}, "rating": 3.9, "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`, "date": `2021-02-18T08:04:28.658Z`}];
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const film = {"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`};
    const expectedAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    };

    expect(loadPromoFilm(film)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const film = {"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`};
    const expectedAction = {
      type: ActionType.LOAD_FILM_BY_ID,
      payload: film,
    };

    expect(loadFilmById(film)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const comment = {rating: 8, comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`};
    const expectedAction = {
      type: ActionType.POST_COMMENT,
      payload: comment
    };

    expect(postComment(comment)).toEqual(expectedAction);
  });

  it(`Action creator for incrementing step returns correct action`, () => {
    const status = false;
    const expectedAction = {
      type: ActionType.AUTHORIZATION_ERROR,
      payload: status
    };

    expect(authorizationError(status)).toEqual(expectedAction);
  });

  it(`Action creator for incrementing step returns correct action`, () => {
    const film = {"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`};
    const expectedAction = {
      type: ActionType.POST_FILM_IN_USER_LIST,
      payload: {
        id: film.id,
        isFavorite: film.is_favorite
      }
    };

    expect(postFilmInUserList(film)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const userInfo = null;
    const expectedAction = {
      type: ActionType.GET_USER_INFO,
      payload: userInfo
    };

    expect(getUserAuthInfo(userInfo)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const filmCount = 8;
    const expectedAction = {
      type: ActionType.SHOW_MORE_FILMS,
      payload: filmCount
    };

    expect(showMoreFilms(filmCount)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const filmCount = 8;
    const expectedAction = {
      type: ActionType.RESET_VISIBLE_FILMS,
      payload: filmCount
    };

    expect(resetVisibleFilms(filmCount)).toEqual(expectedAction);
  });

});
