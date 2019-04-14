import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Footer,
  HeaderSearch,
  SignIn,
  SignUp,
  ForgetPassword,
  BackToTop
} from './components';
import {
  HomePageContainer,
  ShowtimesPageContainer,
  MoviePageContainer
} from './containers';
import { NotFoundPage, ContactPage } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <nav id="main-mobile-nav" />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/showtimes" component={ShowtimesPageContainer} />
            <Route path="/movies/:id" component={MoviePageContainer} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
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
      </Router>
    );
  }
}

export default App;
