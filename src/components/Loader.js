import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class extends React.Component {
  componentDidMount() {
    const el = findDOMNode(this.refs.loading);
    $(el).delay(1000).fadeOut(1000); 
  }

  render() {
    return (
      <div className="loading" ref='loading'>
        <div className="loading-inner">
          <div className="loading-effect">
            <div className="object" />
          </div>
        </div>
      </div>
    );
  }
}
