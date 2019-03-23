import React from 'react';

export default function() {
  return (
    <section className="how-it-works bg-light ptb100">
      <div className="container">
        {/* Start of row */}
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="title">How it works?</h2>
            <h6 className="subtitle">
              We will show you step by step how to start watching your favorite
              movies starting now!
            </h6>
          </div>
        </div>
        {/* End of row */}
        {/* Start of Timeline */}
        <div className="timeline">
          <span className="main-line" />
          {/* === Start of Timeline Step 1 === */}
          <div className="timeline-step row">
            <span className="timeline-step-btn">Step 1</span>
            {/* Start of Timeline Text */}
            <div className="col-md-6 col-sm-12 timeline-text-wrapper">
              <div className="timeline-text">
                <h3>Create an account</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            {/* End of Timeline Text */}
            {/* Start of Timeline Image */}
            <div className="col-md-6 col-sm-12 timeline-image-wrapper">
              <div className="timeline-image">
                <img
                  src="../../images/other/signup.png"
                  alt=''
                />
              </div>
            </div>
            {/* End of Timeline Image */}
          </div>
          {/* === End of Timeline Step 1 === */}
          {/* === Start of Timeline Step 2 === */}
          <div className="timeline-step row">
            <span
              className="timeline-step-btn"
              style={{ color: '#2a7bc2', background: '#c1ddf5' }}
            >
              Step 2
            </span>
            {/* Start of Timeline Image */}
            <div className="col-md-6 col-sm-12 timeline-image-wrapper">
              <div className="timeline-image">
                <img
                  src="../../images/other/pricing.png"
                  alt=''
                />
              </div>
            </div>
            {/* End of Timeline Image */}
            {/* Start of Timeline Text */}
            <div className="col-md-6 col-sm-12 timeline-text-wrapper">
              <div className="timeline-text-right">
                <h3>Choose your Plan</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            {/* End of Timeline Text */}
          </div>
          {/* === End of Timeline Step 2 === */}
          {/* === Start of Timeline Step 3 === */}
          <div className="timeline-step row">
            <span
              className="timeline-step-btn"
              style={{ color: '#eb305f', background: '#f9c8d4' }}
            >
              Step 3
            </span>
            {/* Start of Timeline Text */}
            <div className="col-md-6 col-sm-12 timeline-text-wrapper">
              <div className="timeline-text">
                <h3>Enjoy TingMovie</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            {/* End of Timeline Text */}
            {/* Start of Timeline Image */}
            <div className="col-md-6 col-sm-12 timeline-image-wrapper">
              <div className="timeline-image">
                <img
                  src="../../images/logo.svg"
                  width={250}
                  alt=''
                />
              </div>
            </div>
            {/* End of Timeline Image */}
          </div>
          {/* === End of Timeline Step 3 === */}
        </div>
        {/* End of Timeline */}
      </div>
    </section>
  );
}
