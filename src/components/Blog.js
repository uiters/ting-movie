import React from 'react';

export default function() {
  return (
    <section className="blog bg-light ptb100">
      <div className="container">
        {/* Start of row */}
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="title">Latest News</h2>
            <h6 className="subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy consectetuer adipiscing.
            </h6>
          </div>
        </div>
        {/* End of row */}
        {/* Start of row */}
        <div className="row mt50">
          {/* 1st Blog Item */}
          <div className="col-md-4">
            <div className="bloglist-post-holder shadow-hover">
              {/* Blog Post Thumbnail */}
              <a href="index.html" className="bloglist-thumb-link hover-link">
                <div
                  className="bloglist-post-thumbnail"
                  style={{
                    background:
                      'url(../../images/blog/bloglist-1.jpg)'
                  }}
                />
              </a>
              {/* Blog Post Text Wrapper */}
              <div className="bloglist-text-wrapper">
                {/* Author Avatar */}
                <span className="circle-img bloglist-avatar">
                  <img
                    src="../../images/user.png"
                    width={50}
                    height={50}
                    alt="author img"
                  />
                </span>
                <h4 className="bloglist-title">
                  <a href="index.html">Top 10 Action Movies</a>
                </h4>
                <div className="bloglist-meta">
                  <i className="fa fa-calendar" /> 01/02/2018
                </div>
                <div className="bloglist-excerpt">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis...
                  </p>
                  <a href="#" className="btn btn-main btn-effect">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Blog Item */}
          <div className="col-md-4">
            <div className="bloglist-post-holder shadow-hover">
              {/* Blog Post Thumbnail */}
              <a href="index.html" className="bloglist-thumb-link hover-link">
                <div
                  className="bloglist-post-thumbnail"
                  style={{
                    background:
                      'url(../../images/blog/bloglist-2.jpg)'
                  }}
                />
              </a>
              {/* Blog Post Text Wrapper */}
              <div className="bloglist-text-wrapper">
                {/* Author Avatar */}
                <span className="circle-img bloglist-avatar">
                  <img
                    src="../../images/user.png"
                    width={50}
                    height={50}
                    alt="author img"
                  />
                </span>
                <h4 className="bloglist-title">
                  <a href="index.html">Oscar Awards</a>
                </h4>
                <div className="bloglist-meta">
                  <i className="fa fa-calendar" /> 01/02/2018
                </div>
                <div className="bloglist-excerpt">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis...
                  </p>
                  <a href="#" className="btn btn-main btn-effect">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd Blog Item */}
          <div className="col-md-4">
            <div className="bloglist-post-holder shadow-hover">
              {/* Blog Post Thumbnail */}
              <a href="index.html" className="bloglist-thumb-link hover-link">
                <div
                  className="bloglist-post-thumbnail"
                  style={{
                    background:
                      'url(../../images/blog/bloglist-3.jpg)'
                  }}
                />
              </a>
              {/* Blog Post Text Wrapper */}
              <div className="bloglist-text-wrapper">
                {/* Author Avatar */}
                <span className="circle-img bloglist-avatar">
                  <img
                    src="../../images/user.png"
                    width={50}
                    height={50}
                    alt="author img"
                  />
                </span>
                <h4 className="bloglist-title">
                  <a href="index.html">Top Upcoming Movies</a>
                </h4>
                <div className="bloglist-meta">
                  <i className="fa fa-calendar" /> 01/02/2018
                </div>
                <div className="bloglist-excerpt">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis...
                  </p>
                  <a href="#" className="btn btn-main btn-effect">
                    read more
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
