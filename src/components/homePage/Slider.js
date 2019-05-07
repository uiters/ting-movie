import React from 'react';

export default function() {
  return (
    <div className="rev-slider-wrapper fullscreen-container overlay-gradient">
      <div
        id="fullscreen-slider"
        className="rev_slider fullscreenbanner"
        style={{ display: 'none' }}
        data-version="5.4.1"
      >
        <ul>
          {/* ===== SLIDE NR. 1 ===== */}
          <li data-transition="fade">
            {/* MAIN IMAGE */}
            <img
              src="https://s3img.vcdn.vn/123phim/2019/04/avengers-endgame-15561783796536.jpg"
              alt="slider 1"
              title="slider-bg"
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              data-bgparallax={10}
              className="rev-slidebg"
              data-no-retina
            />
            {/* LAYER NR. 1 */}
            <div
              className="tp-caption tp-resizeme"
              data-x="center"
              data-y="middle"
              data-voffset="['-30','-30','-30','-30']"
              data-responsive_offset="on"
              data-fontsize="['60','50','40','30']"
              data-lineheight="['60','50','40','30']"
              data-whitespace="nowrap"
              data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              style={{
                zIndex: 5,
                color: '#fff',
                fontWeight: 900
              }}
            />
          </li>
          {/* ===== SLIDE NR. 2 ===== */}
          <li
            data-transition="fade"
            data-slotamount={7}
            data-easein="default"
            data-easeout="default"
            data-masterspeed={2000}
          >
            {/* MAIN IMAGE */}
            <img
              src="https://s3img.vcdn.vn/123phim/2019/05/fan-cung-15567968250560.jpg"
              alt="slider 2"
              title="slider-bg"
              data-bgposition="center top"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              data-bgparallax={10}
              className="rev-slidebg"
              data-no-retina
            />
            {/* LAYER NR. 1 */}
            <div
              className="tp-caption tp-resizeme"
              data-x="center"
              data-y="middle"
              data-voffset="['-30','-30','-30','-30']"
              data-responsive_offset="on"
              data-fontsize="['60','50','40','30']"
              data-lineheight="['60','50','40','30']"
              data-whitespace="nowrap"
              data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}
            />
          </li>
          {/* ===== SLIDE NR. 3 ===== */}
          <li
            data-transition="fade"
            data-slotamount={7}
            data-easein="default"
            data-easeout="default"
            data-masterspeed={2000}
          >
            {/* MAIN IMAGE */}
            <img
              src="https://s3img.vcdn.vn/123phim/2019/05/dolls-15572261478263.jpg"
              alt="slider 3"
              data-bgposition="center top"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              data-bgparallax={3}
              className="rev-slidebg"
              data-no-retina
            />
            {/* LAYER NR. 1 */}
            <div
              className="tp-caption tp-resizeme"
              data-x="center"
              data-y="middle"
              data-voffset="['-30','-30','-30','-30']"
              data-responsive_offset="on"
              data-fontsize="['60','50','40','30']"
              data-lineheight="['60','50','40','30']"
              data-whitespace="nowrap"
              data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
