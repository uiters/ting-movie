import axios from 'axios';

export const fetchLocations = () => {
  return axios.get('https://meomeocf98.000webhostapp.com/server/locations.php');
};
