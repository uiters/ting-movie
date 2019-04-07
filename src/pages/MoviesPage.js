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
  componentWillMount() {
    loadPackages();
  }

  componentDidMount() {
    this.props.onFetchMovies();
  }

  componentWillUpdate() {
    loadPackages();
  }

  renderMoviesList() {
    const { isFetching, isError, movies } = this.props;

    const listMovies =  movies.map((movie, index) =>
      <MovieGridItem key={index} movie={movie} />
    );

    const data = isFetching
    ? 
    <ClipLoader sizeUnit={'px'} size={40} color={'#9c3064'} />
    : (isError 
      ? <h5 className="title" style={{color: '#9c3064'}}>Nothing to display</h5>
      : listMovies
      );

    return data;
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
            <div className="row">
              {this.renderMoviesList()}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  movies: PropTypes.array,
  onFetchMovies: PropTypes.func
};

export default MoviesPage;