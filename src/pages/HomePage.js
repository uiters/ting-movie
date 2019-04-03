import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
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
    this.props.onFetchMovies();
  }

  render() {
    return (
      <div>
        <Loader />
        <HeaderNavigation />
        <section id="slider" className="full-slider">
          <Slider />
          <SearchForm />
        </section>
        {this.props.isFetching ? (
          <ScaleLoader sizeUnit={'px'} size={150} color={'#123abc'} />
        ) : (
          <LatestMovies />
        )}
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
