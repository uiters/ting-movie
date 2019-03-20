import React from 'react';

export default function() {
  return (
    <section className="counter bg-main-gradient ptb50 text-center">
      <div className="container">
        <div className="row">
          {/* 1st Count up item */}
          <div className="col-md-4 col-sm-12">
            <span className="counter-item" data-from={0} data-to={1964}>
              0
            </span>
            <h4>Movies</h4>
          </div>
          {/* 2nd Count up item */}
          <div className="col-md-4 col-sm-12">
            <span className="counter-item" data-from={0} data-to={1007}>
              0
            </span>
            <h4>Everyday Access</h4>
          </div>
          {/* 3rd Count up item */}
          <div className="col-md-4 col-sm-12">
            <span className="counter-item" data-from={0} data-to={1207}>
              0
            </span>
            <h4>Users</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
