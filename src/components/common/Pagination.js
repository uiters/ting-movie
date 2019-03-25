/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function() {
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <nav className="pagination">
          <ul>
            <li>
              <a href="#" className="current-page">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">
                <i className="ti-angle-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
