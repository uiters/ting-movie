import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import moment from 'moment';
import classNames from 'classnames';
import thinid from 'thinid';
import '../../styles/MovieShowtimes.css';

class MovieShowtimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCinemaType: {
        id: '4'
        //TODO: default id
      },
      currentTimeIndex: 0
    };
  }

  handleFilterSessions() {
    const cinemaId = this.state.currentCinemaType.id;
    const date = moment()
      .add(this.state.currentTimeIndex, 'days');
    this.props.onFilterSessions(cinemaId, date);
  }

  handleCinemaTypeClick = async cinemaType => {
    await this.setState({
      currentCinemaType: cinemaType
    });
    this.handleFilterSessions();
  };

  handleTimeClick = async index => {
    await this.setState({ currentTimeIndex: index });
    this.handleFilterSessions();
  };

  renderCinemas() {
    const { isFetchingCinemas, isErrorCinemas, cinemaTypes } = this.props;
    const data = isFetchingCinemas ? (
      <ClipLoader sizeUnit={'px'} size={40} color={'#9c3064'} />
    ) : isErrorCinemas ? (
      <div className="col-3 d-flex flex-column border-right">
        <h5 className="title text-center" style={{ color: '#9c3064' }}>
          Không tìm thấy danh sách rạp. Vui lòng thử lại!
        </h5>
      </div>
    ) : (
      <div className="col-3 d-flex flex-column border-right">
        {cinemaTypes.map((cinemaType, index) => (
          <div
            key={index}
            className={classNames('cinema-type px-3 pt-3', {
              'cinema-type-active':
                cinemaType.id === this.state.currentCinemaType.id
            })}
            onClick={() => this.handleCinemaTypeClick(cinemaType)}
          >
            <div
              className={classNames('pb-3', {
                'border-bottom': cinemaTypes.length !== index + 1
              })}
            >
              <img
                className="mr-3"
                width="50"
                height="50"
                alt="cinema"
                src={cinemaType.logo}
              />
              <span className="text-dark">{cinemaType.name}</span>
            </div>
          </div>
        ))}
      </div>
    );

    return data;
  }

  getVietnameseStringDay(number) {
    switch (number) {
      case 1:
        return 'Thứ 2';
      case 2:
        return 'Thứ 3';
      case 3:
        return 'Thứ 4';
      case 4:
        return 'Thứ 5';
      case 5:
        return 'Thứ 6';
      case 6:
        return 'Thứ 7';
      default:
        return 'Chủ Nhật';
    }
  }

  renderTimes() {
    const timeComponents = [];
    for (let i = 0; i < 7; i++) {
      timeComponents.push(
        <div
          key={thinid()}
          className={classNames(
            'd-flex flex-column align-items-center m-0 p-0 local-time',
            {
              'local-time-active': this.state.currentTimeIndex === i
            }
          )}
          onClick={() => this.handleTimeClick(i)}
        >
          <p
            className={classNames('mx-2 mb-2', {
              'text-danger font-weight-bold': this.state.currentTimeIndex === i,
              'text-dark': this.state.currentTimeIndex !== i
            })}
          >
            {this.getVietnameseStringDay(
              moment()
                .add(i, 'days')
                .day()
            )}
          </p>
          <h5
            className={classNames('m-0', {
              'text-danger font-weight-bold': this.state.currentTimeIndex === i,
              'font-weight-light': this.state.currentTimeIndex !== i
            })}
          >
            {moment()
              .add(i, 'days')
              .date()}
          </h5>
        </div>
      );
    }

    return (
      <div className="px-3 pt-3">
        <div className="d-flex justify-content-around border-bottom pb-3 w-100">
          {timeComponents}
        </div>
      </div>
    );
  }

  renderSessions() {
    const { sessionResults, isFetchingSessions, isErrorSessions } = this.props;

    const sessions = [];
    if (sessionResults) {
      const { cinemas } = sessionResults;
      for (let key in cinemas) {
        sessions.push(
          <div key={thinid()} className="d-flex py-4 px-3 border-bottom movie-session">
            <div className="d-flex flex-column mr-3">
              <img
                width="50"
                height="50"
                alt="cinema logo"
                src={cinemas[key].cinema_image}
              />
              <div width="50" height="50" style={{ padding: 10 }}>
                <img
                  width="30"
                  height="30"
                  alt=""
                  src="https://www.123phim.vn/app/assets/img/icons/typeSession/2_1.png"
                />
              </div>
            </div>
            <div className="d-flex flex-column">
              <h6 className="m-0 pb-2 pl-2">{cinemas[key].cinema_name}</h6>
              <p className="m-0 pl-2">{cinemas[key].cinema_address}</p>
              <div className="d-flex flex-wrap">
                {(
                  cinemas[key].versions['2_1'] || cinemas[key].versions['2_0']
                ).map((item, index) => (
                  <h4 key={index} className="text-success m-0 p-2">
                    {item.session_time.split(' ')[1].split(':').slice(0, 2).join(':')}
                  </h4>
                ))}
              </div>
            </div>
          </div>
        );
      }
    }
    if (!sessions.length) {
      sessions.push(<h5 key={thinid()} className="title text-center mt-3" style={{ color: '#9c3064' }}>
      Không có suất chiếu.
    </h5>);
    }

    const data = isFetchingSessions ? (
      <ClipLoader sizeUnit={'px'} size={40} color={'#9c3064'} />
    ) : isErrorSessions ? (
      <div className="d-flex flex-column">
        <h5 className="title text-center" style={{ color: '#9c3064' }}>
          Không tìm thấy lịch chiếu phim. Vui lòng thử lại!
        </h5>
      </div>
    ) : (
      <div className="d-flex flex-column">{sessions}</div>
    );

    return data;
  }

  render() {
    return (
      <div className="row border">
        {this.renderCinemas()}
        <div className="col-9 d-flex flex-column">
          {this.renderTimes()}
          {this.renderSessions()}
        </div>
      </div>
    );
  }
}

MovieShowtimes.propTypes = {
  isFetchingCinemas: PropTypes.bool,
  isFetchingSessions: PropTypes.bool,
  isErrorCinemas: PropTypes.bool,
  isErrorSessions: PropTypes.bool,
  cinemaTypes: PropTypes.array,
  sessionResults: PropTypes.object,
  onFilterSessions: PropTypes.func
};

export default MovieShowtimes;
