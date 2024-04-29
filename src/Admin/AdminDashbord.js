import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminDash from "./app.jsx"
import AddProduct from './AddProduct.jsx';
import AddCatogary from "./AddCatogary.jsx"
import ListProduct from './ListProduct.jsx';
import ListCatogary from './ListCatogary.jsx';
import Addmanues from "./Addmanues.jsx"
import AddSlider from "./AddSlider.jsx"
import Diomand from "./Diomand.jsx"
import ListCatogaryDiomand from "./ListCatogaryDiomand.jsx"
function AdminDashboard() {
  const location = useLocation();
  const path = location.pathname;
 
  const renderComponent = () => {
   
    if (path === '/AdminDash/Product') {
      return <AddProduct />;
    }if (path === '/AdminDash/AddCatogary') {
      return <AddCatogary />;
    }
    if (path === '/AdminDash/ListProduct') {
      return <ListProduct />;
    }
    if (path === '/AdminDash/ListCatogary') {
      return <ListCatogary />;
    }
    if (path === '/AdminDash/Addmanues') {
      return <Addmanues />;
    }
    if (path === '/AdminDash/AddSlider') {
      return <AddSlider />;
    }
    if (path === '/AdminDash/Diomand') {
      return <Diomand />;
    }
    if (path === '/AdminDash/ListDiomandCatogary') {
      return <ListCatogaryDiomand />;
    }
    return null;
  };

  return (
    <div className="flex">
      <AdminDash />
      <div className="flex-1 p-4">{renderComponent()}</div>
    </div>
  );
}

export default AdminDashboard;