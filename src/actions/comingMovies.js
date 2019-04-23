import store from '../store';
import * as types from '../constants/actionTypes';
import * as APIs from '../api';

export const fetchComingMovies = () => ({ type: types.FETCH_COMING_MOVIES });

export const receiveComingMovies = movies => ({
  type: types.RECEIVE_COMING_MOVIES,
  payload: movies
});

export const searchComingMovies = keyword => ({
  type: types.SEARCH_COMING_MOVIES,
  payload: keyword
});

export const receiveComingMoviesErrors = () => ({ type: types.COMING_MOVIES_ERRORS });

export const fetchComingMoviesAsync = (keyword = '') => {
  store.dispatch(fetchComingMovies());
  return function(dispatch, getState) {
    APIs.fetchComingMovies()
      .then(res => {
        dispatch(receiveComingMovies(res.data.result));
        dispatch(searchComingMovies(keyword.trim()));
      })
      .catch(err => dispatch(receiveComingMoviesErrors()));
  };
};
