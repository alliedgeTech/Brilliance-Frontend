import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Shop() {
  const location = useLocation();
  
  const [ringData, setRings] = useState(location.state && location.state.ringData);
 
  const [Diomands, setDiamonds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedRange, setSelectedRange] = useState([]);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [categories, setCategories] = useState([]);
  const colors = [
    { id: 1, label: 'Yellow', color: 'bg-yellow-500' },
    { id: 2, label: 'Pink', color: 'bg-pink-500' },
    { id: 3, label: 'Silver', color: 'bg-gray-400' },
    { id: 4, label: 'Platinum', color: 'bg-gray-600' },
  ];
  console.log(selectedColors)

  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleColorClick = (color) => {
    if (selectedColors.some((c) => c.id === color.id)) {
      setSelectedColors(selectedColors.filter((c) => c.id !== color.id));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  const priceRanges = [
    { id: 1, label: 'Under $500', min: 0, max: 500 },
    { id: 2, label: '$500 - $1,000', min: 500, max: 1000 },
    { id: 3, label: '$1,000 - $2,000', min: 1000, max: 2000 },
    { id: 4, label: '$2,000 - $5,000', min: 2000, max: 5000 },
    { id: 5, label: '$5,000 - $10,000', min: 5000, max: 10000 },
    { id: 6, label: 'Over $10,000', min: 10000, max: Infinity }, // Assuming no upper limit
  ];
  
  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleRangeClick = (range) => {
    const isSelected = selectedRange.some(r => r.id === range.id);
    if (isSelected) {
      setSelectedRange(selectedRange.filter(r => r.id !== range.id));
    } else {
      setSelectedRange([range]);
      setPage(1); // Reset page to 1 when a new range is selected
    }
  
  };

  const fetchData = async () => {
    try {
      const minPrice = selectedRange[0]?.min || 0;
      const maxPrice = selectedRange[0]?.max || Infinity;
      const selectedColorLabels = selectedColors.map(color => color.label).join(',');
      const selectedCategories = categories
        .filter(category => category.isChecked)
        .map(category => category.name);
  
      const response = await axios.get(`http://localhost:6001/api/v1/getRing?page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}&colors=${selectedColorLabels}&catogary=${selectedCategories.join(',')}`);
      setDiamonds(prevDiamonds => page === 1 ? response.data : [...prevDiamonds, ...response.data]);
    } catch (error) {
      console.error("Error fetching diamonds:", error);
    }
  };
  const handleScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
 
    if (scrolledToBottom) {
      
       setPage(prevPage => prevPage + 1);
    }
 };
 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  fetchData();
}, [page, selectedRange,selectedColors,categories]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:6001/api/v1/AdminDash/getRingCatogary');
        console.log('Response Data:', response.data);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <div id="content" className="site-content" role="main">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50 p-t-10">
                  {/* Shape Filter Block */}
                  <div className="block block-product-cats">
                    <div className="block-title">
                      <h2>Filter</h2>
                    </div>
   
                    <h2>Engagement Page</h2>
      {ringData && (
        <div>
         
          <p>{ringData._id}</p>
          
        </div>
      )}
<div className="relative">
      <button
        className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300"
        onClick={toggleMenu}
      >
        Ring Style
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
        <div className="px-4 py-2">
          {categories.map((item,index) => {
            return (
              <div key={index} className="mb-2 flex items-center">
  <input
    type="checkbox"
    id={`category_${index}`}
    className="mr-2"
    checked={item.isChecked}
    onChange={() => {
      setCategories(prevCategories =>
        prevCategories.map((category, i) =>
          i === index ? { ...category, isChecked: !category.isChecked } : category
        )
      );
    }}
  />
  <label htmlFor={`category_${index}`}>{item.name}</label>
</div>
            );
          })}
        </div>
      </div>
      )}
    </div>
                  </div>
                  {/* Price Filter Block */}
                  <div className="block block-product-filter">
        <div className="relative">
          <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300" onClick={toggleMenu1}>
            {selectedRange.length > 0 ? selectedRange[0].label : 'Price Range'}
          </button>
          {isOpen1 && (
            <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
              <div className="px-4 py-2">
                {priceRanges.map(range => (
                  <div key={range.id} className="mb-2 flex items-center cursor-pointer" onClick={() => handleRangeClick(range)}>
                    <input type="checkbox" checked={selectedRange.some(r => r.id === range.id)} readOnly className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded mr-2" />
                    <label className="ml-2">{range.label}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

                  {/* Clarity Filter Block */}
                  <div className="block block-product-filter clearfix">
      <div className="block-content">
        <div className="relative">
          <button
            className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300"
            onClick={toggleMenu2}
          >
            {selectedColors.length > 0 ? (
              selectedColors.map((color) => (
                <span
                  key={color.id}
                  className={`inline-block w-4 h-4 rounded-full ${color.color} mr-1`}
                ></span>
              ))
            ) : (
              'Select Color'
            )}
          </button>
          {isOpen2 && (
            <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
              <div className="px-4 py-2">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className="mb-2 flex items-center cursor-pointer"
                    onClick={() => handleColorClick(color)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedColors.some((c) => c.id === color.id)}
                      readOnly
                      className={`form-checkbox h-4 w-4 text-${color.color.split('-')[1]}-500 border-gray-300 rounded mr-2`}
                    />
                    <label className="ml-2">{color.label}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
              
                 
                </div>

                {/* Main Content */}
                <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                  {/* Buttons */}

                  {/* Products Display */}
                  <div className="tab-content mt-6 ml-4">
                    <div
                      className="tab-pane fade show active"
                      id="layout-grid"
                      role="tabpanel"
                    >
                      <div className="products-list grid">
                        <div className="row">
                         
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {Diomands.map((diamond, index) => (
                                <div key={index} className="col-span-1">
                                  <div className="products-entry clearfix product-wapper shadow-md h-full">
                                    <Link to={{ pathname: `/singleRing/${diamond._id}`, state: { ringData }  }}>

    <div className="products-thumb h-full">
      <div className="image-container h-48 flex items-center justify-center">
        <img
          src={`http://localhost:6001/uploads/${diamond.images[0]}`}
          className="post-image object-contain"
          alt=""
        />
      </div>
      <div className="products-content p-4">
        <div className="contents text-center">
          <div className="rating">
            <span className="count">
              {diamond.shape}
            </span>
          </div>
          <h3 className="product-title">
            <a href="shop-details.html">
              {diamond.productName}
            </a>
          </h3>
          <span className="price">
            Price: {diamond.price}
          </span>
        </div>
      </div>
    </div>
  </Link>

                                  </div>
                                </div>
                              ))}
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
        <div>

</div>  
        {/* Pagination */}
      </div>
    </>
  );
}

export default Shop;
