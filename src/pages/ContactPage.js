/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { loadPackages } from '../utils';
import { Loader, HeaderNavigation, MainHeader } from '../components';

export default class extends Component {
  componentWillMount() {
    loadPackages(false);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Loader />
        <HeaderNavigation isWhite={true} />
        <MainHeader content="Liên hệ" />
        <main className="contact-page ptb100">
          <div className="container">
            <div className="row">
              {/* Start of Contact Details */}
              <div className="col-md-4 col-sm-12">
                <h3 className="title">Info</h3>
                <div className="details-wrapper">
                  <p>
                  SẢN PHẨM CỦA CÔNG TY TNHH MTV TING - DỊCH VỤ XUYÊN QUỐC GIA TING
                  </p>
                  <ul className="contact-details">
                    <li>
                      <i className="icon-phone" />
                      <strong>Phone:</strong>
                      <span>(84) 966-144-938 </span>
                    </li>
                    <li>
                      <i className="icon-printer" />
                      <strong>Fax:</strong>
                      <span>(123) 123-456-234 </span>
                    </li>
                    <li>
                      <i className="icon-globe" />
                      <strong>Web:</strong>
                      <span>
                        <a href="https://github.com/tvc12">www.tingmovie.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icon-paper-plane" />
                      <strong>E-Mail:</strong>
                      <span>
                        <a href="https://github.com/tvc12">ting.movie@gmail.com</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Start of Contact Details */}
              {/* Start of Contact Form */}
              <div className="col-md-8 col-sm-12">
                <h3 className="title">Hỗ trợ</h3>
                {/* Start of Contact Form */}
                <form id="contact-form">
                  {/* contact result */}
                  <div id="contact-result" />
                  {/* end of contact result */}
                  {/* Form Group */}
                  <div className="form-group">
                    <input
                      className="form-control input-box"
                      type="text"
                      name="name"
                      placeholder="Tên của bạn"
                      autoComplete="off"
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group">
                    <input
                      className="form-control input-box"
                      type="email"
                      name="email"
                      placeholder="Email của bạn"
                      autoComplete="off"
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group">
                    <input
                      className="form-control input-box"
                      type="text"
                      name="subject"
                      placeholder="Tiêu đề hỗ trợ"
                      autoComplete="off"
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group mb20">
                    <textarea
                      className="form-control textarea-box"
                      rows={8}
                      name="message"
                      placeholder="Nội dung cần hỗ trợ"
                      defaultValue={''}
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group text-center">
                    <button className="btn btn-main btn-effect" type="submit">
                      Gửi hỗ trợ
                    </button>
                  </div>
                </form>
                {/* End of Contact Form */}
              </div>
              {/* Start of Contact Form */}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
