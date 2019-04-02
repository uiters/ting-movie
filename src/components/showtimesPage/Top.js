import React, { Component } from 'react';
import Schedual from './Schedual';
import './../../styles/showtimes.css';

export default class extends Component {
  render() {
    return (
      <div>
        {/* Start Top */}
        <div className="row detailMainInfo mainMaxWidth2 ">
          <div className="row d-inline-flex w100 mt150">
            {/* Start Poster Film */}
            <div className="col-sm-3 col-xs-4 filmPosterTop">
              <div className="item">
                <div className="movie-box-1">
                  <div className="poster">
                    <img src="https://s3img.vcdn.vn/mobile/123phim/2019/03/us-chung-ta-15517779531412_220x310.jpg" alt='poster' />
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=3T9c42gxXzg"
                      className="play-video"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Finish Poster Film */}

            {/* Start Info Time Of Film */}
            <div className="col-sm-5 ">
              <div className="card-body">
                <span className="detailMainInfo1 ng-binding">22.03.2019</span>
                <h4 className="card-title">
                  <span className="detailMainInfo2">
                    <span
                      className="ageType ng-binding ng-scope"
                      ng-if="filmDetail.film_age >= 13"
                    >
                      C18
                    </span>

                    <span className="ng-binding"> Us - Chúng Ta </span>
                  </span>
                </h4>
                <p class="card-text">
                  <span class="detailMainInfo1 ng-binding">
                    0 phút - 0 IMDb - 2D/Digital
                  </span>
                </p>
                <button
                  alt="true"
                  type="button"
                  className="btn btn-primary "
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Xem lịch chiếu
                </button>
              </div>
            </div>
            {/* Finish Info Time Of Film */}
            {/*  Start Show Point */}
            <div className="col-sm-2 ml">
              <div className="stars mt100">
                <div style={{ color: 'ffc741' }}>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>7.5 / 10</span>
              </div>
            </div>
            {/* Finish show Point */}
          </div>
        </div>
        {/* Start Modal Show Schedual Film */}
        <div className="modal" id="myModal">
          <div className=" modal-size ">
            <div>
              <Schedual />
            </div>
          </div>
        </div>
        {/* Finish Modal Show Schedual Film */}

        {/* Finish Top */}
      </div>
    );
  }
}
