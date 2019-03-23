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
import { Home, NotFound } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <nav id="main-mobile-nav" />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='*' component={NotFound} />
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
