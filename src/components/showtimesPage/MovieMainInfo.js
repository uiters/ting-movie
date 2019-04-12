/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function() {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-sm-3 col-xs-4">
        <div className="movie-box-1">
          {/* Start of Poster */}
          <div className="poster">
            <img
              src="https://s3img.vcdn.vn/123phim/2019/03/lat-mat-nha-co-khach-15523777169093.jpg"
              alt="poster"
            />
          </div>
          {/* End of Poster */}
          {/* Start of Buttons */}
          <div className="buttons">
            <a
              href="https://www.youtube.com/watch?v=VSB4wGIdDwo"
              className="play-video"
            >
              <i className="fa fa-play" />
            </a>
          </div>
          {/* End of Buttons */}
        </div>
      </div>
      <div className="col-sm-9 col-xs-8 d-flex flex-column align-items-flex-start align-left">
        <p className='m-0 p-0'>12.04.2019</p>
        <h3>Terra Willy: Cuộc Phiêu Lưu Tới Hành Tinh Lạ</h3>
        <p>100 minutes - 0 IMDb - 2D</p>
        <p>
        Bộ phim lấy bối cảnh tương lai, theo sau hành trình sinh tồn của cậu bé 10 tuổi tên Willy, bị lạc mất gia đình trong một tai nạn trên tàu vũ trụ. Với sự giúp đỡ của Buck - một robot tự hành và Flash - một sinh vật bản địa dễ thương, Willy phải vượt qua những khó khăn, nguy hiểm cũng như khám phá hệ thống động - thực vật trên hành tinh kì lạ trước khi nhóm giải cứu cậu được gửi tới.
        </p>
        <a href="#" className="btn btn-main btn-effect text-center" style={{lineHeight: '45px', width: '160px'}}>
          <span>
            <i className="icon-basket" style={{ marginRight: '10px', fontSize: '15px' }} />
            Mua vé
          </span>
        </a>
      </div>
    </div>
  );
}
