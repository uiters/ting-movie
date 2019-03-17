import React, { Component } from 'react';

class Movies extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default Movies;
