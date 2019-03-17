import React, { Component } from 'react'

export default class HomeTool extends Component {
    render() {
        return (
                <div id="homeTools" className="row">
                    <div className="w30p widthByPercent dropdown selectFilm" id="selectMoive">
                        <div className="dropdown-toggle selectMenu white ng-binding" data-toggle="dropdown">Phim</div>
                        <ul className="dropdown-menu selectScroll">
                            <li className="ng-scope">
                                <a className="ng-binding" href='/'>Đại Úy Marvel - Captain Marvel (C13)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="smallBlock widthByPercent dropdown selectCinema" id="selectMoive">
                        <div className="dropdown-toggle selectMenu white ng-binding" data-toggle="dropdown">Rạp</div>
                        <ul className="dropdown-menu selectScroll">
                            <li className="ng-scope">
                                <a className="ng-binding" href='/'>Đại Úy Marvel - Captain Marvel (C13)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="smallBlock widthByPercent dropdown selectDate" id="selectMoive">
                        <div className="dropdown-toggle selectMenu white ng-binding" data-toggle="dropdown">Ngày xem</div>
                        <ul className="dropdown-menu selectScroll">
                            <li className="ng-scope">
                                <a className="ng-binding" href='/'>Đại Úy Marvel - Captain Marvel (C13)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="smallBlock widthByPercent dropdown selectSection" id="selectMoive">
                        <div className="dropdown-toggle selectMenu white ng-binding" data-toggle="dropdown">Xuất chiếu</div>
                        <ul className="dropdown-menu selectScroll">
                            <li className="ng-scope">
                                <a className="ng-binding" href='/'>Đại Úy Marvel - Captain Marvel (C13)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="smallBlock widthByPercent">
                         <div className="after-btn"></div>
                        <div className="before-btn"></div>
                        <button type="button" className="btn btn-primary btnHomeTool" id="btnBuy">MUA VÉ NGAY</button>
                    </div>               
            </div>
        )
    }
}
