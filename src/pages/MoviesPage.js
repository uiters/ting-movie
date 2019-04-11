/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { loadPackages } from '../utils';
import {
  Loader,
  HeaderNavigation,
  MainHeader,
  Filters,
  MovieGridItem,
  Pagination
} from '../components';

class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentWillMount() {
    loadPackages();
    this.getPage();
  }

  componentDidMount() {
    this.props.onFetchMovies();
    this.getPage();
  }

  componentWillUpdate() {
    loadPackages();
  }

  componentWillReceiveProps(nextProps) {
    const params = new URLSearchParams(nextProps.location.search);
    this.setState({ page: parseInt(params.get('page')) || 1 });
  }

  getPage() {
    const params = new URLSearchParams(this.props.location.search);
    this.setState({ page: parseInt(params.get('page')) || 1 });
  }

  renderMovies() {
    const { page = 1 } = this.state;
    const { movies } = this.props;

    const perPage = 12;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return [...movies]
      .slice(start, end)
      .map((movie, index) => <MovieGridItem key={index} movie={movie} />);
  }

  renderData() {
    const { isFetching, isError } = this.props;

    const movieList = this.renderMovies();

    const data = isFetching ? (
      <ClipLoader sizeUnit={'px'} size={40} color={'#9c3064'} />
    ) : isError ? (
      <h5 className="title" style={{ color: '#9c3064' }}>
        Nothing to display
      </h5>
    ) : (
      movieList
    );

    return data;
  }

  renderPagination() {
    const { isFetching, isError } = this.props;
    if (!isFetching && !isError) {
      return (
        <Pagination
          movieCount={this.props.movies.length || 0}
          perPage={12}
          currentPage={this.state.page || 1}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <Loader />
        <HeaderNavigation isWhite={true} />
        <MainHeader content="Movies" />
        <div className="ptb100">
          <div className="container">
            <Filters />
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link text-danger font-weight-bold"
                  href="#"
                  style={{ fontSize: '24px' }}
                >
                  Now Playing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="#"
                  style={{ fontSize: '24px' }}
                >
                  Coming Soon
                </a>
              </li>
            </ul>
            {this.renderPagination()}
            <div className="row">{this.renderData()}</div>
            {this.renderPagination()}
          </div>
        </div>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  location: PropTypes.object,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  movies: PropTypes.array,
  onFetchMovies: PropTypes.func
};

export default MoviesPage;
