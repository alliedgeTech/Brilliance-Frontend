import React, { useState,useEffect } from 'react';
import axios from 'axios';

function DiomandShape({  }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [sizes, setSizes] = useState([]); // Use an array for multiple sizes
    const [colors, setColors] = useState([]); // Use an array for multiple colors
    const [images1, setImages1] = useState([]);
    const [stockQuantity, setStockQuantity] = useState('');
    const [categories, setCategories] = useState([]);
    const [catogary,setCatogary] = useState("")
    console.log("categories",categories)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('sellPrice', sellPrice);
        formData.append('stockQuantity', stockQuantity);
        formData.append('catogary', catogary); // Append selected category ID
        // Append sizes and colors arrays to formData
        sizes.forEach((size) => formData.append('sizes', size));
        colors.forEach((color) => formData.append('colors', color));
    
        if (images1 && images1.length > 0) {
            for (let i = 0; i < images1.length; i++) {
                formData.append('images1', images1[i]);
            }
        }
    
        try {
            await axios.post('http://localhost:6001/api/v1/AdminDash/AddRing', formData);
    
            // Reset form fields after successful submission
            setName('');
            setDescription('');
            setPrice('');
            setSellPrice('');
            setSizes([]); // Reset sizes array
            setColors([]); // Reset colors array
            setImages1(null);
            setStockQuantity('');
            setCatogary(''); // Reset category selection
        } catch (error) {
            // Handle error
            console.error('Error submitting form:', error);
        }
    };
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
            <form onSubmit={handleSubmit}>
                {/* Category */}
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Category</label>
            <div className="col-span-8 sm:col-span-4">
                <select
                    id="categories"
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    value={catogary}
                    onChange={(e) => setCatogary(e.target.value)}
                >
                    <option value="">Select a category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category._id}>{category.name}</option>
                    ))}
                </select>
            </div>
        </div>
    

              
                {/* Description */}
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                        Name
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                        <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                            type="text"
                            name="name"
                            placeholder="Product name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                        Description
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                        <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 border text-sm border-gray-200 focus:border-gray-300 block w-full bg-gray-100"
                            name="description"
                            type="text"
                            placeholder="Category Description"
                            rows={4}
                            spellCheck="false"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                {/* Size */}
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Sizes</label>
                    <div className="col-span-8 sm:col-span-4">
                        <select
                            id="sizes"
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                            multiple // Allow multiple selections
                            value={sizes}
                            onChange={(e) => setSizes(Array.from(e.target.selectedOptions, (option) => option.value))}
                        >
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>
                </div>
                
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Colors</label>
                    <div className="col-span-8 sm:col-span-4">
                        <select
                            id="colors"
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                            multiple // Allow multiple selections
                            value={colors}
                            onChange={(e) => setColors(Array.from(e.target.selectedOptions, (option) => option.value))}
                        >
                            <option value="Yellow">Yellow</option>
                            <option value="Pink">Pink</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                        </select>
                    </div>
                </div>
                {/* Price */}
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                        Price
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                        <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                            type="text"
                            name="price"
                            placeholder="Product price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                {/* Sale Price */}
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                        Sale Price
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                        <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                            type="text"
                            name="salePrice"
                            placeholder="Product sale price"
                            value={sellPrice}
                            onChange={(e) => setSellPrice(e.target.value)}
                        />
                    </div>
                </div>
                {/* Quantity */}
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                        Quantity
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                        <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                            type="text"
                            name="quantity"
                            placeholder="Product quantity"
                            value={stockQuantity}
                            onChange={(e) => setStockQuantity(e.target.value)}
                        />
                    </div>
                </div>
                {/* Product Images */}
                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                        Product Images
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                        <div className="w-full text-center">
                            <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                multiple
                                onChange={(e) => {
                                    const files = Array.from(e.target.files);
                                    setImages1(files);
                                }}
                                style={{ display: "none" }}
                                id="imageInput"
                            />
                            <label htmlFor="imageInput">
                                <div
                                    className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                                    role="presentation"
                                >
                                    <span className="mx-auto flex justify-center">
                                        {/* SVG icon */}
                                    </span>
                                    <p className="text-sm mt-2">Drag your images here or click to upload</p>
                                    <em className="text-xs text-gray-400">
                                        (Only *.jpeg, *.webp and *.png images will be accepted)
                                    </em>
                                </div>
                            </label>
                            <div className="text-emerald-500" />
                            <aside className="flex flex-row flex-wrap mt-4">
                            {images1?.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Product Image ${index}`}
            className="w-24 h-24 object-cover mr-2 mb-2 rounded-md"
          />
        ))}
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                        type="submit"
                    >
                        <span>Add Ring</span>
                    </button>
                </div>
            </form>
        </>
    );
}

export default DiomandShape;
