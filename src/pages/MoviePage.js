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
    this.props.onFetchMovie('2052');
    // TODO: get movieId
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
    const { isFetching, isError, movie } = this.props;

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
                  isFetching={isFetching}
                  isError={isError}
                  movie={movie}
                />
                {this.renderOptions()}
                <MovieShowtimes />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MoviePage.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  movie: PropTypes.object,
  onFetchMovie: PropTypes.func
};

export default MoviePage;
