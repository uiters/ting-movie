import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        {/* Start Show Info Schedual */}
        <div id="colorbox" className role="dialog" tabIndex={-1} style={{ display: 'block', left: '400px', top: '200px', height: '583px' }}>
          {/* Start Content*/}
          <div id="cboxContent" style={{ width: '783px', height: '563px' }}>

            {/* Start Loading Time */}
            <div id="cboxLoadedContent" style={{ width: '773px', overflow: 'auto', height: '553px' }}>
              <div class="product-view quick-booking cgv-schedule-popup">

                <div class="product-collateral toggle-content tabs tabs-cgv-movie-view-date ml20">
                  {/* Start Show date */}
                  <ul className="toggle-tabs">
                    {/* Start current date */}
                    <li className="current">
                      <div className="day" >
                        <span>03</span>
                        <em>Tue</em>
                        <strong>26</strong>
                      </div>
                    </li>
                    {/* Finsh current date */}

                    {/* Start Date 1 */}
                    <li>
                      <div className="day" >
                        <span>03</span>
                        <em>Wed</em>
                        <strong>27</strong>
                      </div>
                    </li>
                    {/* Finish Date 1 */}
                    {/* Start Date 2 */}
                    <li>
                      <div className="day" >
                        <span>03</span>
                        <em>Thu</em>
                        <strong>28</strong>
                      </div>
                    </li>
                    {/* Finish Date 2 */}
                    {/* Start Date 3 */}
                    <li>
                      <div className="day" >
                        <span>03</span>
                        <em>Fri</em>
                        <strong>29</strong>
                      </div>
                    </li>
                    {/* Finish Date 3 */}
                    {/* Start Date 4 */}
                    <li>
                      <div className="day" >
                        <span>03</span>
                        <em>Sat</em>
                        <strong>30</strong>
                      </div>
                    </li>
                    {/* Finish Date 4 */}
                  </ul>
                  {/* Finish Show Date */}
                  {/* Start Show Address */}
                  <dl id="collateral-tabs" className="collateral-tabs">
                    <dd className="tab-container current">

                      <div className="tab-content showtimes">

                        <div className="product-collateral toggle-content tabs tabs-cgv-movie-cites">
                          {/* Start Show List Address */}
                          <ul className="toggle-tabs"><li class="current">
                            <span > Hồ Chí Minh</span>
                          </li><li>
                              <span>Hà Nội</span>
                            </li><li>
                              <span>Đà Nẵng</span>
                            </li><li>
                              <span>Cần Thơ</span>
                            </li><li>
                              <span>Đồng Nai</span>
                            </li><li>
                              <span>Hải Phòng</span>
                            </li><li>
                              <span>Quảng Ninh</span>
                            </li><li>
                              <span>Bà Rịa-Vũng Tàu</span>
                            </li><li>
                              <span>Bình Định</span>
                            </li><li>
                              <span>Bình Dương</span>
                            </li><li>
                              <span>Vĩnh Long</span>
                            </li><li>
                              <span>Kiên Giang</span>
                            </li><li>
                              <span>Phú Yên</span>
                            </li>

                            <li>
                              <span>Quảng Ngãi</span>
                            </li>

                          </ul>
                          {/* Finish Show List Address */}

                          {/* Start Show Theater And Time */}
                          <dl id="collateral-tabs" className="collateral-tabs">

                            {/* Start Show Address Current */}

                            <dt className="tab current">
                              <span>Hồ Chí Minh</span>
                            </dt>
                            {/* Finsh Show Address Current */}

                            <dd className="tab-container current">

                              <div className="product-collateral toggle-content tabs tabs-cgv-movie-type">
                                {/* Start Show Theater Type*/}
                                <ul className="toggle-tabs">
                                  <li className="last current">
                                    <span>2D Phụ Đề Việt</span>
                                  </li></ul>
                                {/* Finish Show Theater Type */}

                                {/* Start Show InFo Of Theater */}
                                <dl id="collateral-tabs" class="collateral-tabs">

                                  <dd className="tab-container last current">

                                    <div className="tab-content showtimes">

                                      {/* Start Show Info Of Threater 1 */}
                                      <div className="site sitecgv">
                                        <div className="site"><h3>CGV Pearl Plaza</h3></div>
                                        <div className="cinema 2d"><h4>Rạp 2D</h4></div>
                                        {/* Start Show Time  Movie */}
                                        <ul className="products-grid-movie tab-showtime">
                                          {/* Start Time 1 */}
                                          <li className="item">

                                            <span>19:50 PM</span><br />
                                            <span>34 ghế trống</span>

                                          </li>
                                          {/* Finish Time 1 */}
                                          <li className="item">
                                            <span>21:30 PM</span><br />
                                            <span>146 ghế trống</span>
                                          </li>
                                          <li className="item">

                                            <span>22:05 PM</span><br />
                                            <span>90 ghế trống</span>

                                          </li>
                                        </ul>
                                        {/* Finish Show Time  Movie */}
                                      </div>
                                      {/* Finish Show Info Of Threater 1 */}

                                      {/* Start Show Info Of Threater 2 */}
                                      <div className="site sitecgv">
                                        <div className="site"><h3>CGV Giga Mall Thủ Đức</h3></div>
                                        <div className="cinema 2d"><h4>Rạp 2D</h4></div>
                                        <ul className="products-grid-movie tab-showtime">
                                          <li className="item">

                                            <span>19:45 PM</span><br />
                                            <span>127 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>20:30 PM</span><br />
                                            <span>110 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>21:20 PM</span><br />
                                            <span>188 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>22:10 PM</span><br />
                                            <span>158 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>23:00 PM</span><br />
                                            <span>112 ghế trống</span>

                                          </li>
                                        </ul>
                                      </div>
                                      {/* Finish Show Info Of Threater 2 */}

                                      {/* Start Show Info Of Threater 3 */}
                                      <div className="site sitecgv">
                                        <div className="site"><h3>CGV Sư Vạn Hạnh</h3></div>
                                        <div className="cinema 2d"><h4>Rạp 2D</h4></div>
                                        <ul className="products-grid-movie tab-showtime">
                                          <li className="item">

                                            <span>20:00 PM</span><br />
                                            <span>105 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>20:30 PM</span><br />
                                            <span>144 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>22:00 PM</span><br />
                                            <span>437 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>22:30 PM</span><br />
                                            <span>143 ghế trống</span>

                                          </li>
                                          <li className="item">

                                            <span>23:00 PM</span><br />
                                            <span>178 ghế trống</span>

                                          </li>
                                        </ul>
                                      </div>
                                      {/* Finish Show Info Of Threater 3 */}
                                    </div>

                                  </dd>

                                </dl>
                                {/* Start Show InFo Of Theater */}
                              </div>

                            </dd>


                          </dl>

                          {/* Finish Show Theater And Time */}
                        </div>
                      </div>

                    </dd>


                  </dl>
                  {/* Finish Show Address */}

                </div>

              </div>

            </div>
            {/* Finish Loading Time */}
          </div>
          {/* Finish Content*/}
        </div>
        {/* Finish Show Info Schedual */}
      </div>
    )
  }
}
