import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

class MovieMainInfo extends Component {
  renderMovieInfo() {
    const { movie } = this.props;

    return (
      <div className="d-flex justify-content-center">
        <div className="col-sm-3 col-xs-4">
          <div className="movie-box-1">
            {/* Start of Poster */}
            <div className="poster">
              <img src={movie.poster} alt={movie.film_name_vn} />
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
          </div>
        </div>
        <div className="col-sm-9 col-xs-8 d-flex flex-column align-items-flex-start align-left">
          <p className="m-0 p-0">{movie.publish_date}</p>
          <h3 style={{color: '#9352b3'}}>{movie.film_name_vn}</h3>
          <p>
            {movie.film_duration} minutes - {movie.imdb_point} IMDb -{' '}
            {movie.film_version}
          </p>
          <p>{movie.film_description_web_short}</p>
          <a
            href="https://github.com/cuongw"
            className="btn btn-main btn-effect text-center"
            style={{ lineHeight: '45px', width: '160px' }}
          >
            <span>
              <i
                className="icon-basket"
                style={{ marginRight: '10px', fontSize: '15px' }}
              />
              Mua vé
            </span>
          </a>
        </div>
      </div>
    );
  }

  renderData() {
    const { isFetching, isError } = this.props;

    const data = isFetching ? (
      <ClipLoader sizeUnit={'px'} size={40} color={'#9c3064'} />
    ) : isError ? (
      <div className="container">
        <h5 className="title text-center" style={{ color: '#9c3064' }}>
          Không tìm thấy thông tin phim. Vui lòng thử lại!
        </h5>
      </div>
    ) : (
      this.renderMovieInfo()
    );

    return data;
  }

  render() {
    return <div className="container">{this.renderData()}</div>;
  }
}

MovieMainInfo.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  movie: PropTypes.object
};

export default MovieMainInfo;
