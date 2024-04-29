import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLoginBox, setShowLoginBox] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const auth = JSON.parse(localStorage.getItem("auth"));

  const handleLogout = () => {
    localStorage.clear();
    localStorage.clear("persist:root");
    navigate("/login");
  };

  useEffect(() => {
    setShowLoginBox(location.pathname !== '/forgot');
  }, [location.pathname]);

  return (
    <>
      <header id="site-header" className="site-header header-v3">
        <div className="header-desktop">
          <div className="header-top">
            {/* Header content */}
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
                      {auth ? (
                        <>
                          <button
                            onClick={handleLogout}
                            className="text-black mr-6 bg-white btn-end justify-end flex item-end font-bold py-2 px-4 rounded mt-4 lg:mt-0"
                          >
                            Logout
                          </button>
                        </>
                      ) : (<>
                        <div className="wishlist-box">
                          <Link to="/Login"  >
                            <i className="icon-user" />
                          </Link>
                        </div>
                      </>)
                      }

                      {/* Wishlist */}
                      <div className="wishlist-box">
                        <Link to="/Wishlist">
                          <i className="icon-heart" />
                        </Link>
                        <span className="count-wishlist">1</span>
                      </div>
                      {/* Cart */}
                      <div className="wishlist-box">
                        <Link to="/ViewCard">
                          <i className="icon-large-paper-bag" />
                        </Link>
                        <span className="count-wishlist">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-middle text-center color-white">
            {/* Navigation */}
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
        
        {/* Wishlist and User menu icons */}
        <div className="md:hidden fixed bottom-0 right-0 z-50 p-4">
          {/* Wishlist icon */}
          <div className="relative inline-block">
            <button onClick={() => setShowWishlist(!showWishlist)} className="text-white">
              <i className="icon-heart" />
            </button>
            {showWishlist && (
              <div className="absolute top-0 right-0 mt-8 w-48 bg-white border rounded-lg shadow-lg">
                {/* Wishlist dropdown content */}
              </div>
            )}
          </div>
          
          {/* User menu icon */}
          <div className="relative inline-block ml-4">
            <button onClick={() => setShowUserMenu(!showUserMenu)} className="text-white">
              <i className="icon-user" />
            </button>
            {showUserMenu && (
              <div className="absolute top-0 right-0 mt-8 w-48 bg-white border rounded-lg shadow-lg">
                {/* User menu dropdown content */}
                {auth ? (
                  <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Logout</button>
                ) : (
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Login</Link>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
