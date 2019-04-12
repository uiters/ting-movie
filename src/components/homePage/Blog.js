import React from 'react';

export default function() {
  return (
    <section className="blog bg-light ptb100">
      <div className="container">
        {/* Start of row */}
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="title">Tin Tức</h2>
          </div>
        </div>
        {/* End of row */}
        {/* Start of row */}
        <div className="row mt50">
          {/* 1st Blog Item */}
          <div className="col-md-4">
            <div className="bloglist-post-holder shadow-hover">
              {/* Blog Post Thumbnail */}
              <a href="https://github.com/tvc12" className="bloglist-thumb-link hover-link">
                <div
                  className="bloglist-post-thumbnail"
                  style={{
                    background:
                      'url(https://s3img.vcdn.vn/123phim/2019/03/shazam-01-4decb9.jpg)'
                  }}
                />
              </a>
              {/* Blog Post Text Wrapper */}
              <div className="bloglist-text-wrapper">
                {/* Author Avatar */}
                <span className="circle-img bloglist-avatar">
                  <img
                    src="https://github.com/tvc12.png"
                    width={50}
                    height={50}
                    alt="author img"
                  />
                </span>
                <h4 className="bloglist-title">
                  <a href="https://github.com/tvc12">Shazam - siêu anh hùng nhà DC</a>
                </h4>
                <div className="bloglist-meta">
                  <i className="fa fa-calendar" /> 13/04/2019
                </div>
                <div className="bloglist-excerpt">
                  <p>
                  Shazam đang được giới phê bình khen ngợi hết lời và được dự đoán sẽ trở thành hiện tượng siêu anh hùng mới.
                  </p>
                  <a href="https://github.com/tvc12" className="btn btn-main btn-effect">
                    Chi tiết
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Blog Item */}
          <div className="col-md-4">
            <div className="bloglist-post-holder shadow-hover">
              {/* Blog Post Thumbnail */}
              <a href="https://github.com/tvc12" className="bloglist-thumb-link hover-link">
                <div
                  className="bloglist-post-thumbnail"
                  style={{
                    background:
                      'url(https://s3img.vcdn.vn/123phim/2019/03/chung-ta-03-e7cacf.jpg)'
                  }}
                />
              </a>
              {/* Blog Post Text Wrapper */}
              <div className="bloglist-text-wrapper">
                {/* Author Avatar */}
                <span className="circle-img bloglist-avatar">
                  <img
                    src="https://github.com/cuongw.png"
                    width={50}
                    height={50}
                    alt="author img"
                  />
                </span>
                <h4 className="bloglist-title">
                  <a href="https://github.com/tvc12">Siêu phẩm kinh dị Chúng Ta nhận mưa lời khen</a>
                </h4>
                <div className="bloglist-meta">
                  <i className="fa fa-calendar" /> 14/04/2019
                </div>
                <div className="bloglist-excerpt">
                  <p>
                  Tiếp nối cơn sốt của bộ Get Out, đạo diễn Jordan Peele lại cho ra mắt một tác phẩm kinh dị có một không hai trong năm 2019.
                  </p>
                  <a href="https://github.com/cuongw" className="btn btn-main btn-effect">
                    Chi tiết
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd Blog Item */}
          <div className="col-md-4">
            <div className="bloglist-post-holder shadow-hover">
              {/* Blog Post Thumbnail */}
              <a href="https://github.com/tvc12" className="bloglist-thumb-link hover-link">
                <div
                  className="bloglist-post-thumbnail"
                  style={{
                    background:
                      'url(https://s3img.vcdn.vn/123phim/2019/03/doa-hong-cua-toi-05-524b87.jpg)'
                  }}
                />
              </a>
              {/* Blog Post Text Wrapper */}
              <div className="bloglist-text-wrapper">
                {/* Author Avatar */}
                <span className="circle-img bloglist-avatar">
                  <img
                    src="https://github.com/tvc12.png"
                    width={50}
                    height={50}
                    alt="author img"
                  />
                </span>
                <h4 className="bloglist-title">
                  <a href="https://github.com/tvc12">Yoo Ho Jeong trở lại màn ảnh với vai bà mẹ idol</a>
                </h4>
                <div className="bloglist-meta">
                  <i className="fa fa-calendar" /> 13/04/2019
                </div>
                <div className="bloglist-excerpt">
                  <p>
                  Trong Đóa Hồng Của Tôi, Yoo Ho Jeong hóa thân thành một người mẹ có quá khứ ca hát bùng nổ.
                  </p>
                  <a href="https://github.com/tvc12" className="btn btn-main btn-effect">
                    Chi tiết
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of row */}
      </div>
    </section>
  );
}
