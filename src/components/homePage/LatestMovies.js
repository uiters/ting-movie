/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MovieGridItem } from '../../components';

export default function() {
  return (
    <section className="latest-movies ptb100">
      <div className="container">
        {/* Start of row */}
        <div className="row">
          <div className="col-md-8">
            <h2 className="title">Latest Movies</h2>
          </div>
          <div className="col-md-4 align-self-center text-right">
            <a href="#" className="btn btn-icon btn-main btn-effect">
              view all
              <i className="ti-angle-double-right" />
            </a>
          </div>
        </div>
        {/* End of row */}
        {/* Start of Latest Movies Slider */}
        <div className="owl-carousel latest-movies-slider mt20">
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
          <MovieGridItem isColumn={false} />
        </div>
        {/* End of Latest Movies Slider */}
      </div>
    </section>
  );
}
