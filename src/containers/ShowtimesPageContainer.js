import { connect } from 'react-redux';
import { ShowtimesPage } from '../pages';
import { fetchMoviesAsync } from '../actions';

const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  isError: state.movies.isError,
  movies: state.movies.movies,
  movieResults: state.movies.movieResults
});

const mapDispatchToProps = (dispatch, props) => ({
  onFetchMovies: keyword => dispatch(fetchMoviesAsync(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowtimesPage);
