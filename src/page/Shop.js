function Shop(){
    return(<>
    <>
  <div id="page" className="hfeed page-wrapper">
   
        
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50 p-t-10">
                    {/* Block Product Categories */}
                    <div className="block block-product-cats">
                      <div className="block-title">
                        <h2>Categories</h2>
                      </div>
                      <div className="block-content">
                        <div className="product-cats-list">
                          <ul>
                            <li className="current">
                              <a href="shop-grid-left.html">
                                Bracelets <span className="count">9</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Earrings <span className="count">4</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Necklaces <span className="count">3</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Charms <span className="count">6</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Rings <span className="count">2</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid-left.html">
                                Wedding &amp; Bridal{" "}
                                <span className="count">4</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Block Product Filter */}
                    <div className="block block-product-filter">
                      <div className="block-title">
                        <h2>Price</h2>
                      </div>
                      <div className="block-content">
                        <div id="slider-range" className="price-filter-wrap">
                          <div className="filter-item price-filter">
                            <div className="layout-slider">
                              <input
                                id="price-filter"
                                name="price"
                                defaultValue="0;100"
                              />
                            </div>
                            <div className="layout-slider-settings" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Block Product Filter */}
                    <div className="block block-product-filter clearfix">
                      <div className="block-title">
                        <h2>Color</h2>
                      </div>
                      <div className="block-content">
                        <ul className="filter-items color">
                          <li>
                            <a href="shop-grid-left.html">
                              <span className="color-wrap">
                                <span className="color antique" />
                                Antique
                              </span>
                              <span className="count">3</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span className="color-wrap">
                                <span className="color bone" />
                                Bone
                              </span>
                              <span className="count">2</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span className="color-wrap">
                                <span className="color chestnut" />
                                Chestnut
                              </span>
                              <span className="count">5</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span className="color-wrap">
                                <span className="color crimson" />
                                Crimson
                              </span>
                              <span className="count">8</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span className="color-wrap">
                                <span className="color eggshell" />
                                Eggshell
                              </span>
                              <span className="count">3</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span className="color-wrap">
                                <span className="color grullo" />
                                Grullo
                              </span>
                              <span className="count">4</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Block Product Filter */}
                    <div className="block block-product-filter clearfix">
                      <div className="block-title">
                        <h2>Size</h2>
                      </div>
                      <div className="block-content">
                        <ul className="filter-items text">
                          <li>
                            <a href="shop-grid-left.html">
                              <span>L</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span>M</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span>S</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Block Product Filter */}
                    <div className="block block-product-filter clearfix">
                      <div className="block-title">
                        <h2>Brands</h2>
                      </div>
                      <div className="block-content">
                        <ul className="filter-items image">
                          <li>
                            <a href="shop-grid-left.html">
                              <span>
                                <img src="media/brand/1.jpg" alt="Brand" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span>
                                <img src="media/brand/2.jpg" alt="Brand" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span>
                                <img src="media/brand/3.jpg" alt="Brand" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span>
                                <img src="media/brand/4.jpg" alt="Brand" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              <span>
                                <img src="media/brand/5.jpg" alt="Brand" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Block Products */}
                    <div className="block block-products">
                      <div className="block-title">
                        <h2>Feature Product</h2>
                      </div>
                      <div className="block-content">
                        <ul className="products-list">
                          <li className="product-item">
                            <a
                              href="shop-details.html"
                              className="product-image"
                            >
                              <img src="media/product/1.jpg" />
                            </a>
                            <div className="product-content">
                              <h2 className="product-title">
                                <a href="shop-details.html">
                                  Medium Flat Hoops
                                </a>
                              </h2>
                              <div className="rating">
                                <div className="star star-5" />
                              </div>
                              <span className="price">
                                <del aria-hidden="true">
                                  <span>$150.00</span>
                                </del>
                                <ins>
                                  <span>$100.00</span>
                                </ins>
                              </span>
                            </div>
                          </li>
                          <li className="product-item">
                            <a
                              href="shop-details.html"
                              className="product-image"
                            >
                              <img src="media/product/2.jpg" />
                            </a>
                            <div className="product-content">
                              <h2 className="product-title">
                                <a href="shop-details.html">
                                  Bold Pearl Hoop Earrings
                                </a>
                              </h2>
                              <div className="rating">
                                <div className="star star-0" />
                              </div>
                              <span className="price">$120.00</span>
                            </div>
                          </li>
                          <li className="product-item">
                            <a
                              href="shop-details.html"
                              className="product-image"
                            >
                              <img src="media/product/3.jpg" />
                            </a>
                            <div className="product-content">
                              <h2 className="product-title">
                                <a href="shop-details.html">Twin Hoops</a>
                              </h2>
                              <div className="rating">
                                <div className="star star-4" />
                              </div>
                              <span className="price">
                                <del aria-hidden="true">
                                  <span>$200.00</span>
                                </del>
                                <ins>
                                  <span>$180.00</span>
                                </ins>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                    <div className="products-topbar clearfix">
                      <div className="products-topbar-left">
                        <div className="products-count">
                          Showing all 21 results
                        </div>
                      </div>
                      <div className="products-topbar-right">
                        <div className="products-sort dropdown">
                          <span
                            className="sort-toggle dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="true"
                          >
                            Default sorting
                          </span>
                          <ul
                            className="sort-list dropdown-menu"
                            x-placement="bottom-start"
                          >
                            <li className="active">
                              <a href="#">Default sorting</a>
                            </li>
                            <li>
                              <a href="#">Sort by popularity</a>
                            </li>
                            <li>
                              <a href="#">Sort by average rating</a>
                            </li>
                            <li>
                              <a href="#">Sort by latest</a>
                            </li>
                            <li>
                              <a href="#">Sort by price: low to high</a>
                            </li>
                            <li>
                              <a href="#">Sort by price: high to low</a>
                            </li>
                          </ul>
                        </div>
                        <ul className="layout-toggle nav nav-tabs">
                          <li className="nav-item">
                            <a
                              className="layout-grid nav-link active"
                              data-toggle="tab"
                              href="#layout-grid"
                              role="tab"
                            >
                              <span className="icon-column">
                                <span className="layer first">
                                  <span />
                                  <span />
                                  <span />
                                </span>
                                <span className="layer middle">
                                  <span />
                                  <span />
                                  <span />
                                </span>
                                <span className="layer last">
                                  <span />
                                  <span />
                                  <span />
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="layout-list nav-link"
                              data-toggle="tab"
                              href="#layout-list"
                              role="tab"
                            >
                              <span className="icon-column">
                                <span className="layer first">
                                  <span />
                                  <span />
                                </span>
                                <span className="layer middle">
                                  <span />
                                  <span />
                                </span>
                                <span className="layer last">
                                  <span />
                                  <span />
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="layout-grid"
                        role="tabpanel"
                      >
                        <div className="products-list grid">
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/1.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/1-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-0" />
                                      <span className="count">(0 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Medium Flat Hoops
                                      </a>
                                    </h3>
                                    <span className="price">$150.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-33%</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/5.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/5-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-5" />
                                      <span className="count">(1 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Yilver And Turquoise Earrings
                                      </a>
                                    </h3>
                                    <span className="price">
                                      <del aria-hidden="true">
                                        <span>$150.00</span>
                                      </del>
                                      <ins>
                                        <span>$100.00</span>
                                      </ins>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/2.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/2-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-0" />
                                      <span className="count">(0 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Bold Pearl Hoop Earrings
                                      </a>
                                    </h3>
                                    <span className="price">$150.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-33%</div>
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/6.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/6-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-4" />
                                      <span className="count">(2 reviews)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Bora Armchair
                                      </a>
                                    </h3>
                                    <span className="price">
                                      <del aria-hidden="true">
                                        <span>$150.00</span>
                                      </del>
                                      <ins>
                                        <span>$100.00</span>
                                      </ins>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-23%</div>
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/3.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/3-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-5" />
                                      <span className="count">(5 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">Twin Hoops</a>
                                    </h3>
                                    <span className="price">
                                      <del aria-hidden="true">
                                        <span>$100.00</span>
                                      </del>
                                      <ins>
                                        <span>$90.00</span>
                                      </ins>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-37%</div>
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/7.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/7-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-0" />
                                      <span className="count">(0 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Diamond Bracelet
                                      </a>
                                    </h3>
                                    <span className="price">
                                      <del aria-hidden="true">
                                        <span>$79.00</span>
                                      </del>
                                      <ins>
                                        <span>$50.00</span>
                                      </ins>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/4.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/4-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-0" />
                                      <span className="count">(0 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Yilver And Turquoise Earrings
                                      </a>
                                    </h3>
                                    <span className="price">$120.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-10%</div>
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/8.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/8-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-5" />
                                      <span className="count">(3 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        X Hoop Earrings
                                      </a>
                                    </h3>
                                    <span className="price">
                                      <del aria-hidden="true">
                                        <span>$200.00</span>
                                      </del>
                                      <ins>
                                        <span>$180.00</span>
                                      </ins>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/9.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/9-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                    <span
                                      className="product-quickview"
                                      data-title="Quick View"
                                    >
                                      <a
                                        href="#"
                                        className="quickview quickview-button"
                                      >
                                        Quick View <i className="icon-search" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents text-center">
                                    <div className="rating">
                                      <div className="star star-4" />
                                      <span className="count">(1 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Yintage Medallion Necklace
                                      </a>
                                    </h3>
                                    <span className="price">$140.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="layout-list"
                        role="tabpanel"
                      >
                        <div className="products-list list">
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/1.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/1-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      Medium Flat Hoops
                                    </a>
                                  </h3>
                                  <span className="price">$150.00</span>
                                  <div className="rating">
                                    <div className="star star-5" />
                                    <div className="review-count">
                                      (1<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/5.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/5-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      Yilver And Turquoise Earrings
                                    </a>
                                  </h3>
                                  <span className="price">
                                    <del aria-hidden="true">
                                      <span>$150.00</span>
                                    </del>
                                    <ins>
                                      <span>$100.00</span>
                                    </ins>
                                  </span>
                                  <div className="rating">
                                    <div className="star star-0" />
                                    <div className="review-count">
                                      (0<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/2.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/2-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      Bold Pearl Hoop Earrings
                                    </a>
                                  </h3>
                                  <span className="price">$150.00</span>
                                  <div className="rating">
                                    <div className="star star-4" />
                                    <div className="review-count">
                                      (1<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/6.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/6-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      Bora Armchair
                                    </a>
                                  </h3>
                                  <span className="price">
                                    <del aria-hidden="true">
                                      <span>$120.00</span>
                                    </del>
                                    <ins>
                                      <span>$100.00</span>
                                    </ins>
                                  </span>
                                  <div className="rating">
                                    <div className="star star-0" />
                                    <div className="review-count">
                                      (0<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/3.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/3-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">Twin Hoops</a>
                                  </h3>
                                  <span className="price">
                                    <del aria-hidden="true">
                                      <span>$100.00</span>
                                    </del>
                                    <ins>
                                      <span>$90.00</span>
                                    </ins>
                                  </span>
                                  <div className="rating">
                                    <div className="star star-5" />
                                    <div className="review-count">
                                      (3<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/7.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/7-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      Diamond Bracelet
                                    </a>
                                  </h3>
                                  <span className="price">
                                    <del aria-hidden="true">
                                      <span>$79.00</span>
                                    </del>
                                    <ins>
                                      <span>$50.00</span>
                                    </ins>
                                  </span>
                                  <div className="rating">
                                    <div className="star star-5" />
                                    <div className="review-count">
                                      (2<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/4.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/4-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      Yilver And Turquoise Earrings
                                    </a>
                                  </h3>
                                  <span className="price">$120.00</span>
                                  <div className="rating">
                                    <div className="star star-4" />
                                    <div className="review-count">
                                      (1<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/8.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/8-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      X Hoop Earrings
                                    </a>
                                  </h3>
                                  <span className="price">
                                    <del aria-hidden="true">
                                      <span>$200.00</span>
                                    </del>
                                    <ins>
                                      <span>$180.00</span>
                                    </ins>
                                  </span>
                                  <div className="rating">
                                    <div className="star star-5" />
                                    <div className="review-count">
                                      (4<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products-entry clearfix product-wapper">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover border">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/9.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/9-2.jpg"
                                        className="hover-image back"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="products-content">
                                  <h3 className="product-title">
                                    <a href="shop-details.html">
                                      Yintage Medallion Necklace
                                    </a>
                                  </h3>
                                  <span className="price">$140.00</span>
                                  <div className="rating">
                                    <div className="star star-5" />
                                    <div className="review-count">
                                      (1<span> review</span>)
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <div
                                      className="btn-add-to-cart"
                                      data-title="Add to cart"
                                    >
                                      <a
                                        rel="nofollow"
                                        href="#"
                                        className="product-btn button"
                                      >
                                        Add to cart
                                      </a>
                                    </div>
                                    <div
                                      className="btn-wishlist"
                                      data-title="Wishlist"
                                    >
                                      <button className="product-btn">
                                        Add to wishlist
                                      </button>
                                    </div>
                                    <div
                                      className="btn-compare"
                                      data-title="Compare"
                                    >
                                      <button className="product-btn">
                                        Compare
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis…
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="pagination">
                      <ul className="page-numbers">
                        <li>
                          <a className="prev page-numbers" href="#">
                            Previous
                          </a>
                        </li>
                        <li>
                          <span
                            aria-current="page"
                            className="page-numbers current"
                          >
                            1
                          </span>
                        </li>
                        <li>
                          <a className="page-numbers" href="#">
                            2
                          </a>
                        </li>
                        <li>
                          <a className="page-numbers" href="#">
                            3
                          </a>
                        </li>
                        <li>
                          <a className="next page-numbers" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
  </div>
  {/* Back Top button */}
  <div className="back-top button-show">
    <i className="arrow_carrot-up" />
  </div>
  {/* Search */}
  <div className="search-overlay">
    <div className="close-search" />
    <div className="wrapper-search">
      <form
        role="search"
        method="get"
        className="search-from ajax-search"
        action="#"
      >
        <a href="#" className="search-close" />
        <div className="search-box">
          <button id="searchsubmit" className="btn" type="submit">
            <i className="icon-search" />
          </button>
          <input
            type="text"
            autoComplete="off"
            defaultValue=""
            name="s"
            className="input-search s"
            placeholder="Search..."
          />
          <div className="content-menu_search">
            <label>Suggested</label>
            <ul id="menu_search" className="menu">
              <li>
                <a href="#">Earrings</a>
              </li>
              <li>
                <a href="#">Necklaces</a>
              </li>
              <li>
                <a href="#">Bracelets</a>
              </li>
              <li>
                <a href="#">Jewelry Box</a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* Wishlist */}
  <div className="wishlist-popup">
    <div className="wishlist-popup-inner">
      <div className="wishlist-popup-content">
        <div className="wishlist-popup-content-top">
          <span className="wishlist-name">Wishlist</span>
          <span className="wishlist-count-wrapper">
            <span className="wishlist-count">2</span>
          </span>
          <span className="wishlist-popup-close" />
        </div>
        <div className="wishlist-popup-content-mid">
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
                  <div className="wishlist-item-time">June 4, 2022</div>
                </td>
                <td className="wishlist-item-actions">
                  <div className="wishlist-item-stock">In stock</div>
                  <div className="wishlist-item-add">
                    <div data-title="Add to cart">
                      <a rel="nofollow" href="#">
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
                  <div className="wishlist-item-time">June 4, 2022</div>
                </td>
                <td className="wishlist-item-actions">
                  <div className="wishlist-item-stock">In stock</div>
                  <div className="wishlist-item-add">
                    <div data-title="Add to cart">
                      <a rel="nofollow" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wishlist-popup-content-bot">
          <div className="wishlist-popup-content-bot-inner">
            <a className="wishlist-page" href="shop-wishlist.html">
              Open wishlist page
            </a>
            <span className="wishlist-continue" data-url="">
              Continue shopping
            </span>
          </div>
          <div className="wishlist-notice wishlist-notice-show">
            Added to the wishlist!
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Compare */}
  <div className="compare-popup">
    <div className="compare-popup-inner">
      <div className="compare-table">
        <div className="compare-table-inner">
          <a href="#" id="compare-table-close" className="compare-table-close">
            <span className="compare-table-close-icon" />
          </a>
          <div className="compare-table-items">
            <table id="product-table" className="product-table">
              <thead>
                <tr>
                  <th>
                    <a href="#" className="compare-table-settings">
                      Settings
                    </a>
                  </th>
                  <th>
                    <a href="shop-details.html">Twin Hoops</a>{" "}
                    <span className="remove">remove</span>
                  </th>
                  <th>
                    <a href="shop-details.html">Medium Flat Hoops</a>{" "}
                    <span className="remove">remove</span>
                  </th>
                  <th>
                    <a href="shop-details.html">Bold Pearl Hoop Earrings</a>{" "}
                    <span className="remove">remove</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-image">
                  <td className="td-label">Image</td>
                  <td>
                    <a href="shop-details.html">
                      <img
                        width={600}
                        height={600}
                        src="media/product/3.jpg"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <a href="shop-details.html">
                      <img
                        width={600}
                        height={600}
                        src="media/product/1.jpg"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <a href="shop-details.html">
                      <img
                        width={600}
                        height={600}
                        src="media/product/2.jpg"
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
                <tr className="tr-sku">
                  <td className="td-label">SKU</td>
                  <td>VN00189</td>
                  <td />
                  <td>D1116</td>
                </tr>
                <tr className="tr-rating">
                  <td className="td-label">Rating</td>
                  <td>
                    <div className="star-rating">
                      <span style={{ width: "80%" }} />
                    </div>
                  </td>
                  <td>
                    <div className="star-rating">
                      <span style={{ width: "100%" }} />
                    </div>
                  </td>
                  <td />
                </tr>
                <tr className="tr-price">
                  <td className="td-label">Price</td>
                  <td>
                    <span className="amount">$150.00</span>
                  </td>
                  <td>
                    <del>
                      <span className="amount">$150.00</span>
                    </del>{" "}
                    <ins>
                      <span className="amount">$100.00</span>
                    </ins>
                  </td>
                  <td>
                    <span className="amount">$200.00</span>
                  </td>
                </tr>
                <tr className="tr-add-to-cart">
                  <td className="td-label">Add to cart</td>
                  <td>
                    <div data-title="Add to cart">
                      <a href="#" className="button">
                        Add to cart
                      </a>
                    </div>
                  </td>
                  <td>
                    <div data-title="Add to cart">
                      <a href="#" className="button">
                        Add to cart
                      </a>
                    </div>
                  </td>
                  <td>
                    <div data-title="Add to cart">
                      <a href="#" className="button">
                        Add to cart
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="tr-description">
                  <td className="td-label">Description</td>
                  <td>
                    Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                    elementum gravida nec dui. Aenean aliquam varius ipsum, non
                    ultricies tellus sodales eu. Donec dignissim viverra nunc,
                    ut aliquet magna posuere eget.
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </td>
                  <td>
                    The EcoSmart Fleece Hoodie full-zip hooded jacket provides
                    medium weight fleece comfort all year around. Feel better in
                    this sweatshirt because Hanes keeps plastic bottles of
                    landfills by using recycled polyester.7.8 ounce fleece
                    sweatshirt made with up to 5 percent polyester created from
                    recycled plastic.
                  </td>
                </tr>
                <tr className="tr-content">
                  <td className="td-label">Content</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </td>
                </tr>
                <tr className="tr-dimensions">
                  <td className="td-label">Dimensions</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quickview */}
  <div className="quickview-popup">
    <div id="quickview-container">
      <div className="quickview-container">
        <a href="#" className="quickview-close" />
        <div className="quickview-notices-wrapper" />
        <div className="product single-product product-type-simple">
          <div className="product-detail">
            <div className="row">
              <div className="img-quickview">
                <div className="product-images-slider">
                  <div id="quickview-slick-carousel">
                    <div className="images">
                      <div className="scroll-image">
                        <div className="slick-wrap">
                          <div
                            className="slick-sliders image-additional"
                            data-dots="true"
                            data-columns4={1}
                            data-columns3={1}
                            data-columns2={1}
                            data-columns1={1}
                            data-columns={1}
                            data-nav="true"
                          >
                            <div className="img-thumbnail slick-slide">
                              <a
                                href="media/product/3.jpg"
                                className="image-scroll"
                                title=""
                              >
                                <img
                                  width={900}
                                  height={900}
                                  src="media/product/3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="img-thumbnail slick-slide">
                              <a
                                href="media/product/3-2.jpg"
                                className="image-scroll"
                                title=""
                              >
                                <img
                                  width={900}
                                  height={900}
                                  src="media/product/3-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quickview-single-info">
                <div className="product-content-detail entry-summary">
                  <h1 className="product-title entry-title">Twin Hoops</h1>
                  <div className="price-single">
                    <div className="price">
                      <del>
                        <span>$150.00</span>
                      </del>
                      <span>$100.00</span>
                    </div>
                  </div>
                  <div className="product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 4.00 out of 5"
                    >
                      <span style={{ width: "80%" }}>
                        Rated <strong className="rating">4.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                    <a href="#" className="review-link">
                      (<span className="count">1</span> customer review)
                    </a>
                  </div>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis…
                    </p>
                  </div>
                  <form
                    className="cart"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="quantity-button">
                      <div className="quantity">
                        <button type="button" className="plus">
                          +
                        </button>
                        <input
                          type="number"
                          className="input-text qty text"
                          step={1}
                          min={1}
                          max=""
                          name="quantity"
                          defaultValue={1}
                          title="Qty"
                          size={4}
                          placeholder=""
                          inputMode="numeric"
                          autoComplete="off"
                        />
                        <button type="button" className="minus">
                          -
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="single-add-to-cart-button button alt"
                      >
                        Add to cart
                      </button>
                    </div>
                    <button className="button quick-buy">Buy It Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>


</>


    </>)
}
export default Shop