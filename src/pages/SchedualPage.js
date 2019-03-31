import React, { Component } from 'react'
import { Loader, HeaderNavigation, MainHeader } from '../components';
import { Top, InfoFilm } from '../components'

export default class extends Component {
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
              <InfoFilm />
            </div>
          </section>
          {/* Finish Body Of Page */}
        </main>
      </div>
    )
  }
}
