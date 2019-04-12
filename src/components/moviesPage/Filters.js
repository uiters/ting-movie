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
                <option>Phim</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sort-by-select">
              <select className="chosen-select-no-single">
                <option>Rạp</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sort-by-select">
              <select className="chosen-select-no-single">
                <option>Ngày xem</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sort-by-select">
              <select className="chosen-select-no-single">
                <option>Suất chiếu</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <a href="#" className="btn btn-main btn-effect btn-block h-100 text-center" style={{lineHeight: '45px'}}>
          <span>
            <i className="icon-basket" style={{ marginRight: '10px', fontSize: '15px' }} />
            Mua vé
          </span>
        </a>
      </div>
    </div>
  );
}
