import axios from 'axios';

export const fetchMovies = () => {
  return axios.get('https://meomeocf98.000webhostapp.com/server/movies.php');
};
