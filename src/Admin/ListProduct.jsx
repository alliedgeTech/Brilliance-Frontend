import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EditProductModal from "../Admin/EditProductModal "

function ListProduct() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
 
  const handleEdit = (product) => {
    setEditedProduct(product);
    setShowModal(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:6001/api/v1/AdminDash/getAllDiamonds"
        );
        setProducts(response.data.data); // Assuming the response data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:6001/api/v1/AdminDash/deletedDiomaend/${productId}`);
      // Filter out the deleted product from the state
      setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  
  return (
    <>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <h1 className="my-6 text-4xl font-bold text-left text-gray-700 dark:text-gray-300">
         Diomand Products
        </h1>
      </div>
      <div className="p-4">
        <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
          <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
            <div className=" lg:flex md:flex flex-grow-0">
              <div className="flex">
                <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                  <button className="border flex justify-center items-center border-gray-300 hover:border-emerald-400 hover:text-emerald-400  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1={12} y1={3} x2={12} y2={15} />
                    </svg>
                    <span className="text-xs">Export</span>
                  </button>
                </div>
                <div className="lg:flex-1 md:flex-1 mr-3  sm:flex-none">
                  <button className="border flex justify-center items-center h-10 w-20 hover:text-yellow-400  border-gray-300 dark:text-gray-300 cursor-pointer  py-2 hover:border-yellow-400 rounded-md focus:outline-none">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1={12} y1={15} x2={12} y2={3} />
                    </svg>
                    <span className="text-xs">Import</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 ml-auto">
            <div className="flex justify-end mr-4 mb-4">
              <Link to="/AdminDash/Diomand">
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
                  Add Diomand Product
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
                {/* <td className="px-4 py-2">
                  <input id="selectAll" name="selectAll" type="checkbox" />
                </td> */}
                <td className="px-4 py-2">PRODUCT NAME</td>
                <td className="px-4 py-2">CATEGORY</td>
                <td className="px-4 py-2">price</td>
                <td className="px-4 py-2">Sale Price</td>
                <td className="px-4 py-2">STOCK</td>
                <td className="px-4 py-2 text-center ">size</td>
                <td className="px-4 py-2 text-center ">clarity</td>
                <td className="px-4 py-2  ">action</td>
              </tr>
            </thead>
            <tbody className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
              {products?.map((product) => (
                <tr key={product._id}>
                  <td className="px-4 py-2  ">{product.name}</td>
                  <td className="px-4 py-2 ">{product.selectedCategory}</td>
                  <td className="px-4 py-2 ">{product.price}</td>
                  <td className="px-4 py-2 ">{product.sellPrice}</td>
                  <td className="px-4 py-2 ">{product.stockQuantity}</td>
                  <td className="px-4 py-2 text-center ">{product.size}</td>
                  <td className="px-4 py-2 text-center ">{product.clarity}</td>
                  <td className="px-4 py-2 justify-items-end flex space-x-2.5  text-2xl">
                    {/* Edit Icon */}
                    <svg
    onClick={() => handleEdit(product)}
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
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
  {showModal && <EditProductModal product={editedProduct} onClose={() => setShowModal(false)} />}
                    {/* Delete Icon */}
                    <svg
                onClick={() => handleDelete(product._id)}
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
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
          <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
            <span className="flex items-center font-semibold tracking-wide uppercase">
              Showing 1-20 of 308
            </span>
            <div className="flex mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Product Page Navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent opacity-50 cursor-not-allowed"
                      disabled
                      type="button"
                      aria-label="Previous"
                    >
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                      type="button"
                    >
                      1
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      2
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      3
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      4
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      5
                    </button>
                  </li>
                  <li>
                    <span className="px-2 py-1">...</span>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                    >
                      16
                    </button>
                  </li>
                  <li>
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                      type="button"
                      aria-label="Next"
                    >
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListProduct;
