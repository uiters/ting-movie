import { connect } from 'react-redux';
import { HomePage } from '../pages';
import { fetchMoviesAsync } from '../actions';

const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  isError: state.movies.isError,
  movies: state.movies.movies
});

const mapDispatchToProps = (dispatch, props) => ({
  onFetchMovies: () => dispatch(fetchMoviesAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
