export const NEXT_MOVIE = 'NEXT_MOVIE';
export const ADD_MOVIE_TO_FAVS = 'ADD_MOVIE_TO_FAVS';
export const REMOVE_MOVIE_FROM_FAVS = 'REMOVE_MOVIE_FROM_FAVS';
export const ONCEKI_MOVIE = 'ONCEKI_MOVIE';

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const addMovieToFavs = () => {
  return { type: ADD_MOVIE_TO_FAVS };
};

export const removeMovieFromFavs = (id) => {
  return { type: REMOVE_MOVIE_FROM_FAVS, payload: id };
};

export const oncekiMovie = () => {
  return { type: ONCEKI_MOVIE };
};
