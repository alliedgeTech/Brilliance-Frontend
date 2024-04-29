import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewMenuForm = () => {
  const [mainMenuName, setMainMenuName] = useState('');
  const [subMenuName, setSubMenuName] = useState('');
  const [subMenuNameInSubMenu, setSubMenuNameInSubMenu] = useState('');
  const [selectedMainMenu, setSelectedMainMenu] = useState('');
  const [mainMenus, setMainMenus] = useState([]);
  const [subMenus, setSubMenus] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState('');
  const [selectedSubMenuId, setSelectedSubMenuId] = useState('');
  
  useEffect(() => {
    fetchMainMenus();
    fetchSubMenus();
  }, []);

  const fetchMainMenus = async () => {
    try {
      const response = await axios.get('http://localhost:6001/api/v1/AdminDash/getManues');
      setMainMenus(response.data);
    } catch (error) {
      console.error('Error fetching main menus:', error);
    }
  };

  const fetchSubMenus = async () => {
    try {
      const response = await axios.get('http://localhost:6001/api/v1/AdminDash/getSubmanues');
      setSubMenus(response.data);
    } catch (error) {
      console.error('Error fetching submenus:', error);
    }
  };

  const handleMainMenuSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/api/v1/AdminDash/main-menu', {
        name: mainMenuName
      });
      console.log('Main menu created:', response.data);
      setMainMenuName('');
      fetchMainMenus();
    } catch (error) {
      console.error('Error creating main menu:', error);
    }
  };

  const handleSubMenuSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/api/v1/AdminDash/sub-menu', {
        mainMenuId: selectedMainMenu,
        name: subMenuName
      });
      console.log('Sub-menu created:', response.data);
      setSubMenuName('');
      fetchSubMenus();
    } catch (error) {
      console.error('Error creating sub-menu:', error);
    }
  };

  const handleSubMenuSubmitInSubMenu = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/api/v1/AdminDash/SubmanuesMany', {
        subMenuId: selectedSubMenuId,
        name: subMenuNameInSubMenu
      });
      console.log('Sub-menu created in sub-menu:', response.data);
      setSubMenuNameInSubMenu('');
      fetchSubMenus();
    } catch (error) {
      console.error('Error creating sub-menu in sub-menu:', error);
    }
  };

  return (
    <div>
      <div className="drawer-content">
        <div className="flex flex-col w-full h-full justify-between">
          {/* Main Menu Form */}
          <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <div className="flex md:flex-row flex-col justify-between mr-20">
              <div>
                <h4 className="text-xl font-medium dark:text-gray-300">Create New Menu</h4>
              </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
              <form onSubmit={handleMainMenuSubmit}>
                <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label htmlFor="main-menu" className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                      Main Menu Name
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                      <input
                        id="main-menu"
                        className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                        type="text"
                        name="name"
                        placeholder="Main Menu Title"
                        value={mainMenuName} 
                        onChange={(e) => setMainMenuName(e.target.value)} 
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                      type="submit"
                    >
                      <span>Create Main Menu</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Submenu Form */}
          <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 mt-8">
            <h4 className="text-xl font-medium dark:text-gray-300">Create New Submenu</h4>
            <form onSubmit={handleSubMenuSubmit}>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label htmlFor="category" className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Select Main Menu
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <select
                    id="category"
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    name="category"
                    value={selectedMainMenu}
                    onChange={(e) => setSelectedMainMenu(e.target.value)}
                    required
                  >
                    <option value="">Select a main menu</option>
                    {mainMenus.map(menu => (
                      <option key={menu._id} value={menu._id}>{menu.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label htmlFor="submenu" className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Submenu Name
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <input
                    id="submenu"
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                    type="text"
                    value={subMenuName}
                    onChange={(e) => setSubMenuName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                  type="submit"
                >
                  <span>Create Submenu</span>
                </button>
              </div>
            </form>
          </div>

          {/* Submenu Form in Submenu */}
          <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 mt-8">
            <h4 className="text-xl font-medium dark:text-gray-300">Create Submenu In Submenu</h4>
            <form onSubmit={handleSubMenuSubmitInSubMenu}>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label htmlFor="sub-menu" className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Select Submenu
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <select
                    id="sub-menu"
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    name="submenu"
                    value={selectedSubMenuId}
                    onChange={(e) => setSelectedSubMenuId(e.target.value)}
                    required
                  >
                    <option value="">Select a submenu</option>
                    {subMenus.map(menu => (
                      <option key={menu._id} value={menu._id}>{menu.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label htmlFor="sub-menu-name" className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Submenu Name
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <input
                    id="sub-menu-name"
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                    type="text"
                    value={subMenuNameInSubMenu}
                    onChange={(e) => setSubMenuNameInSubMenu(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                  type="submit"
                >
                  <span>Create Submenu</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMenuForm;
