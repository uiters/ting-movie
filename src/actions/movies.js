import axios from 'axios';
import store from '../store';
import * as types from '../constants/actionTypes';

export const fetchMovies = () => ({ type: types.FETCH_MOVIES });

export const receiveMovies = movies => ({
  type: types.RECEIVE_MOVIES,
  movies
});

export const receiveErrors = () => ({ type: types.RECEIVE_ERRORS });

export const fetchMoviesAsync = () => {
  store.dispatch(fetchMovies);
  return function(dispatch, getState) {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => dispatch(receiveMovies(res.data)))
      .catch(err => dispatch(receiveErrors));
  }
};
