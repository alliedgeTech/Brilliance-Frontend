function ViewCard(){
    return(<>
    <>
    <div id="page" className="hfeed page-wrapper">

  <div id="site-main" className="site-main">
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">Shopping Cart</h1>
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
              <div className="shop-cart">
                <div className="row">
                  <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                    <form className="cart-form" action="#" method="post">
                      <div className="table-responsive">
                        <table className="cart-items table" cellSpacing={0}>
                          <thead>
                            <tr>
                              <th className="product-thumbnail">Product</th>
                              <th className="product-price">Price</th>
                              <th className="product-quantity">Quantity</th>
                              <th className="product-subtotal">Subtotal</th>
                              <th className="product-remove">&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="cart-item">
                              <td className="product-thumbnail">
                                <a href="shop-details.html">
                                  <img
                                    width={600}
                                    height={600}
                                    src="media/product/3.jpg"
                                    className="product-image"
                                    alt=""
                                  />
                                </a>
                                <div className="product-name">
                                  <a href="shop-details.html">Twin Hoops</a>
                                </div>
                              </td>
                              <td className="product-price">
                                <span className="price">$150.00</span>
                              </td>
                              <td className="product-quantity">
                                <div className="quantity">
                                  <button type="button" className="minus">
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    className="qty"
                                    step={1}
                                    min={0}
                                    max=""
                                    name="quantity"
                                    defaultValue={2}
                                    title="Qty"
                                    size={4}
                                    placeholder=""
                                    inputMode="numeric"
                                    autoComplete="off"
                                  />
                                  <button type="button" className="plus">
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="product-subtotal">
                                <span>$300.00</span>
                              </td>
                              <td className="product-remove">
                                <a href="#" className="remove">
                                  ×
                                </a>
                              </td>
                            </tr>
                         
                            <tr>
                              <td colSpan={6} className="actions">
                                <div className="bottom-cart">
                                  <div className="coupon">
                                  
                                  </div>
                                  <h2>
                                    <a href="shop-grid-left.html">
                                      Continue Shopping
                                    </a>
                                  </h2>
                                 
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                    <div className="cart-totals">
                      <h2>Cart totals</h2>
                      <div>
                        <div className="cart-subtotal">
                          <div className="title">Subtotal</div>
                          <div>
                            <span>$480.00</span>
                          </div>
                        </div>
                        <div className="shipping-totals">
                          <div className="title">Shipping</div>
                          <div>
                            <ul className="shipping-methods custom-radio">
                              <li>
                                <input
                                  type="radio"
                                  name="shipping_method"
                                  data-index={0}
                                  defaultValue="free_shipping"
                                  className="shipping_method"
                                  defaultChecked="checked"
                                />
                                <label>Free shipping</label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="shipping_method"
                                  data-index={0}
                                  defaultValue="flat_rate"
                                  className="shipping_method"
                                />
                                <label>Flat rate</label>
                              </li>
                            </ul>
                            <p className="shipping-desc">
                              Shipping options will be updated during checkout.
                            </p>
                          </div>
                        </div>
                        <div className="order-total">
                          <div className="title">Total</div>
                          <div>
                            <span>$480.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="proceed-to-checkout">
                        <a
                          href="shop-checkout.html"
                          className="checkout-button button"
                        >
                          Proceed to checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-cart-empty">
                <div className="notices-wrapper">
                  <p className="cart-empty">Your cart is currently empty.</p>
                </div>
                <div className="return-to-shop">
                  <a className="button" href="shop-grid-left.html">
                    Return to shop
                  </a>
                </div>
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

</>

    </>)
}

export default ViewCard;