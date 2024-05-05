import '../../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Slider from 'react-slider';
const MIN_DEFAULT = 150;
const MAX_DEFAULT = 5000;
function Shop() {
   const [selectedDiamond, setSelectedDiamond] = useState(true);
   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(5000);
   const [selectedClarity, setSelectedClarity] = useState([]);
   const [DiomandShape, setDiomandShape] = useState([]);
   const [selectedCut, setSelectedCut] = useState([]);
   const [Diomands, setProducts] = useState([]);
   const [recentlyViewClicked, setRecentlyViewClicked] = useState(false);
   const [page, setPage] = useState(1);
   const [recentlyViewed, setRecentlyViewed] = useState([]);
   
   const [CompareView, seteCompareView] = useState([]);
   const [showHello, setShowHello] = useState(false); 
   
   
   console.log("CompareView",CompareView)
   const handleDiamondClick = (name) => {
      setSelectedDiamond(name);
  };
  
  console.log(selectedDiamond)
  
  const fetchData = async () => {
     try {
        const response = await axios.get(
           `http://localhost:6001/api/v1/getAllDiamonds?page=${page}&clarity=${selectedClarity.join(',')}&cut=${selectedCut.join(',')}`
        );
     
        setProducts(prevProducts => page === 1 ? response.data.data : [...prevProducts, ...response.data.data]);
     } catch (error) {
        console.error("Error fetching diamonds:", error);
     }
  };
  
  // Fetch data when page or filters change
  useEffect(() => {
     fetchData();
  }, [page, selectedClarity, selectedCut]);
  
  // Function to detect scroll to bottom of page
  const handleScroll = () => {
     const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
     const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
     const clientHeight = document.documentElement.clientHeight || window.innerHeight;
     const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
  
     if (scrolledToBottom) {
        // Increment page number to fetch next set of products
        setPage(prevPage => prevPage + 1);
     }
  };
  
  // Add event listener for scroll
  useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to handle clarity change
  const handleClarityChange = (e) => {
     const { value } = e.target;
     if (selectedClarity.includes(value)) {
        setSelectedClarity(selectedClarity.filter(item => item !== value));
     } else {
        setSelectedClarity([...selectedClarity, value]);
     }
     // Reset page to 1 when filters change
     setPage(1);
  };
  
  // Function to handle cut change
  const handleCutChange = (e) => {
     const { value } = e.target;
     if (selectedCut.includes(value)) {
        setSelectedCut(selectedCut.filter(item => item !== value));
     } else {
        setSelectedCut([...selectedCut, value]);
     }
     // Reset page to 1 when filters change
     setPage(1);
  };
  
  const updateMinPrice = (value) => {
     setMinPrice(value);
  };
  
  const updateMaxPrice = (value) => {
     setMaxPrice(value);
  };
  
  const rangeLabels = ['Good', 'Very Good', 'Excellent', 'Poor', 'Fair'];
  const rangeLabels1 = ['I1',"I2", 'SI3', 'SI2', 'SI1', 'VS1', "VS2", "VVS2", "VVS1", "IF", "FL"];
  
  const addToRecentlyViewed = async (diamond) => {
     try {
        await axios.post('http://localhost:6001/api/v1/recentlyViewed', { diamond });
     } catch (error) {
        console.error('Error adding to recently viewed:', error);
     }
  };
  
  useEffect(() => {
     const fetchDataDiomand = async () => {
        try {
           const response = await axios.get(
              "http://localhost:6001/api/v1/getDiomandShepa"
           );
           setDiomandShape(response.data);
        } catch (error) {
           console.error("Error fetching diamonds:", error);
        }
     };
  
     fetchDataDiomand();
  }, []);
  
  useEffect(() => {
     const fetchDataDiomand2 = async () => {
        try {
           const response = await axios.get(
              "http://localhost:6001/api/v1/recently-viewed"
           );
           setRecentlyViewed(response.data.data);
        } catch (error) {
           console.error("Error fetching diamonds:", error);
        }
     };
  
     fetchDataDiomand2();
  }, []);
  useEffect(() => {
   const fetchDataDiomand3 = async () => {
      try {
         const response = await axios.get(
            "http://localhost:6001/api/v1/compareView"
         );
         seteCompareView(response.data.data);
      } catch (error) {
         console.error("Error fetching diamonds:", error);
      }
   };

   fetchDataDiomand3();
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
                      <h2>Shape</h2>
                    </div>
                    {DiomandShape &&
                      DiomandShape.map((item, index) => {
                        return (
                          <>
                            <div className="block-content">
                              <div className="product-cats-list">
                                <ul>
                                  <li
                                    className={
                                      selectedDiamond === item.name
                                        ? "current"
                                        : ""
                                    }
                                  >
                                    <a
                                      href="#"
                                      onClick={() =>
                                        handleDiamondClick(item.name)
                                      }
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                  {/* Price Filter Block */}
                  <div className="block block-product-filter">
                    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                      <div className="mb-4">
                        <label
                          htmlFor="min-price"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Min Price
                        </label>
                        <input
                          type="range"
                          id="min-price"
                          className="w-full accent-indigo-600"
                          min="0"
                          max="5000"
                          value={minPrice}
                          onChange={(e) => updateMinPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="max-price"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Max Price
                        </label>
                        <input
                          type="range"
                          id="max-price"
                          className="w-full accent-indigo-600"
                          min="0"
                          max="5000"
                          value={maxPrice}
                          onChange={(e) => updateMaxPrice(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span id="minPrice">${minPrice}</span>
                        <span id="maxPrice">${maxPrice}</span>
                      </div>
                    </div>
                  </div>
                  {/* Clarity Filter Block */}
                  <div className="block block-product-filter clearfix">
                    <div className="block-title">
                      <h2>Clarity</h2>
                    </div>
                    <div className="block-content">
                      <div className="flex flex-col lg:flex-row gap-4 border border-gray-400 p-4">
                        {rangeLabels1.slice(0, 4).map((label, index) => (
                          <label key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              value={label}
                              onChange={handleClarityChange}
                              checked={selectedClarity.includes(label)}
                              className="mr-1"
                            />
                            <span className="text-xs text-gray-700">
                              {label}
                            </span>
                          </label>
                        ))}
                      </div>
                      <div className="flex flex-col lg:flex-row gap-4 border border-gray-400 p-4 mt-4 md:mt-0">
                        {rangeLabels1.slice(4, 7).map((label, index) => (
                          <label key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              value={label}
                              onChange={handleClarityChange}
                              checked={selectedClarity.includes(label)}
                              className="mr-1"
                            />
                            <span className="text-xs text-gray-700">
                              {label}
                            </span>
                          </label>
                        ))}
                      </div>
                      <div className="flex flex-col lg:flex-row gap-4 border border-gray-400 font-white p-4 mt-4 sm:mt-0">
                        {rangeLabels1.slice(7, 8).map((label, index) => (
                          <label key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              value={label}
                              onChange={handleClarityChange}
                              checked={selectedClarity.includes(label)}
                              className="mr-1"
                            />
                            <span className="text-xs text-gray-700">
                              {label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Cut Filter Block */}
                  <div className="block block-product-filter clearfix">
                    <div className="block-title">
                      <h2>Cut</h2>
                    </div>
                    <div className="block-content">
                      <div className="flex flex-col items-center gap-4 border border-gray-400 p-4">
                        {rangeLabels.map((label, index) => (
                          <label key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              value={label}
                              onChange={handleCutChange}
                              checked={selectedCut.includes(label)}
                              className="mr-1"
                            />
                            <span className="text-xs text-gray-700">
                              {label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>






                
                {/* Main Content */}
                <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                  {/* Buttons */}
                  <div className="flex gap-4  p-4">
  <div className="bg-white py-2 px-4 rounded-md shadow-md">
    <button
      className="text-gray-700"
      onClick={() => {
        setSelectedDiamond(true);
        setRecentlyViewClicked(false);
        setShowHello(false);
      }}
    >
      Diamonds ({Diomands.length})
    </button>
  </div>
  <div className="bg-white py-2 px-4 rounded-md shadow-md">
    <button
      className="text-gray-700"
      onClick={() => {
        setRecentlyViewClicked(true);
        setSelectedDiamond(false);
        setShowHello(false);
      }}
    >
      Recently View ({recentlyViewed.length})
    </button>
  </div>
  <div className="bg-white py-2 px-4 rounded-md shadow-md">
    <button
      className="text-gray-700"
      onClick={() => {
        setShowHello(true);
        setSelectedDiamond(false);
        setRecentlyViewClicked(false);
      }}
    >
      Compare ({CompareView.length})
    </button>
  </div>
</div>


                  {/* Products Display */}
                  <div className="tab-content mt-6 ml-4">
                    <div
                      className="tab-pane fade show active"
                      id="layout-grid"
                      role="tabpanel"
                    >
                      <div className="products-list grid">
                        <div className="row">
                          {recentlyViewClicked ? (
                                            <div className="mt-2 flex flex-col">
                                            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                                              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                  <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50 text-xl">
                                                    <th>Image</th>
                                                    <th>shape</th>
                                                    <th>clarity</th>
                                                    <th>cut</th>
                                                    <th>Price</th>
                                                    <th>Detiles</th>
                                                   
                                    
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200 text-xl">
                                      {recentlyViewed.map((item, index) => (
                                        <tr key={index}>
                                          <td>{item.diamond.images[0]}</td>
                                          <td>{item.diamond.shape}</td>
                                          <td>{item.diamond.clarity}</td>
                                          <td>{item.diamond.cut}</td>
                                          <td>{item.diamond.price}</td>
                                         <td> <Link
                                                                        to={`/single/${item.diamond._id}`}
                                                                        onClick={() => addToRecentlyViewed(item.diamond)}
                                                                      >Detiles</Link></td>
                                          
                                    
                                        </tr>
                                      ))}
                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                          ) : showHello ? (
                            // Render Hello
                            <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-xl">
                <th>Image</th>
                <th>shape</th>
                <th>clarity</th>
                <th>cut</th>
                <th>Price</th>
                <th>Detiles</th>
               

                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-xl">
  {CompareView.map((item, index) => (
    <tr key={index}>
      <td>{item.diamond.images[0]}</td>
      <td>{item.diamond.shape}</td>
      <td>{item.diamond.clarity}</td>
      <td>{item.diamond.cut}</td>
      <td>{item.diamond.price}</td>
     <td> <Link
                                    to={`/single/${item.diamond._id}`}
                                    onClick={() => addToRecentlyViewed(item.diamond)}
                                  >Detiles</Link></td>
      

    </tr>
  ))}
</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
                          ) : selectedDiamond ? (
                            // <div className="scrollable-container" style={{ overflowY: 'auto' ,maxHeight: '500px', }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {Diomands.map((diamond, index) => (
                                <div key={index} className="col-span-1">
                                  <div className="products-entry clearfix product-wapper shadow-md h-full">
                                    <Link
                                      to={`/single/${diamond._id}`}
                                      onClick={() => addToRecentlyViewed(diamond)}
                                    >
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
                                              <span className="count">{diamond.shape}</span>
                                            </div>
                                            <h3 className="product-title">
                                              <a href="shop-details.html">{diamond.productName}</a>
                                            </h3>
                                            <span className="price">Price: {diamond.price}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          // </div>
                          
                          
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        
      </div>
    </>
  );
}

export default Shop;
