import axios from 'axios';

export const fetchCinemas = () => {
  return axios.get('https://meomeocf98.000webhostapp.com/server/cinemas.php');
};
