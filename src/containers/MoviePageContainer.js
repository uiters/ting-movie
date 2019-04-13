import { connect } from 'react-redux';
import { MoviePage } from '../pages';
import { fetchMovieAsync } from '../actions';

const mapStateToProps = state => ({
  isFetching: state.movie.isFetching,
  isError: state.movie.isError,
  movie: state.movie.movie
});

const mapDispatchToProps = (dispatch, props) => ({
  onFetchMovie: movieId => dispatch(fetchMovieAsync(movieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
