import viee from 'viee';
import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  movies: [],
  movieResults: [] // current search movies.
};

const comingMovies = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMING_MOVIES:
      return {
        ...state,
        isFetching: true,
        isError: false,
        movies: []
      };
    case types.RECEIVE_COMING_MOVIES:
      return {
        ...state,
        movies: [...action.payload],
        isFetching: false,
        isError: false
      };
    case types.COMING_MOVIES_ERRORS:
      return {
        ...state,
        isError: true,
        isFetching: false,
        movies: []
      };
    case types.SEARCH_COMING_MOVIES:
      const keyword = action.payload;
      return {
        ...state,
        movieResults: [
          ...state.movies.filter(
            movie =>
              viee(movie.film_name_vn)
                .toLowerCase()
                .indexOf(viee(keyword).toLowerCase()) !== -1
          )
        ]
      };
    default:
      return state;
  }
};

export default comingMovies;
