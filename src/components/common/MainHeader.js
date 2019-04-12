import React from 'react';
import { Link } from 'react-router-dom';

function MainHeader ({ content }) {
  return (
    <section
      className="page-header overlay-gradient"
      style={{
        background: `url(${
          process.env.PUBLIC_URL
        }/images/posters/movie-collection.jpg)`
      }}
    >
      <div className="container">
        <div className="inner">
          <h2 className="title">{content}</h2>
          <ol className="breadcrumb">
            <li>
              <Link to='/'>Trang chủ</Link>
            </li>
            <li>{content}</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MainHeader;

