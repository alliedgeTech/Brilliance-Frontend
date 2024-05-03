import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [manues, setManues] = useState([]);
  const [subManues,setSubManues] =  useState([]);
  const [ManyManues,setManyManues]=useState([])
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
  // const menuItems = manues.map((item) => {
  //   const submenuLogic = subManues
  // .filter((subItem) => subItem.mainMenuId._id === item._id) 
  // .map((subItem) => (
  //   <li key={subItem._id} className="submenu-item">
  //     <Link to={subItem.link}>{subItem.name}</Link>
  //   </li>
  // ));
  //   console.log("submenuLogic:", submenuLogic);
    
  // });
 
 
  useEffect(() => {
    setShowLoginBox(location.pathname !== '/forgot');
  }, [location.pathname]);

  useEffect(() => {
    const fetchMenues = async () => {
      try {
        const response = await axios.get("http://localhost:6001/api/v1/getManues", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setManues(response.data);
      } catch (error) {
        console.error(error);
      }
    };


    fetchMenues();
  }, []);
 useEffect(() => {
    const fetchMenues1 = async () => {
      try {
        const response = await axios.get("http://localhost:6001/api/v1/getSubmanues", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSubManues(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchMenues1();
  }, []);
  useEffect(() => {
    const fetchMenues = async () => {
      try {
        const response = await axios.get("http://localhost:6001/api/v1/getSubmanuesMany", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setManyManues(response.data);
      } catch (error) {
        console.error(error);
      }
    };


    fetchMenues();
  }, []);
  
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
                      <Link to="/">Reeja</Link>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                    <div className="header-page-link">
                      {/* Login */}
                      {auth ? (
                        <button
                          onClick={handleLogout}
                          className="text-black mr-6 bg-white btn-end justify-end flex item-end font-bold py-2 px-4 rounded mt-4 lg:mt-0"
                        >
                          Logout
                        </button>
                      ) : (
                        <>
                          <div className="wishlist-box">
                            <Link to="/login">
                              <i className="icon-user" />
                            </Link>
                          </div>
                        </>
                      )}

                      {/* Wishlist */}
                      <div className="wishlist-box">
                        <Link to="/wishlist">
                          <i className="icon-heart" />
                        </Link>
                        <span className="count-wishlist">1</span>
                      </div>
                      {/* Cart */}
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
            {/* Navigation */}
            <div className="site-navigation">
  <nav id="main-navigation">
    <ul id="menu-main-menu" className="menu">
      {manues.map((item) => (
        <li
          key={item.id}
          className={`level-0 menu-item menu-item-has-children ${
            activeSubmenu === item._id ? 'current-menu-item' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(item._id)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to={item.name}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            {item.name}
          </Link>
          {activeSubmenu === item._id && subManues && subManues.length > 0 && (
            <ul className="submenu">
              {/* Render regular submenu items */}
              {subManues
  .filter((subItem) => subItem.mainMenuId._id === item._id)
  .map((subItem) => (
    <li key={subItem.id} className="submenu-item">
      <Link to={subItem.link}>{subItem.name}</Link>
    </li>
  ))}
   
{/* {ManyManues
  .filter((subMany) => subMany.subMenuId._id === item._id)
  .map((subMany) => (
    subMany.SubMenuItems.map((subitemMany) => (
      <li key={subitemMany.id} className="submenu-item">
        <Link to={subitemMany.link}>{subitemMany.name}</Link>
      </li>
    ))
  ))} */}
   
            </ul>
          )}
        </li>
      ))}
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
