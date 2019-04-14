/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { loadPackages } from '../utils';
import {
  Loader,
  HeaderNavigation,
  MainHeader,
  SearchForm,
  MovieGridItem,
  Pagination
} from '../components';

class ShowtimesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      keyword: ''
    };
  }

  componentWillMount() {
    loadPackages(false);
    this.getPage();
    this.getKeyword();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getKeyword();
    this.props.onFetchMovies(this.state.keyword);
    this.getPage();
  }

  componentWillUpdate() {
    loadPackages();
  }

  componentWillReceiveProps(nextProps) {
    const params = new URLSearchParams(nextProps.location.search);
    this.setState({ page: parseInt(params.get('page')) || 1 });
    this.setState({ keyword: params.get('search-keyword') || '' });
  }

  getPage() {
    const params = new URLSearchParams(this.props.location.search);
    this.setState({ page: parseInt(params.get('page')) || 1 });
  }

  getKeyword() {
    const params = new URLSearchParams(this.props.location.search);
    const keyword = params.get('search-keyword') || '';
    this.setState({ keyword });
  }

  renderMovies() {
    const { page = 1, keyword } = this.state;
    const { movies, movieResults } = this.props;

    const perPage = 8;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    const currentMovies = keyword ? movieResults : movies;
    return [...currentMovies]
      .slice(start, end)
      .map((movie, index) => <MovieGridItem key={index} movie={movie} />);
  }

  renderData() {
    const { isFetching, isError } = this.props;

    const movieList =
      this.renderMovies().length > 0 ? (
        this.renderMovies()
      ) : (
        <div className="container">
          <h5 className="title text-center" style={{ color: '#9c3064' }}>
            Không tìm thấy phim. Vui lòng thử lại!
          </h5>
        </div>
      );

    const data = isFetching ? (
      <ClipLoader sizeUnit={'px'} size={40} color={'#9c3064'} />
    ) : isError ? (
      <div className="container">
        <h5 className="title text-center" style={{ color: '#9c3064' }}>
          Không tìm thấy phim. Vui lòng thử lại!
        </h5>
      </div>
    ) : (
      movieList
    );

    return data;
  }

  renderPagination() {
    const { isFetching, isError } = this.props;
    if (this.renderMovies().length > 0 && !isFetching && !isError) {
      return (
        <Pagination
          movieCount={this.props.movies.length || 0}
          perPage={8}
          currentPage={this.state.page || 1}
        />
      );
    }
  }

  renderMovieTypes() {
    if (this.renderMovies().length > 0) {
      return (
        <ul className="nav justify-content-center mt-5">
          <li className="nav-item">
            <a
              className="nav-link text-danger font-weight-bold"
              href="#"
              style={{ fontSize: '24px' }}
            >
              Đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              href="#"
              style={{ fontSize: '24px' }}
            >
              Sắp chiếu
            </a>
          </li>
        </ul>
      );
    }
  }

  renderSearchForm() {
    const { keyword } = this.state;
    return (
      <div>
        <SearchForm />
        {keyword && (
          <h5 className="title text-center" style={{ color: '#9c3064' }}>
            Kết quả tìm kiếm cho "{keyword}".
          </h5>
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Loader />
        <HeaderNavigation isWhite={true} />
        <MainHeader content="Lịch chiếu" />
        <div className="ptb100">
          <div className="container">
            {this.renderSearchForm()}
            {this.renderMovieTypes()}
            <div className="row">{this.renderData()}</div>
            {this.renderPagination()}
          </div>
        </div>
      </div>
    );
  }
}

ShowtimesPage.propTypes = {
  location: PropTypes.object,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  movies: PropTypes.array,
  movieResults: PropTypes.array,
  onFetchMovies: PropTypes.func
};

export default ShowtimesPage;
