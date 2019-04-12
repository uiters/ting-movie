/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function() {
  return (
    <div className="signin-wrapper">
      <div className="small-dialog-headline">
        <h4 className="text-center">Đăng nhập</h4>
      </div>
      <div className="small-dialog-content">
        {/* Start of Login form */}
        <form id="cariera_login" method="post">
          <p className="status" />
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập hoặc Email *</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Tên đăng nhập hoặc Email *"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu *</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Mật khẩu *"
            />
          </div>
          <div className="form-group">
            <div className="checkbox pad-bottom-10">
              <input
                id="check1"
                type="checkbox"
                name="remember"
                defaultValue="yes"
              />
              <label htmlFor="check1">Nhớ tên đăng nhập</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              defaultValue="Sign in"
              className="btn btn-main btn-effect nomargin"
            />
          </div>
        </form>
        {/* End of Login form */}
        <div className="bottom-links">
          <span>
            Không phải thành viên?
            <a className="signUpClick"> Đăng ký</a>
          </span>
          <a className="forgetPasswordClick pull-right">Quên mật khẩu</a>
        </div>
      </div>
    </div>
  );
}
