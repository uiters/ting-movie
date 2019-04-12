/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { loadPackages } from '../utils';
import { Loader, HeaderNavigation, MainHeader } from '../components';
import { MovieMainInfo, MovieShowtimes } from '../components';
export default class extends Component {
  componentWillMount() {
    loadPackages();
  }

  render() {
    return (
      <div>
        <Loader />
        <HeaderNavigation isWhite={true} />
        <MainHeader content="Lịch Chiếu" />
        <main className="ptb100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <MovieMainInfo />
                <ul className="nav justify-content-center my-5">
                  <li className="nav-item">
                    <a
                      className="nav-link text-danger font-weight-bold"
                      href="#"
                      style={{ fontSize: '24px' }}
                    >
                      Lịch Chiếu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-secondary"
                      href="#"
                      style={{ fontSize: '24px' }}
                    >
                      Thông tin chi tiết
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-secondary"
                      href="#"
                      style={{ fontSize: '24px' }}
                    >
                      Đánh giá và bình luận
                    </a>
                  </li>
                </ul>
                <MovieShowtimes />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
