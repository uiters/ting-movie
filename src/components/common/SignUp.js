/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function() {
  return (
    <div className="signup-wrapper">
      <div className="small-dialog-headline">
        <h4 className="text-center">Đăng ký</h4>
      </div>
      <div className="small-dialog-content">
        {/* Start of Registration form */}
        <form id="cariera_registration" action="#" method="POST">
          <p className="status" />
          <div className="form-group">
            <label htmlFor="movify_user_login">Tên đăng nhập</label>
            <input
              name="movify_user_login"
              id="movify_user_login"
              className="form-control"
              type="text"
              placeholder="Tên đăng nhập *"
            />
          </div>
          <div className="form-group">
            <label htmlFor="movify_user_email">Email</label>
            <input
              name="movify_user_email"
              id="movify_user_email"
              className="form-control"
              type="email"
              placeholder="Email *"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              name="movify_user_pass"
              id="movify_password"
              className="form-control"
              type="password"
              placeholder="Mật khẩu *"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-main btn-effect nomargin"
              defaultValue="Register"
            />
          </div>
        </form>
        {/* End of Registration form */}
        <div className="bottom-links">
          <span>
            Bạn đã có tài khoản?
            <a className="signInClick"> Đăng nhập</a>
          </span>
        </div>
      </div>{' '}
      {/* .small-dialog-content */}
    </div>
  );
}
