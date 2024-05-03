import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"

function Shop() {
   const [selectedDiamond, setSelectedDiamond] = useState(null);
   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(5000);
   const [selectedClarity, setSelectedClarity] = useState([]);
   const [DiomandShape, setDiomandShape] = useState([]);
   const [selectedCut, setSelectedCut] = useState([]);
   const [Diomands, setProducts] = useState([]);
   const [recentlyViewClicked, setRecentlyViewClicked] = useState(false);
   const [page, setPage] = useState(1);
   const [recentlyViewed, setRecentlyViewed] = useState(JSON.parse(localStorage.getItem('recentlyViewed')) || []);
   const handleDiamondClick = (name) => {
      setSelectedDiamond(name);
      
  };
console.log(selectedDiamond)
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `http://localhost:6001/api/v1/getAllDiamonds?page=${page}&clarity=${selectedClarity.join(',')}&cut=${selectedCut.join(',')}`
            );
            setProducts(response.data.data);
         } catch (error) {
            console.error("Error fetching diamonds:", error);
         }
      };
   
      fetchData();
   }, [page, selectedClarity, selectedCut,DiomandShape]);

   const updateMinPrice = (value) => {
      setMinPrice(value);
   };

   const updateMaxPrice = (value) => {
      setMaxPrice(value);
   };

   const handleClarityChange = (e) => {
      const { value } = e.target;
      if (selectedClarity.includes(value)) {
         setSelectedClarity(selectedClarity.filter(item => item !== value));
      } else {
         setSelectedClarity([...selectedClarity, value]);
      }
   };

   const handleCutChange = (e) => {
      const { value } = e.target;
      if (selectedCut.includes(value)) {
         setSelectedCut(selectedCut.filter(item => item !== value));
      } else {
         setSelectedCut([...selectedCut, value]);
      }
   };

   const rangeLabels = ['Good', 'Very Good', 'Excellent', 'Poor', 'Fair'];
   const rangeLabels1 = ['I1',"I2", 'SI3', 'SI2', 'SI1', 'VS1', "VS2", "VVS2", "VVS1", "IF", "FL"];

   const addToRecentlyViewed = (diamond) => {
      if (!recentlyViewed.find(item => item._id === diamond._id)) {
         const updatedRecentlyViewed = [diamond, ...recentlyViewed];
         setRecentlyViewed(updatedRecentlyViewed.slice(0, 5));
         localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
      }
   };

   const clearOldItems = () => {
      const currentTime = new Date().getTime();
      const updatedRecentlyViewed = recentlyViewed.filter(item => {
         return (currentTime - item.timestamp) < (30 * 60 * 1000);
      });
      localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
      setRecentlyViewed(updatedRecentlyViewed);
   };

   setInterval(clearOldItems, 60 * 1000);

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
                           {
                             DiomandShape && DiomandShape.map((item,index)=>{
                                 return(<>
                                 <div className="block-content">
                                 <div className="product-cats-list">
                                    <ul>
                                    <li className={selectedDiamond === item.name ? 'current' : ''}>
                                <a href="#" onClick={() => handleDiamondClick(item.name)}>
                                    {item.name}
                                </a>
                            </li>
                                    </ul>
                                 </div>
                              </div>
                                 </>)
                              })
                           }
                           
                              
                           </div>
                           {/* Price Filter Block */}
                           <div className="block block-product-filter">
                              <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                                 <div className="mb-4">
                                    <label htmlFor="min-price" className="block text-gray-700 font-bold mb-2">
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
                                    <label htmlFor="max-price" className="block text-gray-700 font-bold mb-2">
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
                <span className="text-xs text-gray-700">{label}</span>
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
                <span className="text-xs text-gray-700">{label}</span>
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
                <span className="text-xs text-gray-700">{label}</span>
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
                    <span className="text-xs text-gray-700">{label}</span>
                </label>
            ))}
        </div>
    </div>
</div>

                        </div>
                        {/* Main Content */}
                        <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                           {/* Filter Controls */}
                           <div className="flex items-center justify-between bg-gray-100 py-4 px-6">
                              <div className="flex items-center space-x-4 ">
                                 <div className="bg-white py-2 px-4 rounded-md shadow-md">
                                    <button className="text-gray-700 " onClick={() => setRecentlyViewClicked(false)}>
                                       Diamonds (0)
                                    </button>
                                 </div>
                                 <div className="bg-white py-2 px-4 rounded-md shadow-md">
                                    <button className="text-gray-700" onClick={() => setRecentlyViewClicked(true)}>
                                       Recently View ({recentlyViewed.length})
                                    </button>
                                 </div>
                                 <div className="bg-white py-2 px-4 rounded-md shadow-md">
                                    <button className="text-gray-700 ">
                                       Compare (0)
                                    </button>
                                 </div>
                              </div>
                           </div>
                           {/* Products Display */}
                           <div className="tab-content mt-6 ml-4">
                              <div className="tab-pane fade show active" id="layout-grid" role="tabpanel">
                                 <div className="products-list grid">
                                    <div className="row">
                                       {recentlyViewClicked ? (
                                          <div>
                                             {/* Display recently viewed products */}
                                             <h2>Recently Viewed</h2>
                                             <ul>
                                                {recentlyViewed.map((item, index) => (
                                                   <li key={index}>
                                                      <Link to={`/single/${item._id}`}>
                                                         {item.productName}
                                                      </Link>
                                                   </li>
                                                ))}
                                             </ul>
                                          </div>
                                       ) : (
                                          Diomands.map((diamond, index) => (
                                             <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={index}>
                                                <div className="products-entry clearfix product-wapper shadow-md h-full">
                                                   <Link to={`/single/${diamond._id}`} onClick={() => addToRecentlyViewed(diamond)}>
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
                                                                  <a href="shop-details.html"> {diamond.productName} </a>
                                                               </h3>
                                                               <span className="price">Price : {diamond.price}</span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </Link>
                                                </div>
                                             </div>
                                          ))
                                       )}
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
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
               <button onClick={() => setPage(page - 1)} disabled={page === 1} className='btn' style={{ backgroundColor: "E5E7EB" }}>Previous</button>
               <div style={{ width: '10px' }} /> {/* Space between buttons */}
               <button onClick={() => setPage(page + 1)} className='btn mr-3' style={{ backgroundColor: "6B21A8" }}>Next</button>
            </div>
         </div>
      </>
   )
}
export default Shop;