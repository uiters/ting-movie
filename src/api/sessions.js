import axios from 'axios';
import moment from 'moment';

export const fetchSessions = movieId => {
  const params = {
    param: {
      url: `/session/film?cinema_id=-1&film_id=${movieId}&start_date=${moment().format(
        'YYYY-MM-DD'
      )}&end_date=${moment()
        .add(7, 'days')
        .format('YYYY-MM-DD')}&location_id=1`,
      keyCache: 'no-cache'
    },
    method: 'GET'
  };
  return axios.post('/apitomapp', params, {
    headers: { 'content-type': 'application/json' }
  });
};
