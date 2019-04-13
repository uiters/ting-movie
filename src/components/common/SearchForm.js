import React from 'react';

export default function() {
  return (
    <div className="search-form-wrapper search-form-rev">
      <div className="container">
        {/* ===== START OF SEARCH FORM ===== */}
        <form id="search-form-1" action='/showtimes'>
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-10 col-12">
              <div className="form-group">
                <input
                  name="search-keyword"
                  type="text"
                  id="search-keyword"
                  className="form-control"
                  placeholder="Nhập tên phim"
                  required
                />
                <button type="submit" className="btn btn-main btn-effect">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* ===== END OF SEARCH FORM ===== */}
      </div>
    </div>
  );
}
