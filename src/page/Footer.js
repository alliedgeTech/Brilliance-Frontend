import React from 'react';
import SocialIcons from './SocialIcons';

function Footer() {
  const headerTitleStyle = {
    fontSize: '18px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#cb8161'
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <footer id="site-footer" className="site-footer background four-columns">
        <div className="footer">
          <div className="section-padding">
            <div className="section-container">
              <div className="block-widget-wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-6 column-1">
                    <div className="block block-menu m-b-20">
                      <h2 className="block-title" style={headerTitleStyle}>Contact Us</h2>
                      <div className="block-content">
                        <ul style={{ fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                          <li>
                            <span>Head Office:</span> 26 Wyle Cop, Shrewsbury,
                            Shropshire, SY1 1XD
                          </li>
                          <li>
                            <span>Tel:</span> 01743 234500
                          </li>
                          <li>
                            <span>Email:</span>{" "}
                            <a href="mailto:support@mojuri.com">
                              support@mojuri.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <SocialIcons />
                  </div>
                  <div className="col-lg-3 col-md-6 column-2">
                    <div className="block block-menu">
                      <h2 className="block-title" style={headerTitleStyle}>Customer Services</h2>
                      <div className="block-content">
                        <ul style={{ fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                          <li>
                            <a href="shop-grid-left.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Track Your Order</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              Product Care &amp; Repair
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Book an Appointment</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              Frequently Asked Questions
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Shipping &amp; Returns</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 column-3">
                    <div className="block block-menu">
                      <h2 className="block-title" style={headerTitleStyle}>About Us</h2>
                      <div className="block-content">
                        <ul style={{ fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">FAQ</a>
                          </li>
                          <li>
                            <a href="#">Our Producers</a>
                          </li>
                          <li>
                            <a href="#">Sitemap</a>
                          </li>
                          <li>
                            <a href="#">Terms &amp; Conditions</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 column-4">
                    <div className="block block-menu">
                      <h2 className="block-title" style={headerTitleStyle}>Catalog</h2>
                      <div className="block-content">
                        <ul style={{ fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                          <li>
                            <a href="shop-grid-left.html">Earrings</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Necklaces</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Bracelets</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Rings</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Jewelry Box</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Studs</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-bottom"
          style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          <div className="section-padding">
            <div className="section-container">
              <div className="block-widget-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-left">
                      <p className="copyright" style={{ textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>
                        Copyright © 2024. All Right Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-right">
                      <div className="block block-image" style={{ textAlign: 'right' }}>
                        <img width={309} height={32} src="media/payments.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
