import React from 'react';

export default function() {
  return (
    <div className="forgetpassword-wrapper">
      <div className="small-dialog-headline">
        <h4 className="text-center">Forgotten Password</h4>
      </div>
      <div className="small-dialog-content">
        {/* Start of Forger Password form */}
        <form id="forget_pass_form" action="#" method="post">
          <p className="status" />
          <div className="form-group">
            <label htmlFor="password">Email Address *</label>
            <input
              type="email"
              name="user_login"
              className="form-control"
              id="email3"
              placeholder="Email Address *"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              name="submit"
              defaultValue="Get New Password"
              className="btn btn-main btn-effect nomargin"
            />
          </div>
        </form>
        {/* End of Forger Password form */}
        <div className="bottom-links">
          <a className="cancelClick" href="https://github.com/cuongw">
            Cancel
          </a>
        </div>
      </div>
      {/* .small-dialog-content */}
    </div>
  );
}
