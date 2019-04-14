import viee from 'viee';
import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  movies: [],
  movieResults: [] // current search movies.
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,
        isFetching: true,
        isError: false,
        movies: []
      };
    case types.RECEIVE_MOVIES:
      return {
        ...state,
        movies: [...action.payload],
        isFetching: false,
        isError: false
      };
    case types.MOVIES_ERRORS:
      return {
        ...state,
        isError: true,
        isFetching: false,
        movies: []
      };
    case types.SEARCH_MOVIES:
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

export default movies;
