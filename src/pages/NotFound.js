import React, { Component } from 'react';
import { loadPackage } from '../utils';
import { Loader, HeaderNavigation, SearchForm, MainHeader } from '../components';

export default class extends Component {
  componentWillMount() {
    loadPackage();
  }
  render() {
    return (
      <div>
        <Loader />
        <HeaderNavigation isWhite={true} />
        <MainHeader content='404 Page' />
        <main className="page-not-found ptb100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>404</h2>
                <h3>Page Not Found!</h3>
                <p>
                  We're sorry, but the page you were looking for doesn't exist.
                </p>
                <SearchForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
