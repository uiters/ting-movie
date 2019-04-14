import store from '../store';
import * as types from '../constants/actionTypes';
import * as APIs from '../api';

export const fetchMovie = () => ({ type: types.FETCH_MOVIE });

export const receiveMovie = movie => ({
  type: types.RECEIVE_MOVIE,
  payload: movie
});

export const receiveMovieErrors = () => ({ type: types.MOVIE_ERRORS });

export const fetchMovieAsync = movieId => {
  store.dispatch(fetchMovie());
  return function(dispatch, getState) {
    APIs.getMovieDetail(movieId)
      .then(res => dispatch(receiveMovie(res.data.result)))
      .catch(err => dispatch(receiveMovieErrors()));
  };
};
