import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  HeaderNavigation,
  Footer,
  HeaderSearch,
  SignIn,
  SignUp,
  ForgetPassword,
  BackToTop
} from './components';
import { Home } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderNavigation />
        <nav id="main-mobile-nav" />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/showtimes' render={() => <h1 className='text-danger'>Showtimes</h1>} />
            <Route path='/movies' render={() => <h1 className='text-success'>Movies</h1>} />
            <Route path='/blog' render={() => <h1 className='text-warning'>Blog</h1>} />
            <Route path='/contact' render={() => <h1 className='text-primary'>Contact us</h1>} />
            <Route path='*' render={() => <h1>Not Found</h1>} />
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
