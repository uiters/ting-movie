import React from 'react';

export default function() {
  return (
    <div className="signin-wrapper">
      <div className="small-dialog-headline">
        <h4 className="text-center">Sign in</h4>
      </div>
      <div className="small-dialog-content">
        {/* Start of Login form */}
        <form id="cariera_login" method="post">
          <p className="status" />
          <div className="form-group">
            <label htmlFor="username">Username or Email *</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Your Username or Email *"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Your Password *"
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
              <label htmlFor="check1">Keep me signed in</label>
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
            Not a member?
            <a className="signUpClick">Sign up</a>
          </span>
          <a className="forgetPasswordClick pull-right">Forgot Password</a>
        </div>
      </div>
    </div>
  );
}
