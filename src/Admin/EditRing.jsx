import React, { useState } from 'react';
import axios from 'axios';

const EditProductModal = ({ product, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(product);
  const [colors, setColors] = useState(product.colors || []);
  const [sizes, setSizes] = useState(product.sizes || []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:6001/api/v1/AdminDash/UpdatedRing/${editedProduct._id}`, editedProduct);
      onClose(); 
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg gap-8 shadow-lg p-6 flex flex-wrap justify-between" style={{ width: "600px" }}>
          <div className="w-full md:w-1/2 lg:w-auto mb-4">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="productName" className="block text-xl mb-2">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  name="name"
                  value={editedProduct.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 mr-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-xl mb-2">Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={editedProduct.price}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 mr-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sellPrice" className="block text-xl mb-2">Sell Price</label>
                <input
                  type="text"
                  id="sellPrice"
                  name="sellPrice"
                  value={editedProduct.sellPrice}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 mr-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="stockQuantity" className="block text-xl mb-2">Stock Quantity</label>
                <input
                  type="text"
                  id="stockQuantity"
                  name="stockQuantity"
                  value={editedProduct.stockQuantity}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 mr-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="colors" className="block text-xl mb-2">Colors</label>
                <select
                  id="colors"
                  className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                  multiple
                  value={colors}
                  onChange={(e) => setColors(Array.from(e.target.selectedOptions, (option) => option.value))}
                >
                  <option value="Yellow">Yellow</option>
                  <option value="Pink">Pink</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="sizes" className="block text-xl mb-2">Sizes</label>
                <select
                  id="sizes"
                  className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                  multiple
                  value={sizes}
                  onChange={(e) => setSizes(Array.from(e.target.selectedOptions, (option) => option.value))}
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div className="flex justify- mt-12">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
