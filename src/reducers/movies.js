import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  movies: []
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
    case types.RECEIVE_ERRORS:
      return {
        ...state,
        isError: true,
        isFetching: false,
        movies: []
      };
    default:
      return state;
  }
};

export default movies;
