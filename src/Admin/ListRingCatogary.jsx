import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ListCategory() {
  const [categories, setCategories] = useState([]);
console.log("categories",categories)
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
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:6001/api/v1/AdminDash/delteRingCatogary/${productId}`);
      // Filter out the deleted product from the state
      setCategories(prevProducts => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  

  return (
    <>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <h1 className="my-6 text-4xl font-bold text-left text-gray-700 dark:text-gray-300">
          Catogary
        </h1>
      </div>
      <div className="p-4">
        <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
          <div className="flex flex-col sm:flex-row gap-4 ml-auto">
            <div className="flex justify-end mr-4 mb-4">
              <Link to="/AdminDash/AddCatogary">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full rounded-md h-12"
                  type="button"
                >
                  <span className="mr-2">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </span>
                  Add Category
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8 rounded-b-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
              <tr>
                <td className="px-4 py-2">PRODUCT NAME</td>
                <td className="px-4 py-2">ACTION</td>
              </tr>
            </thead>
            <tbody className="text-xs text-left text-gray-500">
              {categories.map((category, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 bg-white text-xl">{category.name}</td>
                  <td className="px-4 py-2 bg-white flex space-x-2.5 text-2xl">
                    <svg
                    onClick={()=>handleDelete(category._id)}
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListCategory;
