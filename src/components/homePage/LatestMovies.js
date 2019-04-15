import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { MovieGridItem } from '../../components';

function LatestMovies({ isFetching, isError, movies }) {
  const listMovies =  movies.slice(0, 12).map((movie, index) =>
    <MovieGridItem key={index} isColumn={false} movie={movie} />
  );

  const data = isFetching
  ? 
  <ClipLoader sizeUnit={'px'} size={40} color={'#9c3064'} />
  : (isError 
    ? <h5 className="title" style={{color: '#9c3064'}}>Nothing to display</h5>
    : <div className='owl-carousel latest-movies-slider mt20'>{listMovies}</div>
    );

  return (
    <section className="latest-movies ptb100">
      <div className="container">
        {/* Start of row */}
        <div className="row">
          <div className="col-md-8">
            <h2 className="title">Phim mới</h2>
          </div>
          <div className="col-md-4 align-self-center text-right">
            <Link to="/showtimes" className="btn btn-icon btn-main btn-effect">
              Xem tất cả
              <i className="ti-angle-double-right" />
            </Link>
          </div>
        </div>
        {/* End of row */}
        {/* Start of Latest Movies Slider */}
        {data}
        {/* End of Latest Movies Slider */}
      </div>
    </section>
  );
}

LatestMovies.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  movies: PropTypes.array
};

export default LatestMovies;
