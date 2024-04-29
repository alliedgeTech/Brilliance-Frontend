import React, { useState,useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
 
const [name , setName]=useState('')
const [description , setDescription]=useState('')
const [price , setPrice]=useState('')
const [sellPrice , setSellPrice]=useState('')
const [size ,setSize]=useState('')
const [cut , setCut ]=useState('')
const [clarity , setclarity]=useState('')
const [categories,setCategories] = useState('');
const [images, setImages] = useState(null);
const [stockQuantity , setstockQuantity]=useState('')
const [selectedCategory, setSelectedCategory] = useState('');

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:6001/api/v1/AdminDash/getCatogary');
      // Log response data to verify its structure
      console.log('Response Data:', response.data);
      
     
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  fetchCategories();
}, []);





const handleSubmit = async (e) => {
  e.preventDefault();

  // Log form data to the console
  console.log("Form Data:", {
    name,
    description,
    price,
    sellPrice,
    size,
    cut,
    clarity,
    stockQuantity,
    images,
    selectedCategory
  });

  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('sellPrice', sellPrice);
  formData.append('size', size);
  formData.append('cut', cut);
  formData.append('clarity', clarity);
  formData.append('stockQuantity', stockQuantity);
  formData.append('selectedCategory', selectedCategory);

  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]);
  }

  try {
    const response = await axios.post('http://localhost:6001/api/v1/AdminDash/Product', formData);
    
    console.log('Product data sent to the server:', response.data);
    // Reset form after successful submission
    setName('');
    setDescription('');
    setPrice('');
    setSellPrice('');
    setSize('')
    setCut('');
    setclarity('');
    setImages([]);
    setstockQuantity('');
    setSelectedCategory('')
    alert('Product added successfully!');
  } catch (error) {
    console.error('Error sending product data:', error);
    alert('Failed to add product.');
  }
};

  return (

    <div className="flex flex-col w-full h-full justify-between">
  <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
    <div className="flex md:flex-row flex-col justify-between mr-20">
      <div>
        <h4 className="text-xl font-medium dark:text-gray-300">Add Category</h4>
        <p className="mb-0 text-sm dark:text-gray-300">
          Add your Product category and necessary information from here
        </p>
      </div>
      <select
        name="language"
        className="block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700"
      >
        <option value="en" hidden="">
          en
        </option>
        <option value="de">de </option>
        <option value="en">en </option>
      </select>
    </div>
  </div>
  <div
    className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200"
    style={{
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%"
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "scroll",
        marginRight: "-17px",
        marginBottom: "-17px"
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
          {/* Category Name */}
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
          Category
        </label>
        <div className="col-span-8 sm:col-span-4">
        <select id="category" className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700" name="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
  <option value="">Select Category</option>
  {categories && categories?.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ))}
</select>
        </div>
      </div>
          {/* Product Name */}
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
              Product Name
            </label>
            <div className="col-span-8 sm:col-span-4">
              <input
                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                type="text"
                name="name"
                placeholder="Product name"
                defaultValue=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          {/* Description */}
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
                defaultValue={""}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          {/* Size */}
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
          Size
        </label>
        <div className="col-span-8 sm:col-span-4">
          <select
            id="size"
            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        </div>
          {/* Cut */}
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
              Cut
            </label>
            <div className="col-span-8 sm:col-span-4">
              <select
                id="cut"
                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                name="cut"
                defaultValue=""
                value={cut}
                onChange={(e) => setCut(e.target.value)}
              >
                <option value="">Select Cut</option>
                <option value="Excellent">Excellent</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>
          {/* Clarity */}
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
              Clarity
            </label>
            <div className="col-span-8 sm:col-span-4">
              <select
                id="clarity"
                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                name="clarity"
                defaultValue=""
                value={clarity}
                onChange={(e) => setclarity(e.target.value)}
              >
                <option value="">Select Clarity</option>
                <option value="IF">IF</option>
                <option value="VVS1">VVS1</option>
                <option value="VVS2">VVS2</option>
                <option value="VS1">VS1</option>
                <option value="VS2">VS2</option>
                <option value="SI1">SI1</option>
                <option value="SI2">SI2</option>
                <option value="I1">I1</option>
                <option value="I2">I2</option>
                <option value="I3">I3</option>
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
                value={stockQuantity}
                onChange={(e) => setstockQuantity(e.target.value)}
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
  onChange={(e) => setImages(e.target.files)}
  style={{ display: "none" }}
  id="imageInput"
/>
            <label htmlFor="imageInput">
              <div className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6" role="presentation">
                <span className="mx-auto flex justify-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-3xl text-emerald-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1={12} y1={12} x2={12} y2={21} />
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                    <polyline points="16 16 12 12 8 16" />
                  </svg>
                </span>
                <p className="text-sm mt-2">Drag your images here or click to upload</p>
                <em className="text-xs text-gray-400">
                  (Only *.jpeg, *.webp and *.png images will be accepted)
                </em>
              </div>
            </label>
            <div className="text-emerald-500" />
            {/* <aside className="flex flex-row flex-wrap mt-4">
              {images?.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Product Image ${index}`} className="w-24 h-24 object-cover mr-2 mb-2 rounded-md" />
              ))}
            </aside> */}
          </div>
        </div>
           
          <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
            <button
              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
              type="submit"
            >
              <span>Add Category</span>
            </button>
          </div>

          </div>
        </div>
        {/* Buttons */}
      
      </form>
    </div>
    {/* Scrollbar indicators */}
  
  </div>
</div>

  );
};

export default ProductForm;
