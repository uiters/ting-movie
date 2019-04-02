import React, { Component } from 'react';
import { loadPackages } from '../utils';
import { Loader, HeaderNavigation, MainHeader } from '../components';
import { Top, MovieInformation } from '../components';
import './../styles/showtimes.css';
export default class extends Component {
  componentWillMount() {
    loadPackages();
  }
  
  render() {
    return (
      <div>
        <Loader />
        <HeaderNavigation isWhite={true} />
        <MainHeader content="ShowTimes" />
        <main alt="true">
          {/* Start Body Of Page */}
          <section className="bg-solid ">
            <div className="container bg-solid">
              <Top />
              <MovieInformation />
            </div>
          </section>
          {/* Finish Body Of Page */}
        </main>
      </div>
    );
  }
}
