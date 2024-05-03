import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Header/Navbar';
import Home from './page/Home/Home';
import Shop from './page/Shop';
import Footer from './page/Footer';
import Wishlist from './page/Whishlist';
import ViewCard from './page/ViewCard';
import CheckOut from './page/CheckOut';
import AdminDash from "./Admin/AdminDashbord";
import Bracelet from './page/Products/Bracelet';
import Earring from './page/Products/Earring';
import Necklace from './page/Products/Necklace';
import Ring from './page/Products/Ring';
import Diomand from "./Admin/Diomand.jsx"
import Forgot from './Header/Forgot';

import OTP from './Header/Otp';
import ListCatogaryDiomand from "./Admin/ListCatogaryDiomand"
import NewPassword from "./Header/New-Password.jsx"
import AddProduct from "./Admin/AddProduct";
import AddCatogary from "./Admin/AddCatogary"
import DaymandSherch from "./page/Diomand/diamond-search.jsx"


import ListCatogary from "./Admin/ListCatogary"
import Addmanues from "./Admin/Addmanues"
import AddSlider from './Admin/AddSlider';
import Login from './Header/Auth/Login.jsx';
import Register from './Header/Auth/Register.jsx';
import Otp from "./Header/Auth/verifyOtp.jsx"

import SingleProduct from './page/Diomand/SingleProduct.jsx';



function App() {

  const location = useLocation();
  const isNotAdminDash = !location.pathname.startsWith("/AdminDash");

  return (
    <>
      {isNotAdminDash && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/DaymandSherch' element={<DaymandSherch />} />
        <Route path='/single/:id' element={<SingleProduct />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/OtpVerify' element={<Otp />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/ViewCard' element={<ViewCard />} />
        <Route path='/CheckOut' element={<CheckOut />} />
        <Route path='/Bracelet' element={<Bracelet />} />
        <Route path='/Earring' element={<Earring />} />
        <Route path='/Necklace' element={<Necklace />} />
        <Route path='/Ring' element={<Ring />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/reset-password' element={<NewPassword />} />

        
        {/* AdminDash route */}
        <Route path="/AdminDash/*" element={<AdminDash />}>
          <Route path='Product' element={<AddProduct />} /> 
          <Route path='AddCatogary' element={<AddCatogary />} /> 
          <Route path='ListProduct' element={<AddCatogary />} /> 
          <Route path='ListCatogary' element={<ListCatogary />} /> 
          <Route path='Addmanues' element={<Addmanues />} />
          <Route path='AddSlider' element={<AddSlider />} />
          <Route path='Diomand' element={<Diomand />} />
          <Route path='ListDiomandCatogary' element={<ListCatogaryDiomand />} />
      
        </Route>
      </Routes>
      {isNotAdminDash && <Footer />}
      
    </>
  );
}

export default App;
