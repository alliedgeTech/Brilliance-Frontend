import React, { useState, useEffect,useContext  } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import axios from "axios";
// import { CartContext } from './CartContext';

const ProductPage = () => {
  
 
  const [data, setData] = useState("");
  const [selectedColor, setSelectedColor] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [showAddToBag, setShowAddToBag] = useState(false);
  const [selectedSize, setSelectedSize] = useState('small');
const [showBuyNow, setShowBuyNow] = useState(false);
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  const navigate = useNavigate();
  // const { addToCart } = useContext(CartContext);
  const handleSetToRing = () => {

    navigate("/Engagement", { state: { ringData: data } });
  };
  const handleAddDiamond = () => {
    setShowAddToBag((prev) => !prev); 
    setShowBuyNow((prev) => !prev); 
  };
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6001/api/v1/getRing/${id}`
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
 
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const addToWishlist = async () => {
    console.log("data._id", data._id)
    try {
      await axios.post('http://localhost:6001/api/v1/addToWishlist', {
        ProductData: data,
        RingData:data
        // userId: 'user_id' 
      });
      alert('Item added to wishlist successfully!');
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
      alert('Failed to add item to wishlist. Please try again later.');
    }
  };

  const addToComparison = async () => {
    try {
      await axios.post('http://localhost:6001/api/v1/addToComparison', {
        ProductData: data
        // userId: 'user_id' 
      });
      alert('Item added to comparison successfully!');
    } catch (error) {
      console.error('Error adding item to comparison:', error);
      alert('Failed to add item to comparison. Please try again later.');
    }
  };
 
    const addToBag = async (data) => {
      console.log(data)
    try {
      await axios.post('http://localhost:6001/api/v1/add-to-cart', {
        productData: data,
        quantity: quantity,
        productId:data._id,
        size: selectedSize,
        category:"Diamond"
      });
      alert('Item added to bag successfully!');
    } catch (error) {
      console.error('Error adding item to bag:', error);
      alert('Failed to add item to bag. Please try again later.');
    }
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
  style={{ width: '300px', height: '300px' }}
/>

            <div className="grid grid-cols-1  gap-2 mt-2">
              <div>
                <h1 className="text-3xl font-bold mb-2">{data.shape}</h1>
                <p className="text-gray-700 mb-4">
                  {data.description}
                </p>
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
                <div className="mb-4">
                                        <label htmlFor="size" className="block font-bold mb-2">
                                            Size:
                                        </label>
                                        <select
                                            id="size"
                                            value={selectedSize}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                            className="border border-gray-300 rounded px-12 py-1"
                                        >
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                <div className="flex items-center mb-4">
                <div>
      <button className="bg-black text-white py-2 px-4 rounded mr-4" onClick={handleAddDiamond}>
        Add This Diamond
      </button>
      {showAddToBag && (
        <div>
          <button
          className="bg-blue-500 text-white py-2 px-4 mb-2 mt-2 rounded mr-4"
          onClick={handleSetToRing}
        >
          Set To Ring
        </button>
        </div>
      )}
      {showBuyNow && (
        <div>
      <button 
  className="bg-blue-500 text-white py-2 px-4 mb-2 mt-2 rounded"
  onClick={() => addToBag(data)}
>
  Add To Bag
</button>
        </div>
      )}
    </div>
                  
                </div>
                <div className="flex items-center">
                  <button className="flex items-center mr-4" onClick={addToWishlist}>
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
                  <button className="flex items-center" onClick={addToComparison}>
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
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6  gap-2 mt-2">
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
        )}
      </div>
    </div>
  );
};

export default ProductPage;
