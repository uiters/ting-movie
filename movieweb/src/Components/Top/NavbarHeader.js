import React, { Component } from 'react';

class NavbarHeader extends Component {
    render() {
        return (

            <div  className='d-flex flex-row justify-content-between flex-wrap '>
                <div className='p-2 flex-fill'>
                    <a href='/'>
                        <img className="webLogo" src="https://123phim.vn/app/assets/img/icons/web-logo.png" alt='' />
                    </a>
                </div>
                <div className='py-5 text-center flex-fill' >

                    <a href="filmblock"
                        className="itemColorTextBlack "
                        data-scroll="homeMovies">Lịch Chiếu </a>
                    <a href="cinemablock"
                        className="itemColorTextBlack"
                        data-scroll="homeCinemaComplex">Cụm rạp </a>
                    <a href="newsblock"
                        className="itemColorTextBlack"
                        data-scroll="homeNews">Tin Tức </a>
                    <a href="appblock"
                        className="itemColorTextBlack"
                        data-scroll="wrapHomeApp">Ứng dụng </a>

                </div>
                <div className='py-5 text-center flex-fill  ' >
                    RIGHT NAVBAR
                </div>
            </div>

        );
    }
}

export default NavbarHeader;