
function Wishlist(){
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
                      <tr className="wishlist-item">
                        <td className="wishlist-item-remove">
                          <span />
                        </td>
                        <td className="wishlist-item-image">
                          <a href="shop-details.html">
                            <img
                              width={600}
                              height={600}
                              src="media/product/3.jpg"
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="wishlist-item-info">
                          <div className="wishlist-item-name">
                            <a href="shop-details.html">Twin Hoops</a>
                          </div>
                          <div className="wishlist-item-price">
                            <span>$150.00</span>
                          </div>
                          <div className="wishlist-item-time">June 6, 2022</div>
                        </td>
                        <td className="wishlist-item-actions">
                          <div className="wishlist-item-stock">In stock</div>
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
                      <tr className="wishlist-item">
                        <td className="wishlist-item-remove">
                          <span />
                        </td>
                        <td className="wishlist-item-image">
                          <a href="shop-details.html">
                            <img
                              width={600}
                              height={600}
                              src="media/product/4.jpg"
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="wishlist-item-info">
                          <div className="wishlist-item-name">
                            <a href="shop-details.html">
                              Yilver And Turquoise Earrings
                            </a>
                          </div>
                          <div className="wishlist-item-price">
                            <del aria-hidden="true">
                              <span>$150.00</span>
                            </del>
                            <ins>
                              <span>$100.00</span>
                            </ins>
                          </div>
                          <div className="wishlist-item-time">June 6, 2022</div>
                        </td>
                        <td className="wishlist-item-actions">
                          <div className="wishlist-item-stock">In stock</div>
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