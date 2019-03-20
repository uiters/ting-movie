import React, { Component } from 'react';
import {
  Loader,
  HeaderNavigation,
  Slider,
  SearchForm,
  LatestMovies,
  UpcomingMovies,
  HowItWorks,
  Counter,
  BecomePremium,
  Blog,
  Subscribe,
  Footer,
  HeaderSearch,
  SignIn,
  SignUp,
  ForgetPassword,
  BackToTop
} from '../components';

export default class extends Component {
  render() {
    return (
      <div>
        <Loader />
        <nav id="main-mobile-nav" />
        <div className="wrapper">
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
          <Footer />
        </div>
        <HeaderSearch />
        <div
          id="login-register-popup"
          className="small-dialog zoom-anim-dialog mfp-hide"
        >
          <SignIn />
          <SignUp />
          <ForgetPassword />
        </div>
        <BackToTop />
      </div>
    );
  }
}
