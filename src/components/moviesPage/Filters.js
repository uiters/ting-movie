/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function() {
  return (
    <div className="row mb50">
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-3">
            <div className="sort-by-select">
              <select className="chosen-select-no-single">
                <option>Movies</option>
                <option>Featured</option>
                <option>Top Viewed</option>
                <option>Top Rated</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sort-by-select">
              <select className="chosen-select-no-single">
                <option>Theaters</option>
                <option>Featured</option>
                <option>Top Viewed</option>
                <option>Top Rated</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sort-by-select">
              <select className="chosen-select-no-single">
                <option>Dates</option>
                <option>Featured</option>
                <option>Top Viewed</option>
                <option>Top Rated</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sort-by-select">
              <select className="chosen-select-no-single">
                <option>Times</option>
                <option>Featured</option>
                <option>Top Viewed</option>
                <option>Top Rated</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <a href="#" className="btn btn-main btn-effect btn-block h-100 text-center" style={{lineHeight: '45px'}}>
          <span>
            <i className="icon-basket" style={{ marginRight: '10px', fontSize: '15px' }} />
            Get Tickets
          </span>
        </a>
      </div>
    </div>
  );
}
