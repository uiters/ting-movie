import store from '../store';
import * as types from '../constants';
import * as APIs from '../api';
import { receiveErrors } from './common';

export const fetchMovie = () => ({ type: types.FETCH_MOVIE });

export const receiveMovie = movie => ({
  type: types.RECEIVE_MOVIE,
  payload: movie
});

export const fetchMovieAsync = movieId => {
  store.dispatch(fetchMovie());
  return function(dispatch, getState) {
    APIs.getMovieDetail(movieId)
      .then(res => dispatch(receiveMovie(res.data.result)))
      .catch(err => dispatch(receiveErrors()));
  };
};
