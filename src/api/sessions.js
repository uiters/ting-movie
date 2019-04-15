import axios from 'axios';
import moment from 'moment';

export const fetchSessions = movieId => {
  const startDate = moment().format('YYYY-MM-DD');
  const endDate = moment()
    .add(7, 'days')
    .format('YYYY-MM-DD');
  return axios.get(
    `https://meomeocf98.000webhostapp.com/server/sessions.php?cinemaID=-1&filmID=${movieId}&startDate=${startDate}&endDate=${endDate}`
  );
};
