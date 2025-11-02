import { movies } from '../../data';
import {
  NEXT_MOVIE,
  ADD_MOVIE_TO_FAVS,
  REMOVE_MOVIE_FROM_FAVS,
  ONCEKI_MOVIE,
} from '../actions/index.js';
const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };

    case ONCEKI_MOVIE:
      return { ...state, sira: state.sira - 1 };

    case ADD_MOVIE_TO_FAVS:
      const currentMovie = state.movies[state.sira];
      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        movies: state.movies.filter((movie) => movie.id != currentMovie.id),
        sira:
          state.movies.length - state.sira == 1
            ? state.sira == 0
              ? 0
              : state.sira - 1
            : state.sira,
      };

    case REMOVE_MOVIE_FROM_FAVS:
      const currentMovie2 = state.favMovies.find(
        (movie) => movie.id == action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id != action.payload
        ),
        movies: [...state.movies, currentMovie2],
      };

    default:
      return state;
  }
}
