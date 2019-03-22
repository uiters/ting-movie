import React, { Component } from 'react';
import loadjs from 'loadjs';
import {
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
    const publicUrl = process.env.PUBLIC_URL;
    loadjs([
      `${publicUrl}/js/imagesloaded.pkgd.min.js`,
      `${publicUrl}/js/owl.carousel.min.js`,
      `${publicUrl}/js/isotope.pkgd.min.js`,
      `${publicUrl}/js/headroom.js`,
      `${publicUrl}/js/custom.js`,
      `${publicUrl}/revolution/js/jquery.themepunch.tools.min.js`,
      `${publicUrl}/revolution/js/jquery.themepunch.revolution.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.actions.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.carousel.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.kenburn.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.layeranimation.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.migration.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.navigation.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.parallax.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.slideanims.min.js`,
      `${publicUrl}/revolution/js/extensions/revolution.extension.video.min.js`
    ]);
  }
  render() {
    return (
      <div>
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
