import "./App.css"
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import { Link } from "react-router-dom";


const App = () => {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
  useProSidebar();
    return (
        <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app">
          <Menu>
        
            <MenuItem className="menu1" onClick={() => {
                  collapseSidebar();
                }}>
              <h2>QUICKPAY</h2>
            </MenuItem>
            <MenuItem> Dashboard </MenuItem>
      
            <SubMenu label="Product">
              {/* <MenuItem component={<Link to="/AdminDash/Product" />}>Add Product </MenuItem> */}
              
              <MenuItem component={<Link to="/AdminDash/Diomand" />}>Add Diomand </MenuItem>
              <MenuItem component={<Link to="/AdminDash/ListProduct" />}>List AllDiomand </MenuItem>
              <MenuItem component={<Link to="/AdminDash/ListDiomandCatogary" />}>List DiomandCatogary </MenuItem> 
              <MenuItem component={<Link to="/AdminDash/AddRing" />}>Add Ring </MenuItem>
              <MenuItem component={<Link to="/AdminDash/ListRing" />}>List Ring </MenuItem>
            </SubMenu>
            <SubMenu label="Catogary">
            <MenuItem component={<Link to="/AdminDash/AddCatogary" />}>Add Catogary   </MenuItem>
            <MenuItem component={<Link to="/AdminDash/ListCatogary" />}>ListCatogary  </MenuItem>
            
            <MenuItem component={<Link to="/AdminDash/ListRingCatogary" />}>ListRingCatogary  </MenuItem>
            
            </SubMenu>
            <SubMenu label="Manues & Slider">
              <MenuItem component={<Link to="/AdminDash/Addmanues" />}>Add manues</MenuItem>
              <MenuItem component={<Link to="/AdminDash/AddSlider" />}>Add Slider</MenuItem>
            </SubMenu>
            <MenuItem> Transactions </MenuItem>
            <SubMenu label="Settings">
              <MenuItem> Account </MenuItem>
              <MenuItem> Privacy </MenuItem>
              <MenuItem> Notifications </MenuItem>
            </SubMenu>
            <MenuItem> Logout </MenuItem>
          </Menu>
        </Sidebar>
      
      </div>
    );
  };
  export default App;