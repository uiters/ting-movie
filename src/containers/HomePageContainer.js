import { connect } from 'react-redux';
import { HomePage } from '../pages';
import { fetchMoviesAsync } from '../actions/movies';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  isError: state.isError,
  movies: state.movies
});

const mapDispatchToProps = (dispatch, props) => ({
  onFetchMovies: () => dispatch(fetchMoviesAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
