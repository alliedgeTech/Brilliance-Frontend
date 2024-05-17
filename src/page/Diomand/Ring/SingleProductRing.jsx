import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";

function SingleRing(){
    const [data, setData] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('small'); // State for selected size
    const { id } = useParams();
    const location = useLocation();
    const [isAddingToBag, setIsAddingToBag] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:6001/api/v1/getRing/${id}`);
                setData(response.data.data);
                setMainImage(`http://localhost:6001/uploads/${response.data.data.images[0]}`);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error gracefully, display a message to the user
            }
        };
        fetchData();
    }, [id]);

    const handleImageClick = (newImage) => {
        setMainImage(newImage);
    };

    const addToWishlist = async () => {
        try {
            await axios.post('http://localhost:6001/api/v1/addToWishlist', {
                ProductData: data,
                RingData: data
            });
            alert('Item added to wishlist successfully!');
        } catch (error) {
            console.error('Error adding item to wishlist:', error);
            alert('Failed to add item to wishlist. Please try again later.');
        }
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else {
            // Handle invalid input, maybe display a message to the user
        }
    };

    const addToBag = async (data) => {
        if (isAddingToBag) return; // Prevent multiple clicks while adding
    
        setIsAddingToBag(true);
        try {
            await axios.post('http://localhost:6001/api/v1/add-to-cart', {
                productDataRing: data,
                quantity: quantity,
                size: selectedSize, // Include selected size in the request
                productId: data._id,
                category: "Ring"
            });
            alert('Item added to bag successfully!');
        } catch (error) {
            console.error('Error adding item to bag:', error);
            alert('Failed to add item to bag. Please try again later.');
        } finally {
            setIsAddingToBag(false);
        }
    };
    return(<>
     <div className="mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data && (
                        <>
                            <img
                                src={mainImage}
                                alt="Ring"
                                className="w-full rounded-lg"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <div className="grid grid-cols-1 gap-2 mt-2">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">Name :{data.name}</h1>
                                    <p className="text-gray-700 mb-4">Description :{data.description}</p>
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
                                        {/* Assuming handleAddDiamond is defined */}
                                        <button className="bg-black text-white py-2 px-4 rounded mr-4" >
                                            Add This Ring
                                        </button>
                                        <button className="bg-orange-500 text-white py-2 px-4 rounded mr-4" onClick={addToWishlist}>
                                            Add To Wishlist
                                        </button>
                                        <button className="bg-orange-500 text-white py-2 px-4 rounded mr-4" onClick={() => addToBag(data)}>
                                            Add To Card
                                        </button>
                                    </div>
                                    <div className="mt-8">
                                        <p className="text-xl text-gray-600">
                                            Price : {data.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-2 mt-2">
                                {data.images && data.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`http://localhost:6001/uploads/${image}`}
                                        alt={`Ring ${index}`}
                                        className=""
                                        onClick={() => handleImageClick(`http://localhost:6001/uploads/${image}`)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
    </>)
}

export default SingleRing;
