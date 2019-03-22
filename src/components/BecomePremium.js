import React from 'react';

export default function() {
  return (
    <section className="become-premium ptb100">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 mb50">
            <h3 className="title">Become a Premium Member</h3>
            <h6 className="subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis.
            </h6>
          </div>
          <div className="col-md-7 col-sm-12">
            {/* Start of Pricing Table */}
            <div className="pricing-table-1">
              {/* ===== Start of Featured Holder ===== */}
              <div className="features-holder">
                <div className="features-title">
                  <h5>What You Get</h5>
                </div>
                {/* Start of Features List */}
                <div className="features-list-wrapper">
                  <ul className="features-list">
                    {/* List Item */}
                    <li>
                      <h6>HD available</h6>
                    </li>
                    {/* List Item */}
                    <li>
                      <h6>Ultra HD available</h6>
                    </li>
                    {/* List Item */}
                    <li>
                      <h6>Unlimited Movies</h6>
                    </li>
                    {/* List Item */}
                    <li>
                      <h6>Watch on your phone &amp; tablet</h6>
                    </li>
                    {/* List Item */}
                    <li>
                      <h6>Download and watch offline</h6>
                    </li>
                    {/* List Item */}
                    <li>
                      <h6>Screens you can watch</h6>
                    </li>
                    {/* List Item */}
                    <li>
                      <h6>First Month Free</h6>
                    </li>
                  </ul>
                </div>
                {/* Start of Features List */}
              </div>
              {/* ===== End of Featured Holder ===== */}
              {/* ===== Start of Price Table Featured ===== */}
              <div className="price-table price-table-featured">
                {/* Start of Table Header */}
                <div className="table-header">
                  <h5>Premium</h5>
                </div>
                {/* End of Table Header */}
                {/* Start Table Content */}
                <div className="table-content">
                  <ul>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                    <li>5</li>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                  </ul>
                </div>
                {/* End Table Content */}
                {/* Start Table Footer */}
                <div className="table-footer">
                  <div className="price-holder">
                    <span className="currency">$</span>
                    <span className="price">19.99</span>
                    <span className="time">/ mon</span>
                  </div>
                  <a
                    href="https://github.com/cuongw"
                    target="_self"
                    className="btn btn-main btn-effect"
                  >
                    <i className="fa fa-shopping-cart" />
                  </a>
                </div>
                {/* End Table Footer */}
              </div>
              {/* ===== End of Price Table Featured ===== */}
              {/* ===== Start of Price Table ===== */}
              <div className="price-table">
                {/* Start of Table Header */}
                <div className="table-header">
                  <h5>Basic</h5>
                </div>
                {/* End of Table Header */}
                {/* Start Table Content */}
                <div className="table-content">
                  <ul>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                    <li>
                      <i className="fa fa-times" />
                    </li>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                    <li>
                      <i className="fa fa-times" />
                    </li>
                    <li>
                      <i className="fa fa-times" />
                    </li>
                    <li>1</li>
                    <li>
                      <i className="fa fa-check" />
                    </li>
                  </ul>
                </div>
                {/* End Table Content */}
                {/* Start Table Footer */}
                <div className="table-footer">
                  <div className="price-holder">
                    <span className="currency">$</span>
                    <span className="price">9.99</span>
                    <span className="time">/ mon</span>
                  </div>
                  <a
                    href="https://github.com/cuongw"
                    target="_self"
                    className="btn btn-main btn-effect"
                  >
                    <i className="fa fa-shopping-cart" />
                  </a>
                </div>
                {/* End Table Footer */}
              </div>
              {/* ===== End of Price Table ===== */}
            </div>
            {/* End of Pricing Table */}
          </div>
        </div>
      </div>
    </section>
  );
}
