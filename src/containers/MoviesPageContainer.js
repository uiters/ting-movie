import { connect } from 'react-redux';
import { MoviesPage } from '../pages';
import { fetchMoviesAsync } from '../actions/movies';

const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  isError: state.movies.isError,
  movies: [
    ...state.movies.movies,
    ...state.movies.movies,
    ...state.movies.movies,
    ...state.movies.movies,
    ...state.movies.movies,
    ...state.movies.movies
  ]
});

const mapDispatchToProps = (dispatch, props) => ({
  onFetchMovies: () => dispatch(fetchMoviesAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
