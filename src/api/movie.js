import axios from 'axios';

export const getMovieDetail = movieId => {
  return axios.get(`https://meomeocf98.000webhostapp.com/server/movie.php?movieID=${movieId}`);
};
