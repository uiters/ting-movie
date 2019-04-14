import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  movie: {}
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE:
      return {
        ...state,
        isFetching: true,
        isError: false,
        movie: {}
      };
    case types.RECEIVE_MOVIE:
      return {
        ...state,
        movie: { ...action.payload },
        isFetching: false,
        isError: false
      };
    case types.MOVIE_ERRORS:
      return {
        ...state,
        isError: true,
        isFetching: false,
        movie: {}
      };
    default:
      return state;
  }
};

export default movie;
