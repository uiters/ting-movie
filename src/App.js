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
import { HomePage, MoviesPage, NotFoundPage } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <nav id="main-mobile-nav" />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/movies' component={MoviesPage} />
            <Route path='*' component={NotFoundPage} />
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
