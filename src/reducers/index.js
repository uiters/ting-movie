import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';

export default combineReducers({ movies, movie });
