import store from '../store';
import * as types from '../constants/actionTypes';
import * as APIs from '../api';

export const fetchMovies = () => ({ type: types.FETCH_MOVIES });

export const receiveMovies = movies => ({
  type: types.RECEIVE_MOVIES,
  payload: movies
});

export const receiveErrors = () => ({ type: types.RECEIVE_ERRORS });

export const fetchMoviesAsync = () => {
  store.dispatch(fetchMovies());
  return function(dispatch, getState) {
    APIs.fetchMovies()
      .then(res => dispatch(receiveMovies(res.data.result)))
      .catch(err => dispatch(receiveErrors()));
  }
};
