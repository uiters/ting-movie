import axios from 'axios';

export const fetchComingMovies = () => {
  return axios.get('https://meomeocf98.000webhostapp.com/server/movies-coming.php');
};
