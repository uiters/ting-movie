/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='row border'>
        {/* Start cinema section */}
        <div className='col-3 d-flex flex-column border-right'>
          <a className='px-3 pt-3' href='#'>
            <div className='border-bottom pb-3'>
              <img className='mr-3' width='50' height='50' src='https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png' />
              <span className='text-dark'>BHD Star Cineplex</span>
            </div>
          </a>
          <a className='px-3 pt-3' href='#'>
            <div className='border-bottom pb-3'>
              <img className='mr-3' width='50' height='50' src='https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png' />
              <span className='text-dark'>BHD Star Cineplex</span>
            </div>
          </a>
          <a className='px-3 pt-3' href='#'>
            <div className='border-bottom pb-3'>
              <img className='mr-3' width='50' height='50' src='https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png' />
              <span className='text-dark'>BHD Star Cineplex</span>
            </div>
          </a>
        </div>
        {/* End cinema section */}
        {/* Start time and detail showtimes */}
        <div className='col-9 d-flex flex-column'>
          {/* Start time section */}
          <div className='px-3 pt-3'>
            <div className='d-flex justify-content-around border-bottom pb-3 w-100'>
              <a href='#' className='d-flex flex-column align-items-center m-0 p-0'>
                <p className='text-danger font-weight-bold mx-2 mb-2'>Thu 6</p>
                <h5 className='text-danger font-weight-bold m-0'>12</h5>
              </a>
              <a href='#' className='d-flex flex-column align-items-center m-0 p-0'>
                <p className='mx-2 mb-2 text-dark'>Thu 7</p>
                <h5 className='font-weight-light m-0'>13</h5>
              </a>
              <a href='#' className='d-flex flex-column align-items-center m-0 p-0'>
                <p className='mx-2 mb-2 text-dark'>Thu 7</p>
                <h5 className='font-weight-light m-0'>13</h5>
              </a>
              <a href='#' className='d-flex flex-column align-items-center m-0 p-0'>
                <p className='mx-2 mb-2 text-dark'>Thu 7</p>
                <h5 className='font-weight-light m-0'>13</h5>
              </a>
              <a className='d-flex flex-column align-items-center m-0 p-0'>
                <p className='mx-2 mb-2 text-dark'>Thu 7</p>
                <h5 className='font-weight-light m-0'>13</h5>
              </a>
              <a className='d-flex flex-column align-items-center m-0 p-0'>
                <p className='mx-2 mb-2 text-dark'>Thu 7</p>
                <h5 className='font-weight-light m-0'>13</h5>
              </a>
              <a className='d-flex flex-column align-items-center m-0 p-0'>
                <p className='mx-2 mb-2 text-dark'>Thu 7</p>
                <h5 className='font-weight-light m-0'>13</h5>
              </a>
            </div>
          </div>
          {/* End time section */}
          {/* Start detail showtimes section */}
          <div className='d-flex flex-column'>
            <div className='d-flex py-4 px-3 border-bottom'>
              <div className='d-flex flex-column mr-3'>
                <img width='50' height='50' src='https://s3img.vcdn.vn/123phim/2018/09/galaxy-quang-trung-15381040745219.jpg' />
                <div width='50' height='50' style={{padding: 10}}>
                  <img width='30' height='30' src='https://www.123phim.vn/app/assets/img/icons/typeSession/2_1.png' />
                </div>
              </div>
              <div className='d-flex flex-column'>
                <h6 className='m-0 pb-2 pl-2'>GLX - Tan Binh</h6>
                <p className='m-0 pl-2'>246 Nguyen Hong Dao, Tan Binh</p>
                <div className='d-flex'>
                  <h4 className='text-success m-0 p-2'>10:00</h4>
                  <h4 className='text-success m-0 p-2'>10:00</h4>
                </div>
              </div>
            </div>
            <div className='d-flex py-4 px-3 border-bottom'>
              <div className='d-flex flex-column mr-3'>
                <img width='50' height='50' src='https://s3img.vcdn.vn/123phim/2018/09/galaxy-quang-trung-15381040745219.jpg' />
                <div width='50' height='50' style={{padding: 10}}>
                  <img width='30' height='30' src='https://www.123phim.vn/app/assets/img/icons/typeSession/2_1.png' />
                </div>
              </div>
              <div className='d-flex flex-column'>
                <h6 className='m-0 pb-2 pl-2'>GLX - Tan Binh</h6>
                <p className='m-0 pl-2'>246 Nguyen Hong Dao, Tan Binh</p>
                <div className='d-flex'>
                  <h4 className='text-success m-0 p-2'>10:00</h4>
                  <h4 className='text-success m-0 p-2'>10:00</h4>
                </div>
              </div>
            </div>
          </div>
          {/* End deatil showtimes section */}
        </div>
        {/* End time and detail showtimes */}
      </div>
    );
  }
}
