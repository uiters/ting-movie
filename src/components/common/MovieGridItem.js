import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import thinid from 'thinid';
import { Link } from 'react-router-dom';

function MovieGridItem({ isColumn, movie }) {
  const containerClassName = classNames({
    item: true,
    'col-lg-3 col-md-6 col-sm-12 mt-4': isColumn
  });

  const renderStars = () => {
    const totalStars = Math.floor(movie.imdb_point / 2);
    const starsItems = [];

    for (let i = 0; i < totalStars; i++) {
      starsItems.push(<i key={thinid()} className="fa fa-star" />);
    }
    for (let i = 0; i < 5 - totalStars; i++) {
      starsItems.push(<i key={thinid()} className="fa fa-star-o" />);
    }

    return <div className="rating">{starsItems}</div>;
  };

  return (
    <div className={containerClassName}>
      {/* Start of Movie Box */}
      <div className="movie-box-1">
        {/* Start of Poster */}
        <div className="poster">
          <img src={movie.poster_url} alt={movie.film_name_vn} />
        </div>
        {/* End of Poster */}
        {/* Start of Buttons */}
        <div className="buttons">
          <a
            href={`https://www.youtube.com/watch?v=${movie.media_id}`}
            className="play-video"
          >
            <i className="fa fa-play" />
          </a>
        </div>
        {/* End of Buttons */}
        {/* Start of Movie Details */}
        <div className="movie-details">
          <h4 className="movie-title">
            <Link to={`/movies/${movie.film_id}`}>{movie.film_name_vn}</Link>
          </h4>
          <span className="released">{movie.publish_date}</span>
        </div>
        {/* End of Movie Details */}
        {/* Start of Rating */}
        <div className="stars">
          {renderStars()}
          <span>{movie.imdb_point} / 10</span>
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

MovieGridItem.propTypes = {
  isColumn: PropTypes.bool,
  movie: PropTypes.object
};

export default MovieGridItem;
