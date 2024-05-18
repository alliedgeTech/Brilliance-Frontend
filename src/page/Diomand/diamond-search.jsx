import "./slider.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slider";
const MIN_DEFAULT = 150;
const MAX_DEFAULT = 5000;
function Shop() {
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [currentPrice, setCurrentPrice] = useState(150);

  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  const [sliderValues, setSliderValues] = useState([MIN_DEFAULT, MAX_DEFAULT]);

  const [selectedClarity, setSelectedClarity] = useState([]);
  const [DiomandShape, setDiomandShape] = useState([]);
  const [selectedCut, setSelectedCut] = useState([]);
  const [Diomands, setProducts] = useState([]);
  const [recentlyViewClicked, setRecentlyViewClicked] = useState(false);
  const [page, setPage] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  console.log("recentlyViewed", recentlyViewed);
  const handleDiamondClick = (name) => {
    setSelectedDiamond(name);
  };
  console.log(selectedDiamond);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6001/api/v1/getAllDiamonds?page=${page}&clarity=${selectedClarity.join(
            ","
          )}&cut=${selectedCut.join(",")}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching diamonds:", error);
      }
    };

    fetchData();
  }, [page, selectedClarity, selectedCut, DiomandShape]);

  const updateMinPrice = (value) => {
    setMinPrice(value);
  };

  const handleMinChange = (e) => {
    const newMinValue = parseInt(e.target.value);
    if (!isNaN(newMinValue) && newMinValue <= maxValue) {
      setMinValue(newMinValue);
      setSliderValues([newMinValue, sliderValues[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMaxValue = parseInt(e.target.value);
    if (!isNaN(newMaxValue) && newMaxValue >= minValue) {
      setMaxValue(newMaxValue);
      setSliderValues([sliderValues[0], newMaxValue]);
    }
  };

  const handleSliderChange = (values) => {
    setSliderValues(values);
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const handleSliderWithLabel = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <div className="slider-handle" {...restProps}>
        <div className="slider-label">
          {index === 0 ? `$${minValue}` : `$${maxValue}`}
        </div>
      </div>
    );
  };
  const updateMaxPrice = (value) => {
    const newMaxPrice = value <= 150 ? 150 : value >= 5000 ? 5000 : value;
    setMaxPrice(newMaxPrice);
    setCurrentPrice(newMaxPrice);
  };

  const handlePriceChange = (value) => {
    console.log("Slider value:", value); // Debugging: Check the value of the slider
    setCurrentPrice(parseInt(value));
    console.log("Current price:", currentPrice); // Debugging: Check the current price state
  };

  useEffect(() => {
    setCurrentPrice(maxPrice);
  }, [maxPrice]);

  const handleClarityChange = (e) => {
    const { value } = e.target;
    if (selectedClarity.includes(value)) {
      setSelectedClarity(selectedClarity.filter((item) => item !== value));
    } else {
      setSelectedClarity([...selectedClarity, value]);
    }
  };

  const handleCutChange = (e) => {
    const { value } = e.target;
    if (selectedCut.includes(value)) {
      setSelectedCut(selectedCut.filter((item) => item !== value));
    } else {
      setSelectedCut([...selectedCut, value]);
    }
  };

  const rangeLabels = ["Good", "Very Good", "Excellent", "Poor", "Fair"];
  const rangeLabels1 = [
    "I1",
    "I2",
    "SI3",
    "SI2",
    "SI1",
    "VS1",
    "VS2",
    "VVS2",
    "VVS1",
    "IF",
    "FL",
  ];

  const addToRecentlyViewed = async (diamond) => {
    try {
      await axios.post("http://localhost:6001/api/v1/recentlyViewed", {
        diamond,
      });
    } catch (error) {
      console.error("Error adding to recently viewed:", error);
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
                      <label
                        htmlFor="max-price"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Price
                      </label>

                      <Slider
                        className={"slider"}
                        onChange={handleSliderChange}
                        value={sliderValues}
                        min={MIN_DEFAULT}
                        max={MAX_DEFAULT}
                      />
                      <div className="flex justify-between text-gray-500">
                      <span className="flex-grow"> {/* Added flex-grow */}
                          $
                          <input
                            type="number"
                            value={minValue}
                            onChange={handleMinChange}
                            className="w-full"
                          />
                        </span>
                        <span className="flex-grow text-right">
                          $
                          <input
                            type="number"
                            value={maxValue}
                            onChange={handleMaxChange}
                            className="w-full"
                          />
                        </span>
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
                  {/* Filter Controls */}
                  <div className="flex items-center justify-between bg-gray-100 py-4 px-6">
                    <div className="flex items-center space-x-4 ">
                      <div className="bg-white py-2 px-4 rounded-md shadow-md">
                        <button
                          className="text-gray-700 "
                          onClick={() => setRecentlyViewClicked(false)}
                        >
                          Diamonds (0)
                        </button>
                      </div>
                      <div className="bg-white py-2 px-4 rounded-md shadow-md">
                        <button
                          className="text-gray-700"
                          onClick={() => setRecentlyViewClicked(true)}
                        >
                          Recently View ({recentlyViewed.length})
                        </button>
                      </div>
                      <div className="bg-white py-2 px-4 rounded-md shadow-md">
                        <button className="text-gray-700 ">Compare (0)</button>
                      </div>
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
                              <div
                                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                                key={index}
                              >
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
                                            <span className="count">
                                              {diamond.shape}
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              {" "}
                                              {diamond.productName}{" "}
                                            </a>
                                          </h3>
                                          <span className="price">
                                            Price : {diamond.price}
                                          </span>
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
        <div
          className="pagination-container"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="btn"
            style={{ backgroundColor: "E5E7EB" }}
          >
            Previous
          </button>
          <div style={{ width: "10px" }} /> {/* Space between buttons */}
          <button
            onClick={() => setPage(page + 1)}
            className="btn mr-3"
            style={{ backgroundColor: "6B21A8" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default Shop;
