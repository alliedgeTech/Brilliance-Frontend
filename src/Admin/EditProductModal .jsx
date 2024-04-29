import React, { useState } from 'react';
import axios from 'axios';

const EditProductModal = ({ product, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose(); // Close the modal
    // Update the product with the edited values
    setEditedProduct(product => ({ ...product, ...editedProduct }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:6001/api/v1/AdminDash/UpadtedDiomaend/${product._id}`, editedProduct);
      handleSave(); // Close the modal and update the product with edited values
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    // <div className="fixed z-10 inset-0 overflow-y-auto">
    //   <div className="flex items-center justify-center min-h-screen">
    //     <div className="bg-white rounded-lg shadow-lg p-6">
    //       <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
    //       <form onSubmit={handleSubmit}>
    //         <div className="mb-4">
    //           <label htmlFor="name" className="block font-bold mb-2">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={editedProduct.name}
    //             onChange={handleInputChange}
    //             className="w-full border border-gray-300 rounded-md p-2"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="name" className="block font-bold mb-2">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={editedProduct.name}
    //             onChange={handleInputChange}
    //             className="w-full border border-gray-300 rounded-md p-2"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="name" className="block font-bold mb-2">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={editedProduct.name}
    //             onChange={handleInputChange}
    //             className="w-full border border-gray-300 rounded-md p-2"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="name" className="block font-bold mb-2">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={editedProduct.name}
    //             onChange={handleInputChange}
    //             className="w-full border border-gray-300 rounded-md p-2"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="name" className="block font-bold mb-2">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={editedProduct.name}
    //             onChange={handleInputChange}
    //             className="w-full border border-gray-300 rounded-md p-2"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="name" className="block font-bold mb-2">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={editedProduct.name}
    //             onChange={handleInputChange}
    //             className="w-full border border-gray-300 rounded-md p-2"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="name" className="block font-bold mb-2">
    //             Product Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={editedProduct.name}
    //             onChange={handleInputChange}
    //             className="w-full border border-gray-300 rounded-md p-2"
    //           />
    //         </div>
    //         {/* Add more input fields for other properties */}
    //         <div className="flex justify-end">
    //           <button
    //             type="button"
    //             onClick={onClose}
    //             className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             type="submit"
    //             className="px-4 py-2 bg-blue-500 text-white rounded-md"
    //           >
    //             Save
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>


<div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg gap-8 shadow-lg p-6 flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-auto mb-4">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label htmlFor="name1" className="block text-xl mb-2">
            Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 mr-2" // Add mr-2 for margin to the right
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name1" className="block text-xl mb-2">
            sell Price
            </label>
            <input
              type="text"
              id="sellPrice"
              name="sellPrice"
              value={editedProduct.sellPrice}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 mr-2" // Add mr-2 for margin to the right
            />
          </div>
          <div className="mt-4">
            <label htmlFor="name5" className="block text-xl mb-2">
            CLARITY
            </label>
            <input
              type="text"
              id="clarity"
              name="clarity"
              value={editedProduct.clarity}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 ml-2" // Add ml-2 for margin to the left
            />
          </div>
          {/* Add other input fields for left side */}
        </form>
      </div>
      <div className="w-full md:w-1/2 lg:w-auto mb-4">
        <form onSubmit={handleSubmit}>
         
          <div className="mt-4">
            <label htmlFor="name1" className="block text-xl mb-2">
            stockQuantity
            </label>
            <input
              type="text"
              id="stockQuantity"
              name="stockQuantity"
              value={editedProduct.stockQuantity}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 mr-2" // Add mr-2 for margin to the right
            />
          </div>
          <div className="mt-4">
            <label htmlFor="name5" className="block text-xl mb-2">
            size
            </label>
            <input
              type="text"
              id="size"
              name="size"
              value={editedProduct.size}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 ml-2" // Add ml-2 for margin to the left
            />
          </div>

          {/* Add other input fields for right side */}

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