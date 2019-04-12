import axios from 'axios';

export const fetchMovies = () => {
  const params = {
    param: {
      url: '/film/list?status=2',
      keyCache: 'showing-film'
    },
    method: 'GET'
  };
  return axios.post('/apitomapp', params, {
    headers: { 'content-type': 'application/json' }
  });
};

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
