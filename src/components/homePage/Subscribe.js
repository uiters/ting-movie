import React from 'react';

export default function() {
  return (
    <section className="subscribe bg-light2 ptb100">
      <div className="container">
        {/* Start of row */}
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="title">Nhận tin tức từ TingMovie!</h2>
            <h6 className="subtitle">
              Đăng ký để nhận các tin tức mới nhất từ TingMovie
            </h6>
          </div>
        </div>
        {/* End of row */}
        {/* Start of row */}
        <div className="row justify-content-center">
          <div className="col-md-7 col-sm-10 col-12">
            {/* Subscribe Form */}
            <form action="#" className="mailchimp mt50" noValidate>
              {/* Form */}
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="email"
                    name="EMAIL"
                    className="form-control"
                    id="mc-email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                  <label htmlFor="mc-email" />
                  <button type="submit" className="btn btn-main btn-effect">
                    Theo dõi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End of row */}
      </div>
    </section>
  );
}
