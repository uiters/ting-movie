import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentWillMount() {
    this.setState({
      currentPage: this.props.currentPage
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: nextProps.currentPage
    });
  }

  renderPages = () => {
    const { perPage, movieCount, currentPage } = this.props;

    if (movieCount === 0) {
      return;
    }

    let pages = [];
    const lastPage = Math.ceil(movieCount / perPage);
    if (movieCount > 0 && currentPage === 1) {
      pages.push(1, 2, 3);
    }
    if (movieCount > 0 && currentPage === lastPage) {
      pages.push(currentPage - 2, currentPage - 1, currentPage);
    }
    if (currentPage > 1 && currentPage < lastPage) {
      pages.push(currentPage - 1, currentPage, currentPage + 1);
    }
    if (lastPage === 2) {
      pages = [];
      pages.push(1, 2);
    }
    if (lastPage === 1) {
      pages = [];
      pages.push(1);
    }

    return pages.map((page, index) => (
      <li key={index}>
        <Link
          to={{ pathname: '/showtimes', search: `?page=${page}` }}
          className={page === currentPage ? 'current-page' : ''}
        >
          {page}
        </Link>
      </li>
    ));
  };

  render() {
    const { perPage, movieCount, currentPage } = this.props;
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <nav className="pagination">
            <ul>
              {currentPage !== 1 && (
                <Link
                  to={{
                    pathname: '/showtimes',
                    search: `?page=${currentPage - 1}`
                  }}
                >
                  <i className="ti-angle-left" />
                </Link>
              )}
              {this.renderPages()}
              {currentPage !== Math.ceil(movieCount / perPage) && (
                <Link
                  to={{
                    pathname: '/showtimes',
                    search: `?page=${currentPage + 1}`
                  }}
                >
                  <i className="ti-angle-right" />
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  movieCount: PropTypes.number,
  perPage: PropTypes.number,
  currentPage: PropTypes.number
};

export default Pagination;
