import { combineReducers } from 'redux';
import movies from './movies';
import comingMovies from './comingMovies';
import movie from './movie';
import cinemas from './cinemas';
import sessions from './sessions';

export default combineReducers({
  movies,
  comingMovies,
  movie,
  cinemas,
  sessions
});
