import React from 'react';

export default function() {
  return (
    <section
      className="upcoming-movies parallax ptb100"
      data-background={`${process.env.PUBLIC_URL}/images/posters/movie-collection.jpg`}
      data-color="#3e4555"
      data-color-opacity="0.95"
    >
      <div className="container">
        {/* Start of row */}
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="title text-white">Phim sắp chiếu</h2>
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
                  src="https://icdn6.digitaltrends.com/image/avengers-endgame-720x720.jpg"
                  alt='Thien'
                  // style={{height:'860px'}}
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=JsTxPRKo5Bw"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="https://github.com/tvc12">AVENGERS: ENDGAME</a>
                </h4>
                <span className="released">Khởi chiếu: 26/04/2019</span>
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
                  src="https://image.thanhnien.vn/660/uploaded/tuyenth/2019_03_01/jj_oqot.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=6E5fisz-fL4"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="https://github.com/tvc12">X-MEN: PHƯỢNG HOÀNG BÓNG TỐI</a>
                </h4>
              </div>
              {/* End of Movie Details */}
            </div>
            {/* End of Upcoming Item 1 */}
            {/* Start of Upcoming Item 2 */}
            <div className="movie-box-1 upcoming-item mt45">
              {/* Start of Poster */}
              <div className="poster">
                <img
                  src="https://1847884116.rsc.cdn77.org/tamil/home/fastandfurious-6219m2.jpg"
                  alt=''
                />
              </div>
              {/* End of Poster */}
              {/* Start of Buttons */}
              <div className="buttons">
                <a
                  href="https://www.youtube.com/watch?v=5ds_R_K5-fc"
                  className="play-video"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* End of Buttons */}
              {/* Start of Movie Details */}
              <div className="movie-details">
                <h4 className="movie-title">
                  <a href="https://github.com/tvc12">FAST & FURIOUS: HOBBS & SHAW</a>
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
