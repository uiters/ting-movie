import store from '../store';
import * as types from '../constants/actionTypes';
import * as APIs from '../api';

export const fetchMovies = () => ({ type: types.FETCH_MOVIES });

export const receiveMovies = movies => ({
  type: types.RECEIVE_MOVIES,
  payload: movies
});

export const searchMovies = keyword => ({
  type: types.SEARCH_MOVIES,
  payload: keyword
});

export const receiveMoviesErrors = () => ({ type: types.MOVIES_ERRORS });

export const fetchMoviesAsync = (keyword = '') => {
  store.dispatch(fetchMovies());
  return function(dispatch, getState) {
    APIs.fetchMovies()
      .then(res => {
        dispatch(receiveMovies(res.data.result));
        dispatch(searchMovies(keyword.trim()));
      })
      .catch(err => dispatch(receiveMoviesErrors()));
  };
};
