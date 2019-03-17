import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Movies } from '../components';

class MoviesContainer extends Component {
  showMovies = () =>
    this.props.movies.map((movie, index) => <li key={index}>{movie.name}</li>);

  render() {
    return (
      <div>
        <Movies>{this.showMovies()}</Movies>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
