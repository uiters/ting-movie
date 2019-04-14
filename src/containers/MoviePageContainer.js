import { connect } from 'react-redux';
import { MoviePage } from '../pages';
import {
  fetchMovieAsync,
  fetchCinemasAsync,
  fetchSessionsAsync,
  filterSessions
} from '../actions';

const mapStateToProps = state => ({
  isFetchingMovie: state.movie.isFetching,
  isFetchingCinemas: state.cinemas.isFetching,
  isFetchingSessions: state.sessions.isFetching,
  isErrorMovie: state.movie.isError,
  isErrorCinemas: state.cinemas.isError,
  isErrorSessions: state.sessions.isError,
  movie: state.movie.movie,
  cinemaTypes: state.cinemas.cinemaTypes,
  sessionResults: state.sessions.sessionResults
});

const mapDispatchToProps = (dispatch, props) => ({
  onFetchMovie: movieId => dispatch(fetchMovieAsync(movieId)),
  onFetchCinemas: () => dispatch(fetchCinemasAsync()),
  onFetchSessions: (movieId, cinemaId, date) =>
    dispatch(fetchSessionsAsync(movieId, cinemaId, date)),
  onFilterSessions: (cinemaId, date) => dispatch(filterSessions(cinemaId, date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
