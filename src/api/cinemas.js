import axios from 'axios';

export const fetchCinemas = () => {
  const params = {
    param: {
      url: '/cinema/list?location_id=1',
      keyCache: 'main-cinemas1'
    },
    method: 'GET'
  };
  return axios.post('/apitomapp', params, {
    headers: { 'content-type': 'application/json' }
  });
};
