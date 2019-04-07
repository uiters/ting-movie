import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadPackages } from '../utils';
import {
  HeaderNavigation,
  Loader,
  Slider,
  SearchForm,
  LatestMovies,
  UpcomingMovies,
  HowItWorks,
  Counter,
  BecomePremium,
  Blog,
  Subscribe
} from '../components';

class HomePage extends Component {
  componentWillMount() {
    loadPackages();
  }

  componentDidMount() {
    this.props.onFetchMovies();
  }
  
  componentWillUpdate() {
    loadPackages();
  }

  render() {
    const { isFetching, isError, movies } = this.props;
    return (
      <div>
        <Loader />
        <HeaderNavigation />
        <section id="slider" className="full-slider">
          <Slider />
          <SearchForm />
        </section>
        <LatestMovies
          isFetching={isFetching}
          isError={isError}
          movies={movies}
        />
        <UpcomingMovies />
        <HowItWorks />
        <Counter />
        <BecomePremium />
        <Blog />
        <Subscribe />
      </div>
    );
  }
}

HomePage.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  movies: PropTypes.array,
  onFetchMovies: PropTypes.func
};

export default HomePage;
