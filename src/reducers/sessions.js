import moment from 'moment';
import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  sessions: [],
  sessionResults: {}
};

const sessions = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SESSIONS:
      return {
        ...state,
        isFetching: true,
        isError: false,
        sessions: []
      };
    case types.RECEIVE_SESSIONS:
      return {
        ...state,
        sessions: [...action.payload],
        isFetching: false,
        isError: false
      };
    case types.SESSIONS_ERRORS:
      return {
        ...state,
        isError: true,
        isFetching: false,
        sessions: []
      };
    case types.FILTER_SESSIONS: {
      const { cinemaId, date } = action.payload;
      const formatDate = moment(date).format('YYYYMMDD');
      const sessions = [
        ...state.sessions.filter(session => {
          for (let key in session) {
            if (session[key].p_cinema_id === cinemaId) {
              return true;
            }
          }
          return false;
        })
      ];
      const result =
        sessions.length > 0 ? sessions[0][`${cinemaId}_${formatDate}`] : {};

      return {
        ...state,
        sessionResults: result
      };
    }
    default:
      return state;
  }
};

export default sessions;
