import store from '../store';
import * as types from '../constants/actionTypes';
import * as APIs from '../api';

export const fetchCinemas = () => ({ type: types.FETCH_CINEMAS });

export const receiveCinemas = cinemas => ({
  type: types.RECEIVE_CINEMAS,
  payload: cinemas
});

export const receiveCinemasErrors = () => ({ type: types.CINEMAS_ERRORS });

export const fetchCinemasAsync = () => {
  store.dispatch(fetchCinemas());
  return function(dispatch, getState) {
    APIs.fetchCinemas()
      .then(res => dispatch(receiveCinemas(res.data.result)))
      .catch(err => dispatch(receiveCinemasErrors()));
  };
};
