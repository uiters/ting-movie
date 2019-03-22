import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <header className="header header-fixed header-transparent text-white">
      <div className="container-fluid">
        {/* ====== Start of Navbar ====== */}
        <nav className="navbar navbar-expand-lg">
          <Link
            className="navbar-brand"
            style={{ paddingRight: 190 }}
            to='/'
          >
            <img
              src="../../images/logo-white.svg"
              alt="white logo"
              className="logo-white d-inline-block"
              width={36}
            />
            <span
              style={{
                fontSize: 35,
                fontWeight: 500,
                color: 'white',
                position: 'absolute',
                left: 60,
                top: 10
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
                  Home
                </Link>
              </li>
              {/* Menu Item */}
              <li className="nav-item">
                <Link className="nav-link" to="/showtimes">
                  Showtimes
                </Link>
              </li>
              {/* Menu Item */}
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
              {/* Menu Item */}
              <li className="nav-item">
                <Link className="nav-link" to='/blog'>
                  Blog
                </Link>
              </li>
              {/* Menu Item */}
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>
                  Contact us
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
                  login
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
