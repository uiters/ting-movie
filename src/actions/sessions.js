import store from '../store';
import * as types from '../constants/actionTypes';
import * as APIs from '../api';

export const fetchSessions = () => ({ type: types.FETCH_SESSIONS });

export const receiveSessions = sessions => ({
  type: types.RECEIVE_SESSIONS,
  payload: sessions
});

export const receiveSessionsErrors = () => ({ type: types.SESSIONS_ERRORS });

export const filterSessions = (cinemaId, date) => ({
  type: types.FILTER_SESSIONS,
  payload: {
    cinemaId,
    date
  }
});

export const fetchSessionsAsync = (movieId, cinemaId, date) => {
  store.dispatch(fetchSessions());
  return function(dispatch, getState) {
    APIs.fetchSessions(movieId)
      .then(res => {
        dispatch(receiveSessions(res.data.result));
        dispatch(filterSessions(cinemaId, date));
      })
      .catch(err => dispatch(receiveSessionsErrors()));
  };
};
