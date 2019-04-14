import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  cinemas: [],
  cinemaTypes: []
};

const cinemas = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CINEMAS:
      return {
        ...state,
        isFetching: true,
        isError: false,
        cinemas: [],
        cinemaTypes: []
      };
    case types.RECEIVE_CINEMAS:
      return {
        ...state,
        cinemas: [...action.payload],
        cinemaTypes: [
          ...action.payload
            .map(e => e['p_cinema_id'])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => action.payload[e])
            .map(e => action.payload[e])
            .map(e => ({
              id: e.p_cinema_id.toString(),
              name: e.p_cinema_name,
              logo: e.p_cinema_logo
            }))
        ],
        isFetching: false,
        isError: false
      };
    case types.CINEMAS_ERRORS:
      return {
        ...state,
        isError: true,
        isFetching: false,
        cinemas: [],
        cinemaTypes: []
      };
    default:
      return state;
  }
};

export default cinemas;
