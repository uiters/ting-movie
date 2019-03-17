import React, { Component } from 'react'
import NavTab from './NavTab'
import TabContent from './TabContent'

export default class Middle extends Component {
  render() {
    return (
     
      <div className="col-xs-12 block mainMaxWidth " id="homeMovies">
        <NavTab/>
        <TabContent/>
      </div>     
    )
  }
}
