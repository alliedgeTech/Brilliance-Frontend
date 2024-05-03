import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [data, setData] = useState("");
  const [selectedColor, setSelectedColor] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  console.log("mainImage", mainImage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6001/api/v1/getDiamondById/${id}`
        );
        console.log(response.data.data);
        setData(response.data.data);
        setMainImage(
          `http://localhost:6001/uploads/${response.data.data.images[0]}`
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  return (
    <div className=" mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data && (
          <>
            <img
              src={mainImage}
              alt="Bora Armchair"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-1  gap-2 mt-2">
            <div>
          <h1 className="text-3xl font-bold mb-2">{data.shape}</h1>
          {/* <div className="flex items-center mb-4">
            <div className="flex items-center mr-2"></div>
            <span className="text-gray-600">(3 reviews)</span>
          </div> */}
          <p className="text-gray-700 mb-4">
          {data.description}
          </p>
          {/* <div className="mb-4">
            <label htmlFor="size" className="block font-bold mb-2">
              Size:
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="border border-gray-300 rounded "
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div> */}
          {/* <div className="mb-4">
            <label htmlFor="color" className="block font-bold mb-2">
              Color:
            </label>
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full border mr-2 ${
                  selectedColor === "gold" ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: "gold" }}
                onClick={() => setSelectedColor("gold")}
              />
              <div
                className={`w-6 h-6 rounded-full border mr-2 ${
                  selectedColor === "silver"
                    ? "border-black"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: "silver" }}
                onClick={() => setSelectedColor("silver")}
              />
              <div
                className={`w-6 h-6 rounded-full border ${
                  selectedColor === "rose" ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: "rose" }}
                onClick={() => setSelectedColor("rose")}
              />
            </div>
          </div> */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-bold mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="border border-gray-300 rounded px-2 py-1 w-20"
            />
          </div>
          <div className="flex items-center mb-4">
            <button className="bg-black text-white py-2 px-4 rounded mr-4">
              Add to Cart
            </button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded">
              Buy It Now
            </button>
          </div>
          <div className="flex items-center">
            <button className="flex items-center mr-4">
              <svg
                className="w-5 h-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to Wishlist
            </button>
            <button className="flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7v8a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1H9a1 1 0 00-1 1z"
                />
              </svg>
              Compare
            </button>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-600">
              SKU: D2300-3-2-2 | CATEGORY: BRACELETS | TAGS: HOT, TREND
            </p>
            <div className="flex items-center mt-4">
              {/* Social media icons */}
            </div>
          </div>
        </div>
            </div>
            <div className="grid grid-cols-6  gap-2 mt-2" >
            {data.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:6001/uploads/${image}`}
                  className=""
                  onClick={() =>
                    handleImageClick(`http://localhost:6001/uploads/${image}`)
                  }
                />
              ))}
        </div>
        
          </>
        )}{" "}
       
      </div>
    </div>
  );
};

export default ProductPage;
