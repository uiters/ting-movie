import React, { Component } from 'react';
import { Loader, SearchForm } from '../components';
import '../styles/NotFound.css'

export default class extends Component {
  render() {
    return (
      <div>
        <Loader />
        <section
          className="page-header overlay-gradient"
        />
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
