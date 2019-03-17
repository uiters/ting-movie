import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselId" className="carousel slide container" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselId" data-slide-to="1"></li>
                    <li data-target="#carouselId" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner marginHomeTool" role="listbox">
                    <div className="carousel-item active">
                        <img src="https://s3img.vcdn.vn/123phim/2019/03/cong-vien-ky-dieu-15526242940242.jpg" alt="Second slide" width="100%" />
                        <div className="backgroundLinear"></div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3img.vcdn.vn/123phim/2019/03/dai-uy-marvel-15514145585840.jpg" alt="Third slide"  width="100%"/>
                        <div className="backgroundLinear"></div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3img.vcdn.vn/123phim/2019/02/vu-quy-dai-nao-15508021506204.jpg" alt="First slide"  width="100%" />
                        <div className="backgroundLinear"></div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div >
        );
    }
}

export default Carousel;

