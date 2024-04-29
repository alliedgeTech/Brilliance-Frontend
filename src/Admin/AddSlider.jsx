import React, { useState } from 'react';

function AddSlider() {
    const [formData, setFormData] = useState({
        heading: '',
        paragraphText: '',
        images: [],
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'images') {
            setFormData({
                ...formData,
                [name]: files,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('heading', formData.heading);
            formDataToSend.append('paragraphText', formData.paragraphText);
            formData.images.forEach((image, index) => {
                formDataToSend.append(`image${index}`, image);
            });

            const response = await fetch('http://localhost:6001/api/v1/AdminDash/AddSlider', {
                method: 'POST',
                body: formDataToSend,
            });
            
            if (response.ok) {
                // Handle success
            } else {
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <>
            <div className="drawer-content">
                <div className="flex flex-col w-full h-full justify-between">
                    <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        <div className="flex md:flex-row flex-col justify-between mr-20">
                            <div>
                                <h4 className="text-xl font-medium dark:text-gray-300">Add Slider</h4>
                                <p className="mb-0 text-sm dark:text-gray-300">
                                    Add your Product category and necessary information from here
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
                                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                        Heading
                                    </label>
                                    <div className="col-span-8 sm:col-span-4">
                                        <input
                                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                                            type="text"
                                            name="heading"
                                            value={formData.heading}
                                            onChange={handleInputChange}
                                            placeholder="Heading title"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                        Paragraph Text
                                    </label>
                                    <div className="col-span-8 sm:col-span-4">
                                        <input
                                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                                            type="text"
                                            name="paragraphText"
                                            value={formData.paragraphText}
                                            onChange={handleInputChange}
                                            placeholder="Paragraph Text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                    <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                        Product Images
                                    </label>
                                    <div className="col-span-8 sm:col-span-4">
                                        <div className="w-full text-center">
                                            <input
                                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                                type="file"
                                                name="images"
                                                onChange={handleInputChange}
                                                multiple
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
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                                        type="submit"
                                    >
                                        <span>Add Category</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddSlider;
