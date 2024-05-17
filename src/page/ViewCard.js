import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewCard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  console.log("cartItems",cartItems)
  useEffect(() => {
    axios.get('http://localhost:6001/api/v1/getCard')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const handleIncrement = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity++;
    setCartItems(newCartItems);
  };

  const handleDecrement = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity--;
      setCartItems(newCartItems);
    }
  };
  useEffect(() => {
    // Calculate subtotal when cartItems change
    let total = 0;
    cartItems.forEach(item => {
      total += item.productData.sellPrice * item.quantity;
    });
    setSubtotal(total);
  }, [cartItems]);
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:6001/api/v1/deleteCartItem/${itemId}`);
      // Filter out the deleted item from the cartItems state
      setCartItems(cartItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
        {cartItems.map((item, index) => (
            <div key={item._id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={`http://localhost:6001/uploads/${item.productData.images[0]}`}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                <h2 className=" font-bold text-gray-900">{item.productData?.shape || item.productData?.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">{item.size || item?.sizes}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                  <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 mr-2 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleDecrement(index)}>
                      {" "}
                      -{" "}
                    </span>
                    <span>{item.quantity}</span>
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 ml-2 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleIncrement(index)}>
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-xl ">SellPrice: {item.productData.sellPrice } </p>
                    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
        onClick={() => handleDelete(item._id)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
                  </div>
                </div>
              </div>
            </div>
        ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${subtotal.toFixed(2)}</p>
          </div>
          
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="text-sm text-gray-700">{subtotal.toFixed(2)}</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md text-white  py-1.5 font-medium  " style={{ backgroundColor: '#CB8161' }}>
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
