import axios from 'axios';

export const fetchMovies = () => {
  const params = {
    param: {
      url: '/film/list?status=2',
      keyCache: 'showing-film'
    },
    method: 'GET'
  };
  return axios.post('/apitomapp', params, {headers: {'content-type': 'application/json'}});
}