import axios from 'axios';

export const fetchLocations = () => {
  const params = {
    param: {
      url: '/cinema/location',
      keyCache: 'main-location'
    },
    method: 'GET'
  };
  return axios.post('/apitomapp', params, {
    headers: { 'content-type': 'application/json' }
  });
};
