import React from 'react';

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
            <a href="https://github.com/cuongw" className="btn btn-icon btn-main btn-effect">
              view all
              <i className="ti-angle-double-right" />
            </a>
          </div>
        </div>
        {/* End of row */}
        {/* Start of Latest Movies Slider */}
        <div className="owl-carousel latest-movies-slider mt20">
          {/* === Start of Sliding Item 1 === */}
          <div className="item">
            {/* Start of Movie Box */}
            <div className="movie-box-1">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/posters/poster-1.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=WIbe-PmR5vk"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">Star Wars</a>
                </h4>
                <span className="released">14 Dec 2017</span>
              </div>
              {/* End of Movie Details */}
              {/* Start of Rating */}
              <div className="stars">
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>7.5 / 10</span>
              </div>
              {/* End of Rating */}
            </div>
            {/* End of Movie Box */}
          </div>
          {/* === End of Sliding Item 1 === */}
          {/* === Start of Sliding Item 2 === */}
          <div className="item">
            {/* Start of Movie Box */}
            <div className="movie-box-1">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/posters/poster-2.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=WIbe-PmR5vk"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">The Brain</a>
                </h4>
                <span className="released">20 Dec 2017</span>
              </div>
              {/* End of Movie Details */}
              {/* Start of Rating */}
              <div className="stars">
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <i className="fa fa-star-o" />
                </div>
                <span>7.2 / 10</span>
              </div>
              {/* End of Rating */}
            </div>
            {/* End of Movie Box */}
          </div>
          {/* === End of Sliding Item 2 === */}
          {/* === Start of Sliding Item 3 === */}
          <div className="item">
            {/* Start of Movie Box */}
            <div className="movie-box-1">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/posters/poster-3.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=WIbe-PmR5vk"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">The Mummy</a>
                </h4>
                <span className="released">9 Jun 2017</span>
              </div>
              {/* End of Movie Details */}
              {/* Start of Rating */}
              <div className="stars">
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <span>5.5 / 10</span>
              </div>
              {/* End of Rating */}
            </div>
            {/* End of Movie Box */}
          </div>
          {/* === End of Sliding Item 3 === */}
          {/* === Start of Sliding Item 4 === */}
          <div className="item">
            {/* Start of Movie Box */}
            <div className="movie-box-1">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/posters/poster-4.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=WIbe-PmR5vk"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">The Parrot</a>
                </h4>
                <span className="released">20 Jan 2017</span>
              </div>
              {/* End of Movie Details */}
              {/* Start of Rating */}
              <div className="stars">
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <span>5.2 / 10</span>
              </div>
              {/* End of Rating */}
            </div>
            {/* End of Movie Box */}
          </div>
          {/* === End of Sliding Item 4 === */}
          {/* === Start of Sliding Item 5 === */}
          <div className="item">
            {/* Start of Movie Box */}
            <div className="movie-box-1">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/posters/poster-1.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=WIbe-PmR5vk"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">Star Wars</a>
                </h4>
                <span className="released">14 Dec 2017</span>
              </div>
              {/* End of Movie Details */}
              {/* Start of Rating */}
              <div className="stars">
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <span>7.5 / 10</span>
              </div>
              {/* End of Rating */}
            </div>
            {/* End of Movie Box */}
          </div>
          {/* === End of Sliding Item 5 === */}
          {/* === Start of Sliding Item 6 === */}
          <div className="item">
            {/* Start of Movie Box */}
            <div className="movie-box-1">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/posters/poster-2.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=WIbe-PmR5vk"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">The Brain</a>
                </h4>
                <span className="released">20 Dec 2017</span>
              </div>
              {/* End of Movie Details */}
              {/* Start of Rating */}
              <div className="stars">
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <i className="fa fa-star-o" />
                </div>
                <span>7.2 / 10</span>
              </div>
              {/* End of Rating */}
            </div>
            {/* End of Movie Box */}
          </div>
          {/* === End of Sliding Item 6 === */}
        </div>
        {/* End of Latest Movies Slider */}
      </div>
    </section>
  );
}
