import axios from 'axios';

export const fetchSessions = () => {
  const params = {
    param: {
      url: '/session/film?cinema_id=-1&film_id=1886&start_date=2019-04-12&end_date=2019-04-19&location_id=1',
      keyCache: 'no-cache'
    },
    method: 'GET'
  };
  return axios.post('/apitomapp', params, {
    headers: { 'content-type': 'application/json' }
  });
};