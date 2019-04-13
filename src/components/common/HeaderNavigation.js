import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function HeaderNavigation({ isWhite }) {
  const headerClass = classNames({
    header: true,
    'header-fixed header-transparent text-white': !isWhite
  });
  return (
    <header className={headerClass}>
      <div className="container-fluid">
        {/* ====== Start of Navbar ====== */}
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" style={{ paddingRight: 190 }} to="/">
            <img
              src={
                !isWhite
                  ? `${process.env.PUBLIC_URL}/images/logo-white.svg`
                  : `${process.env.PUBLIC_URL}/images/logo.svg`
              }
              alt="TingMovie logo"
              className="d-inline-block"
              width={36}
            />
            <span
              style={{
                fontSize: 33,
                fontWeight: 500,
                color: !isWhite ? 'white' : '#993c7f',
                position: 'absolute',
                left: 60,
                top: 5
              }}
            >
              TingMovie
            </span>
          </Link>
          <button
            id="mobile-nav-toggler"
            className="hamburger hamburger--collapse"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          {/* ====== Start of #main-nav ====== */}
          <div className="navbar-collapse" id="main-nav">
            {/* ====== Start of Main Menu ====== */}
            <ul className="navbar-nav mx-auto" id="main-menu">
              {/* Menu Item */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Trang Chủ
                </Link>
              </li>
              {/* Menu Item */}
              <li className="nav-item">
                <Link className="nav-link" to="/showtimes">
                  Lịch Chiếu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Tin Tức
                </Link>
              </li>
              {/* Menu Item */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Liên Hệ
                </Link>
              </li>
            </ul>
            {/* ====== End of Main Menu ====== */}
            {/* ====== Start of Extra Nav ====== */}
            <ul className="navbar-nav extra-nav">
              {/* Menu Item */}
              <li className="nav-item">
                <div
                  className="nav-link toggle-search"
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fa fa-search" />
                </div>
              </li>
              {/* Menu Item */}
              <li className="nav-item notification-wrapper">
                <div
                  className="nav-link notification"
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fa fa-globe" />
                  <span className="notification-count">2</span>
                </div>
              </li>
              {/* Menu Item */}
              <li className="nav-item m-auto">
                <a
                  href="#login-register-popup"
                  className="btn btn-main btn-effect login-btn popup-with-zoom-anim"
                >
                  <i className="icon-user" />
                  Đăng nhập
                </a>
              </li>
            </ul>
            {/* ====== End of Extra Nav ====== */}
          </div>
          {/* ====== End of #main-nav ====== */}
        </nav>
        {/* ====== End of Navbar ====== */}
      </div>
    </header>
  );
}

HeaderNavigation.defaultProps = {
  isWhite: false
};

export default HeaderNavigation;
