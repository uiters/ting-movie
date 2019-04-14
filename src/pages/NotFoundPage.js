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
        <MainHeader content='404 Page' />
        <main className="page-not-found ptb100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>404</h2>
                <h3>Sai đường rồi!</h3>
                <p>
                  Xin lỗi thí chủ đã đi lạc rồi, vui lòng lên google map hoặc liên hệ đường tăng để lấy link.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
