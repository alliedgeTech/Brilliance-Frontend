import React, { useState , useEffect} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import Register from "./Auth/Register"
import Login from "./Auth/Login"

function App() {
  const navigate = useNavigate();

//  const [isOpen, setIsOpen] = useState(false);
const location = useLocation();
const [showLoginBox, setShowLoginBox] = useState(true);

const auth = JSON.parse(localStorage.getItem("auth"));

useEffect(() => {
  // Check if the current path is "/forgot", if so, hide the login box
  setShowLoginBox(location.pathname !== '/forgot');
}, [location.pathname]);
const handleLogout = () => {
  localStorage.clear();
  navigate("/login");
};
const handleIconClick = (event) => {
  event.preventDefault(); }
 return (

<>
<header id="site-header" className="site-header header-v3">
  <div className="header-mobile">
    <div className="section-padding">
      <div className="section-container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
            <div className="navbar-header">
              <button
                type="button"
                id="show-megamenu"
                className="navbar-toggle"
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
            <div className="site-logo">
              <a href="index3.html">
                <img
                  width={400}
                  height={79}
                  src="media/logo.png"
                  alt="Mojuri – Jewelry Store HTML Template"
                />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
            <div className="mojuri-topcart dropdown">
              <div className="dropdown mini-cart top-cart">
                <div className="remove-cart-shadow" />
                <a
                  className="dropdown-toggle cart-icon"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="icons-cart">
                    <i className="icon-large-paper-bag" />
                    <span className="cart-count">2</span>
                  </div>
                </a>
                <div className="dropdown-menu cart-popup">
                  <div className="cart-empty-wrap">
                    <ul className="cart-list">
                      <li className="empty">
                        <span>No products in the cart.</span>
                        <a className="go-shop" href="shop-grid-left.html">
                          GO TO SHOP
                          <i aria-hidden="true" className="arrow_right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-list-wrap">
                    <ul className="cart-list ">
                      <li className="mini-cart-item">
                        <a href="#" className="remove" title="Remove this item">
                          <i className="icon_close" />
                        </a>
                        <a href="shop-details.html" className="product-image">
                          <img
                            width={600}
                            height={600}
                            src="media/product/3.jpg"
                            alt=""
                          />
                        </a>
                        <a href="shop-details.html" className="product-name">
                          Twin Hoops
                        </a>
                        <div className="quantity">Qty: 1</div>
                        <div className="price">$150.00</div>
                      </li>
                      <li className="mini-cart-item">
                        <a href="#" className="remove" title="Remove this item">
                          <i className="icon_close" />
                        </a>
                        <a href="shop-details.html" className="product-image">
                          <img
                            width={600}
                            height={600}
                            src="media/product/1.jpg"
                            alt=""
                          />
                        </a>
                        <a href="shop-details.html" className="product-name">
                          Medium Flat Hoops
                        </a>
                        <div className="quantity">Qty: 1</div>
                        <div className="price">$100.00</div>
                      </li>
                    </ul>
                    <div className="total-cart">
                      <div className="title-total">Total: </div>
                      <div className="total-price">
                        <span>$250.00</span>
                      </div>
                    </div>
                    <div className="free-ship">
                      <div className="title-ship">
                        Buy <strong>$400</strong> more to enjoy{" "}
                        <strong>FREE Shipping</strong>
                      </div>
                      <div className="total-percent">
                        <div className="percent" style={{ width: "20%" }} />
                      </div>
                    </div>
                    <div className="buttons">
                      <Link
                        to="/ViewCard"
                        className="button btn view-cart btn-primary"
                      >
                        View cart
                      </Link>
                      <Link
                        to="/CheckOut"
                        className="button btn checkout btn-default"
                      >
                        Check out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-mobile-fixed">
      {/* Shop */}
      <div className="shop-page">
        <a href="shop-grid-left.html">
          <i className="wpb-icon-shop" />
        </a>
      </div>
      {/* Login */}
      {auth ? (
          <>
            <button
              onClick={handleLogout}
              className="text-black mr-6 bg-white btn-end justify-end flex item-end font-bold py-2 px-4 rounded mt-4 lg:mt-0"
            >
              Logout
            </button>
          </>
        ) :(<>
         <div className="my-account">
        <div className="login-header">
          <a href="page-my-account.html">
            <i className="wpb-icon-user" />
          </a>
        </div>
      </div>
        </>)
     }
      {/* Search */}
      <div className="search-box">
        <div className="search-toggle">
          <i className="wpb-icon-magnifying-glass" />
        </div>
      </div>
      {/* Wishlist */}
      <div className="wishlist-box">
        <Link to="/Wishlist">
          <i className="wpb-icon-heart" />
        </Link>
      </div>
    </div>
  </div>
  <div className="header-desktop">
    <div className="header-top">
      <div className="section-padding">
        <div className="section-container large p-l-r">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
              <div className="header-page-link">
                {/* Search */}
                <div className="search-box">
                  <div className="search-toggle">
                    <i className="icon-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12 text-center header-center">
  <div className="site-logo">
  <Link to="/">
      Reeja
      </Link>
  </div>
</div>

            <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
              <div className="header-page-link">
                {/* Login */}
                <div className={`login-header icon ${showLoginBox ? 'active' : ''}`}>
                  <a className="active-login" href="#"  onClick={handleIconClick}>
                    <i className="icon-user" />
                  </a>
                  <div className="form-login-register">
                    <div className="box-form-login">
                      <div className="active-login" />
                      <div className="box-content">
                     <Login box={showLoginBox} setBox={setShowLoginBox}/>
                        <Register />
                       
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wishlist */}
                <div className="wishlist-box">
                  <Link to="/Wishlist">
                    <i className="icon-heart" />
                  </Link>
                  <span className="count-wishlist">1</span>
                </div>
                {/* Cart */}
                <div className="mojuri-topcart dropdown light">
                  <div className="dropdown mini-cart top-cart">
                    <div className="remove-cart-shadow" />
                    <a
                      className="dropdown-toggle cart-icon"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="icons-cart">
                        <i className="icon-large-paper-bag" />
                        <span className="cart-count">2</span>
                      </div>
                    </a>
                    <div className="dropdown-menu cart-popup">
                      <div className="cart-empty-wrap">
                        <ul className="cart-list">
                          <li className="empty">
                            <span>No products in the cart.</span>
                            <a className="go-shop" href="shop-grid-left.html">
                              GO TO SHOP
                              <i aria-hidden="true" className="arrow_right" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-list-wrap">
                        <ul className="cart-list ">
                          <li className="mini-cart-item">
                            <a
                              href="#"
                              className="remove"
                              title="Remove this item"
                            >
                              <i className="icon_close" />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-image"
                            >
                              <img
                                width={600}
                                height={600}
                                src="media/product/3.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-name"
                            >
                              Twin Hoops
                            </a>
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$150.00</div>
                          </li>
                          <li className="mini-cart-item">
                            <a
                              href="#"
                              className="remove"
                              title="Remove this item"
                            >
                              <i className="icon_close" />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-image"
                            >
                              <img
                                width={600}
                                height={600}
                                src="media/product/1.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-name"
                            >
                              Medium Flat Hoops
                            </a>
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$100.00</div>
                          </li>
                        </ul>
                        <div className="total-cart">
                          <div className="title-total">Total: </div>
                          <div className="total-price">
                            <span>$250.00</span>
                          </div>
                        </div>
                        <div className="free-ship">
                          <div className="title-ship">
                            Buy <strong>$400</strong> more to enjoy{" "}
                            <strong>FREE Shipping</strong>
                          </div>
                          <div className="total-percent">
                            <div className="percent" style={{ width: "20%" }} />
                          </div>
                        </div>
                        <div className="buttons">
                          <Link
                            to="/ViewCard"
                            className="button btn view-cart btn-primary"
                          >
                            View cart
                          </Link>
                          <Link
                            to="/CheckOut"
                            className="button btn checkout btn-default"
                          >
                            Check out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-middle text-center color-white">
      <div className="site-navigation">
        <nav id="main-navigation">
          <ul id="menu-main-menu" className="menu">
            <li className="level-0 menu-item menu-item-has-children current-menu-item">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">        Home
       </Link>
            
            </li>
            <li className="level-0 menu-item menu-item-has-children">
              <Link to="/shop" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">       Shop
       </Link>
           
            </li>
      
          
          
          </ul>
        </nav>
      </div>
    </div>
    
  </div>
</header>

</>
  
 );
}
export default App;