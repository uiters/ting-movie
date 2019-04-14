import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import cinemas from './cinemas';
import sessions from './sessions';

export default combineReducers({ movies, movie, cinemas, sessions });
