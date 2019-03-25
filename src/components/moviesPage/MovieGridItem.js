/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames';

function MovieGridItem({ isColumn }) {
  const containerClassName = classNames({
    'item': true,
    'col-lg-3 col-md-6 col-sm-12 mt-4': isColumn
  });
  return (
    <div className={containerClassName}>
      {/* Start of Movie Box */}
      <div className="movie-box-1">
        {/* Start of Poster */}
        <div className="poster">
          <img
            src="https://i.pinimg.com/736x/9c/7a/40/9c7a408a8ffa8d2c2949aca17b1cc207.jpg"
            alt="poster"
          />
        </div>
        {/* End of Poster */}
        {/* Start of Buttons */}
        <div className="buttons">
          <a
            href="https://www.youtube.com/watch?v=VSB4wGIdDwo"
            className="play-video"
          >
            <i className="fa fa-play" />
          </a>
        </div>
        {/* End of Buttons */}
        {/* Start of Movie Details */}
        <div className="movie-details">
          <h4 className="movie-title">
            <a href="https://github.com/cuongw">Star Wars</a>
          </h4>
          <span className="released">14 Dec 2017</span>
        </div>
        {/* End of Movie Details */}
        {/* Start of Rating */}
        <div className="stars">
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
          </div>
          <span>7.5 / 10</span>
        </div>
        {/* End of Rating */}
      </div>
      {/* End of Movie Box */}
    </div>
  );
}

MovieGridItem.defaultProps = {
  isColumn: true
};

export default MovieGridItem;
