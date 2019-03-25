/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { loadPackages } from '../utils';
import {
  Loader,
  HeaderNavigation,
  MainHeader,
  Filters,
  MovieGridItem,
  Pagination
} from '../components';

export default class extends Component {
  componentWillMount() {
    loadPackages();
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
              <MovieGridItem />
              <MovieGridItem />
              <MovieGridItem />
              <MovieGridItem />
              <MovieGridItem />
              <MovieGridItem />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}
