import { connect } from 'react-redux';
import { ShowtimesPage } from '../pages';
import { fetchComingMoviesAsync, fetchMoviesAsync } from '../actions';

const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  isComingFetching: state.comingMovies.isFetching,
  isError: state.movies.isError,
  isComingError: state.comingMovies.isError,
  movies: state.movies.movies,
  comingMovies: state.comingMovies.movies,
  movieResults: state.movies.movieResults,
  comingMovieResults: state.comingMovies.movieResults
});

const mapDispatchToProps = (dispatch, props) => ({
  onFetchMovies: keyword => dispatch(fetchMoviesAsync(keyword)),
  onFetchComingMovies: keyword => dispatch(fetchComingMoviesAsync(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowtimesPage);
