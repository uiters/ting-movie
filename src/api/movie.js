import axios from 'axios';

export const getMovieDetail = movieId => {
  const params = {
    param: {
      url: `/film/detail?film_id=${movieId}`,
      keyCache: `movie-detail${movieId}`
    },
    method: 'GET'
  };
  return axios.post('/apitomapp', params, {
    headers: { 'content-type': 'application/json' }
  });
};
