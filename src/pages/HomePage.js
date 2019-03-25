import React, { Component } from 'react';
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

export default class extends Component {
  componentWillMount() {
    loadPackages();
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
        <LatestMovies />
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
