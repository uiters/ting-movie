import React, { Component } from 'react'

export default class NavTab extends Component {
  render() {
    return (
        <ul className="nav nav-tabs navCenter justify-content-center">
        <li /*style="margin-right:5px;"*/ className="active mr-1">
          <a data-toggle="tab" data-target="#nowShowingFilms" href='/'>Đang Chiếu</a>
          
          <div className="wing wingLeft"></div>
          <div className="wing wingRight"></div>
        </li>
        <li /*style="margin-left:5px;"*/ className='ml-1'>
          <a data-toggle="tab" ng-click="initFilmUpComing()" data-target="#upComingFilms" href='/'>Sắp Chiếu</a>
          <div className="wing wingLeft"></div>
          <div className="wing wingRight"></div>
        </li>
      </ul>
    )
  }
}
