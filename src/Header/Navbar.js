import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [manues, setManues] = useState([]);
  const [subManues, setSubManues] = useState([]);
  const [manyManues, setManyManues] = useState([]);
  const [showLoginBox, setShowLoginBox] = useState(true);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.clear("persist:root");
    navigate("/login");
  };

  useEffect(() => {
    setShowLoginBox(location.pathname !== '/forgot');
  }, [location.pathname]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const [manuesRes, subManuesRes, manyManuesRes] = await Promise.all([
          axios.get("http://localhost:6001/api/v1/getManues"),
          axios.get("http://localhost:6001/api/v1/getSubmanues"),
          axios.get("http://localhost:6001/api/v1/getSubmanuesMany")
        ]);
        setManues(manuesRes.data);
        setSubManues(subManuesRes.data);
        setManyManues(manyManuesRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenus();
  }, []);

  const menuItems = manues.map((menuItem) => {
    const submenuItems = subManues.filter(subItem => subItem.mainMenuId._id === menuItem._id)
      .map((subItem) => (
        <li key={subItem._id} className="submenu-item">
          <Link to={subItem.link}>{subItem.name}</Link>
        </li>
      ));

    const nestedSubmenuItems = submenuItems.flatMap(submenuItem => {
      const nestedItems = manyManues.filter(nestedItem => nestedItem.subMenuId._id === submenuItem.key)
        .map((nestedItem) => (
          <li key={nestedItem.link}>
            <Link to={nestedItem.link}>{nestedItem.name}</Link>
          </li>
        ));
      return nestedItems;
    });

    return (
      <li key={menuItem._id} className={`level-0 menu-item menu-item-has-children ${activeSubmenu === menuItem._id ? 'current-menu-item' : ''}`}
        onMouseEnter={() => handleMouseEnter(menuItem._id)}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
      >
        <Link to={menuItem.name} className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
          {menuItem.name}
        </Link>
        {activeSubmenu === menuItem._id && subManues && subManues.length > 0 && (
          <ul className="submenu text-xl bg-gray-200 bg-opacity-75 text-white absolute left-0 mt-2 w-full px-0" style={{ width: "300px" }}>
            {submenuItems}
            {nestedSubmenuItems}
          </ul>
        )}
      </li>
    );
  });

  return (
    <>
      <header id="site-header" className="site-header header-v3">
        <div className="header-desktop">
          <div className="header-top">
            <div className="section-padding">
              <div className="section-container large p-l-r">
                <div className="row">
                  <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
                    <div className="header-page-link">
                      <div className="search-box">
                        <div className="search-toggle">
                          <i className="icon-search" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12 text-center header-center">
                    <div className="site-logo">
                      <Link to="/">Reeja</Link>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                    <div className="header-page-link">
                      {auth ? (
                        <button
                          onClick={handleLogout}
                          className="text-black mr-6 bg-white btn-end justify-end flex item-end font-bold py-2 px-4 rounded mt-4 lg:mt-0"
                        >
                          Logout
                        </button>
                      ) : (
                        <div className="wishlist-box">
                          <Link to="/login">
                            <i className="icon-user" />
                          </Link>
                        </div>
                      )}
                      <div className="wishlist-box">
                        <Link to="/wishlist">
                          <i className="icon-heart" />
                        </Link>
                        <span className="count-wishlist">1</span>
                      </div>
                      <div className="wishlist-box">
                        <Link to="/viewcard">
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
            <div className="site-navigation">
              <nav id="main-navigation">
                <ul id="menu-main-menu" className="menu">
                  {menuItems}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed bottom-0 right-0 z-50 p-4 ">
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
