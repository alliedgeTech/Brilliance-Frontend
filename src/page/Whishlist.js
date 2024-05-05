
import React, { useState, useEffect } from "react";
import axios from "axios"

function Wishlist(){
  const [wishlistItems, setWishlistItems] = useState([]);
  console.log("wishlistItems",wishlistItems)

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get("http://localhost:6001/api/v1/getWishlist");
        setWishlistItems(response.data.data); // Assuming the wishlist items are returned in the 'data' property
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchWishlistItems();
  }, []);
    return(<>
    <>
  <div id="page" className="hfeed page-wrapper">
  
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading">Wishlist</h1>
              </div>
              <div className="breadcrumbs">
                <a href="index-2.html">Home</a>
                <span className="delimiter" />
                <a href="shop-grid-left.html">Shop</a>
                <span className="delimiter" />
                Shopping Cart
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="shop-wishlist">
                  <table className="wishlist-items">
                    <tbody>
                    {wishlistItems.map((item,index)=>{
  return(
    <tr className="wishlist-item" key={index}>
      <td className="wishlist-item-remove">
        <span />
      </td>
      <td className="wishlist-item-image">
        <a href="shop-details.html">
          <img
            width={600}
            height={600}
            src={`http://localhost:6001/uploads/${item.ProductData.images[0]}`}

            alt=""
          />
        </a>
      </td>
      <td className="wishlist-item-info">
        <div className="wishlist-item-name">
          <a href="shop-details.html">{item.ProductData.shape}</a>
        </div>
        <div className="wishlist-item-price">
          <span>Price :{item.ProductData.price}</span>
        </div>
        {/* <div className="wishlist-item-time">June 6, 2022</div> */}
      </td>
      <td className="wishlist-item-actions">
        {/* <div className="wishlist-item-stock">In stock</div> */}
        <div className="wishlist-item-add">
          <div
            className="btn-add-to-cart"
            data-title="Add to cart"
          >
            <a
              rel="nofollow"
              href="#"
              className="product-btn"
            >
              Add to cart
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
})}

                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* #content */}
        </div>
        {/* #primary */}
      </div>
      {/* #main-content */}
    </div>
 
  </div>
  {/* Back Top button */}
  <div className="back-top button-show">
    <i className="arrow_carrot-up" />
  </div>
  {/* Search */}
  
</>

    </>)
}
export default Wishlist