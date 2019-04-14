/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadPackages } from '../utils';
import {
  Loader,
  HeaderNavigation,
  MainHeader,
  MovieMainInfo,
  MovieShowtimes
} from '../components';

class MoviePage extends Component {
  componentWillMount() {
    loadPackages();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const movieId = this.props.match.params.id;
    this.props.onFetchMovie(movieId);

    this.props.onFetchCinemas();

    // FIXME: need an id for first cinema types.
    // const cinemaId = this.props.cinemaTypes[0].id;
    // TODO: typeOf cinemaId is string
    const cinemaId = '4';
    
    const date = new Date();
    this.props.onFetchSessions(movieId, cinemaId, date);
  }

  componentDidUpdate() {
    loadPackages();
  }

  renderOptions() {
    return (
      <ul className="nav justify-content-center my-5">
        <li className="nav-item">
          <a
            className="nav-link text-danger font-weight-bold"
            href="#"
            style={{ fontSize: '24px' }}
          >
            Lịch Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-secondary"
            href="#"
            style={{ fontSize: '24px' }}
          >
            Thông tin chi tiết
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-secondary"
            href="#"
            style={{ fontSize: '24px' }}
          >
            Đánh giá và bình luận
          </a>
        </li>
      </ul>
    );
  }

  render() {
    const {
      isFetchingMovie,
      isFetchingCinemas,
      isFetchingSessions,
      isErrorCinemas,
      isErrorMovie,
      isErrorSessions,
      movie,
      cinemaTypes,
      sessionResults,
      onFilterSessions
    } = this.props;

    return (
      <div>
        <Loader />
        <HeaderNavigation isWhite={true} />
        <MainHeader content="Phim" />
        <main className="ptb100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <MovieMainInfo
                  isFetching={isFetchingMovie}
                  isError={isErrorMovie}
                  movie={movie}
                />
                {this.renderOptions()}
                <MovieShowtimes
                  isFetchingCinemas={isFetchingCinemas}
                  isFetchingSessions={isFetchingSessions}
                  isErrorCinemas={isErrorCinemas}
                  isErrorSessions={isErrorSessions}
                  cinemaTypes={cinemaTypes}
                  sessionResults={sessionResults}
                  onFilterSessions={onFilterSessions}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MoviePage.propTypes = {
  match: PropTypes.object,
  isFetchingMovie: PropTypes.bool,
  isFetchingCinemas: PropTypes.bool,
  isFetchingSessions: PropTypes.bool,
  isErrorMovie: PropTypes.bool,
  isErrorCinemas: PropTypes.bool,
  isErrorSessions: PropTypes.bool,
  movie: PropTypes.object,
  cinemaTypes: PropTypes.array,
  sessionResults: PropTypes.object,
  onFetchMovie: PropTypes.func,
  onFetchCinemas: PropTypes.func,
  onFetchSessions: PropTypes.func,
  onFilterSessions: PropTypes.func
};

export default MoviePage;
