import React from 'react';

export default function() {
  return (
    <section
      className="upcoming-movies parallax ptb100"
      data-background="assets/images/posters/movie-collection.jpg"
      data-color="#3e4555"
      data-color-opacity="0.95"
    >
      <div className="container">
        {/* Start of row */}
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="title text-white">Upcoming Movies</h2>
          </div>
        </div>
        {/* End of row */}
        {/* Start of row */}
        <div className="row mt50">
          {/* === Start of Upcoming Featured Movies & TV Shows === */}
          <div className="col-md-8">
            {/* Start of Upcoming Featured Item */}
            <div className="movie-box-1 upcoming-featured-item">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/movies/upcoming-featured-item.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">Tomb Raider</a>
                </h4>
                <span className="released">Release Date: 15 Mar 2018</span>
              </div>
              {/* End of Movie Details */}
            </div>
            {/* End of Upcoming Featured Item */}
          </div>
          {/* === End of Upcoming Featured Movies & TV Shows === */}
          {/* === Start of Upcoming Movies & TV Shows === */}
          <div className="col-md-4">
            {/* Start of Upcoming Item 1 */}
            <div className="movie-box-1 upcoming-item">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/movies/upcoming-item-1.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">The Jungle</a>
                </h4>
              </div>
              {/* End of Movie Details */}
            </div>
            {/* End of Upcoming Item 1 */}
            {/* Start of Upcoming Item 2 */}
            <div className="movie-box-1 upcoming-item mt20">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="../../images/movies/upcoming-item-2.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="index.html">Fast and Furious</a>
                </h4>
              </div>
              {/* End of Movie Details */}
            </div>
            {/* End of Upcoming Item 2 */}
          </div>
          {/* === End of Upcoming Movies & TV Shows === */}
        </div>
        {/* End of row */}
      </div>
    </section>
  );
}
