import { Link } from "react-router-dom"


function Home(){
    return(<>
   
   <>
  <div id="page" className="hfeed page-wrapper">
  
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section m-b-30">
             
              <div className="block block-sliders layout-3 auto-height nav-center">
                <div
                  className="slick-sliders"
                  data-autoplay="true"
                  data-dots="true"
                  data-nav="true"
                  data-columns4={1}
                  data-columns3={1}
                  data-columns2={1}
                  data-columns1={1}
                  data-columns1440={1}
                  data-columns={1}
                >
                  <div className="item slick-slide">
                    <div className="item-content">
                      <div className="content-image">
                        <img
                          width={1920}
                          height={671}
                          src="media/slider/3-1.jpg"
                          alt="Image Slider"
                        />
                      </div>
                      <div className="item-info horizontal-start vertical-middle">
                        <div className="content">
                          <h2 className="title-slider">
                            STATEMENT <br />
                            MAKERS
                          </h2>
                          <div className="description-slider">
                            Set off a chain reaction with statement styles that
                            boast large profiles and embellished details.
                          </div>
                          <a
                            className="button button-slider button-white"
                            href="shop-grid-left.html"
                          >
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item slick-slide">
                    <div className="item-content">
                      <div className="content-image">
                        <img
                          width={1920}
                          height={671}
                          src="media/slider/3-2.jpg"
                          alt="Image Slider"
                        />
                      </div>
                      <div className="item-info horizontal-start vertical-middle">
                        <div className="content">
                          <h2 className="title-slider">
                            Oh, Hello <br />
                            spring!
                          </h2>
                          <div className="description-slider">
                            Set off a chain reaction with statement styles that
                            boast large profiles and embellished details.
                          </div>
                          <a
                            className="button button-slider button-white"
                            href="shop-grid-left.html"
                          >
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item slick-slide">
                    <div className="item-content">
                      <div className="content-image">
                        <img
                          width={1920}
                          height={671}
                          src="media/slider/3-3.jpg"
                          alt="Image Slider"
                        />
                      </div>
                      <div className="item-info horizontal-start vertical-middle">
                        <div className="content">
                          <h2 className="title-slider">
                            Best of <br />
                            the Best
                          </h2>
                          <div className="description-slider">
                            Set off a chain reaction with statement styles that
                            boast large profiles and embellished details.
                          </div>
                          <a
                            className="button button-slider button-white"
                            href="shop-grid-left.html"
                          >
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                {/* Block Product Categories (Layout 2) */}
                <div className="block block-product-cats layout-2">
                  <div className="block-widget-wrap">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="item item-product-cat">
                          <div className="item-product-cat-content">
                            <div className="item-image animation-horizontal">
                              <a href="shop-grid-left.html">
                                <img
                                  width={330}
                                  height={330}
                                  src="media/product/cat-3-1.jpg"
                                  alt="Bracelets"
                                />
                              </a>
                            </div>
                            <div className="product-cat-content-info">
                            <Link to='/Bracelet' className="item-title">
    Bracelets
  </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="item item-product-cat">
                          <div className="item-product-cat-content">
                            <div className="item-image animation-horizontal">
                              <a href="shop-grid-left.html">
                                <img
                                  width={330}
                                  height={330}
                                  src="media/product/cat-3-2.jpg"
                                  alt="Earrings"
                                />
                              </a>
                            </div>
                            <div className="product-cat-content-info">
                            <Link to='/Earring' className="item-title">
    Earrings
  </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="item item-product-cat">
                          <div className="item-product-cat-content">
                            <div className="item-image animation-horizontal">
                              <a href="shop-grid-left.html">
                                <img
                                  width={330}
                                  height={330}
                                  src="media/product/cat-3-3.jpg"
                                  alt="Necklaces"
                                />
                              </a>
                            </div>
                            <div className="product-cat-content-info">
                            <Link to='/Necklace' className="item-title">
    Necklaces
  </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="item item-product-cat">
                          <div className="item-product-cat-content">
                            <div className="item-image animation-horizontal">
                              <a href="shop-grid-left.html">
                                <img
                                  width={330}
                                  height={330}
                                  src="media/product/cat-3-4.jpg"
                                  alt="Rings"
                                />
                              </a>
                            </div>
                            <div className="product-cat-content-info">
                            <Link to='/Ring' className="item-title">
    Rings
  </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-80">
              <div className="section-container">
                {/* Block Lookbook */}
                <div className="block block-lookbook">
                  <div className="block-widget-wrap">
                    <div className="lookbook-item">
                      <div className="row">
                        <div className="col-md-6 col-image">
                          <div className="lookbook-container">
                            <div className="lookbook-content">
                              <div className="item">
                                <img
                                  width={690}
                                  height={473}
                                  src="media/banner/lookbook-3-1.jpg"
                                  alt="Look Book 1"
                                />
                                <div
                                  className="item-lookbook"
                                  style={{ left: "43%", top: "77%" }}
                                >
                                  <span className="number-lookbook">1</span>
                                  <div
                                    className="content-lookbook"
                                    style={{ left: 35, bottom: 10 }}
                                  >
                                    <div className="item-thumb">
                                      <a href="shop-details.html">
                                        <img
                                          width={1000}
                                          height={1000}
                                          src="media/product/1.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="content-lookbook-bottom">
                                      <div className="item-title">
                                        <a href="shop-details.html">
                                          Medium Flat Hoops
                                        </a>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-text">
                          <div className="lookbook-intro-wrap position-center text-center">
                            <div className="lookbook-intro">
                              <h2 className="title">Curated by color</h2>
                              <div className="description">
                                Brighten up your look with vibrant gemstone
                                jewelry.
                              </div>
                              <Link to="/shop" className="button button-primary animation-horizontal">
                                SHOP NOW
                             </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lookbook-item">
                      <div className="row">
                        <div className="col-md-6 col-text">
                          <div className="lookbook-intro-wrap position-center text-center">
                            <div className="lookbook-intro">
                              <h2 className="title">Make the connection</h2>
                              <div className="description">
                                Introducing your outfit’s missing link.
                              </div>
                              <Link to="/shop" className="button button-primary animation-horizontal">
                                SHOP NOW
                             </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-image">
                          <div className="lookbook-container">
                            <div className="lookbook-content">
                              <div className="item">
                                <img
                                  width={690}
                                  height={473}
                                  src="media/banner/lookbook-3-2.jpg"
                                  alt="Look Book 1"
                                />
                                <div
                                  className="item-lookbook"
                                  style={{ right: "25%", top: "50%" }}
                                >
                                  <span className="number-lookbook">1</span>
                                  <div
                                    className="content-lookbook"
                                    style={{ right: 35, bottom: 10 }}
                                  >
                                    <div className="item-thumb">
                                      <a href="shop-details.html">
                                        <img
                                          width={1000}
                                          height={1000}
                                          src="media/product/3.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="content-lookbook-bottom">
                                      <div className="item-title">
                                        <a href="shop-details.html">
                                          Twin Hoops
                                        </a>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding background-img bg-img-3 p-t-60 p-b-70 m-b-70">
              <div className="section-container">
                {/* Block Products (Layout 2) */}
                <div className="block block-products layout-2 slider">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Trending Products</h2>
                    </div>
                    <div className="block-content">
                      <div className="content-product-list slick-wrap">
                        <div
                          className="slick-sliders products-list grid"
                          data-slidestoscroll="true"
                          data-dots="false"
                          data-nav={1}
                          data-columns4={1}
                          data-columns3={2}
                          data-columns2={2}
                          data-columns1={3}
                          data-columns1440={4}
                          data-columns={4}
                        >
                          <div className="item-product slick-slide">
                            <div className="items">
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
                                  <div className="contents">
                                    <div className="rating">
                                      <div className="star star-0" />
                                      <span className="count">(0 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Medium Flat Hoops
                                      </a>
                                    </h3>
                                    <span className="price">$100.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-product slick-slide">
                            <div className="items">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-10%</div>
                                    <div className="hot">Hot</div>
                                  </div>
                                  <div className="product-thumb-hover">
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
                                  <div className="contents">
                                    <div className="rating">
                                      <div className="star star-5" />
                                      <span className="count">(1 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Bold Pearl Hoop Earrings
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
                          </div>
                          <div className="item-product slick-slide">
                            <div className="items">
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
                                  <div className="contents">
                                    <div className="rating">
                                      <div className="star star-0" />
                                      <span className="count">(0 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">Twin Hoops</a>
                                    </h3>
                                    <span className="price">$150.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-product slick-slide">
                            <div className="items">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-33%</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/10.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/10-2.jpg"
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
                                  <div className="contents">
                                    <div className="rating">
                                      <div className="star star-4" />
                                      <span className="count">(2 reviews)</span>
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
                          </div>
                          <div className="item-product slick-slide">
                            <div className="items">
                              <div className="products-entry clearfix product-wapper">
                                <div className="products-thumb">
                                  <div className="product-lable">
                                    <div className="onsale">-7%</div>
                                  </div>
                                  <div className="product-thumb-hover">
                                    <a href="shop-details.html">
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/11.jpg"
                                        className="post-image"
                                        alt=""
                                      />
                                      <img
                                        width={600}
                                        height={600}
                                        src="media/product/11-2.jpg"
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
                                  <div className="product-stock">
                                    <span className="stock">Out Of Stock</span>
                                  </div>
                                </div>
                                <div className="products-content">
                                  <div className="contents">
                                    <div className="rating">
                                      <div className="star star-5" />
                                      <span className="count">(1 review)</span>
                                    </div>
                                    <h3 className="product-title">
                                      <a href="shop-details.html">
                                        Medium Flat Hoops
                                      </a>
                                    </h3>
                                    <span className="price">
                                      <del aria-hidden="true">
                                        <span>$150.00</span>
                                      </del>
                                      <ins>
                                        <span>$140.00</span>
                                      </ins>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                {/* Block Intro (Layout 3) */}
                <div className="block block-intro layout-3">
                  <div className="block-widget-wrap">
                    <div className="row">
                      <div className="section-column left">
                        <div className="intro-wrap">
                          <h2 className="intro-title">It started with love</h2>
                          <div className="intro-item">
                            Behind our 15-year success is our panel of expert
                            jewellers who have been scouring the entire globe in
                            pursuit of the best and most stunning jewellery that
                            can be offered at affordable price for you.
                          </div>
                          <div className="intro-item">
                            Visit our online catalogue and shop for the finest
                            earrings, rings, bracelets, watches, silver, and the
                            most luxurious gemstones.
                          </div>
                          <div className="intro-btn">
                            <a
                              href="page-about.html"
                              className="button button-primary animation-horizontal"
                            >
                              About Us
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="section-column right animation-horizontal hover-opacity">
                        <img
                          width={690}
                          height={498}
                          src="media/banner/intro-3.jpg"
                          alt="intro"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding background-img bg-img-4 p-t-60 p-b-80">
              {/* Block Instagram */}
              <div className="block block-instagram slider">
                <div className="block-widget-wrap">
                  <div className="block-title">
                    <div className="title-icon animation-horizontal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path d="M437.019,74.981C388.667,26.628,324.379,0,256,0S123.333,26.628,74.981,74.981C26.628,123.333,0,187.621,0,256    s26.628,132.667,74.981,181.019C123.333,485.372,187.621,512,256,512s132.667-26.628,181.019-74.981S512,324.379,512,256    S485.372,123.333,437.019,74.981z M256,495.832C123.756,495.832,16.168,388.244,16.168,256S123.756,16.168,256,16.168    S495.832,123.756,495.832,256S388.244,495.832,256,495.832z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M347.845,97.011H164.155c-37.024,0-67.144,30.121-67.144,67.144v183.692c0,37.022,30.121,67.143,67.144,67.143h183.692    c37.022,0,67.143-30.121,67.143-67.144V164.155C414.989,127.131,384.869,97.011,347.845,97.011z M398.821,347.845    c0,28.108-22.868,50.976-50.976,50.976H164.155c-28.108,0-50.976-22.868-50.976-50.976V164.155    c0-28.108,22.868-50.976,50.976-50.976h183.692c28.107,0,50.975,22.868,50.975,50.976V347.845z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M339.402,251.22c-2.391-42.533-37.002-76.75-79.558-78.669c-49.108-2.214-89.535,38.232-87.292,87.346    c1.945,42.56,36.19,77.154,78.728,79.51c17.951,0.995,34.762-3.727,48.803-12.494c4.374-2.731,5.087-8.814,1.441-12.459    c-0.039-0.039-0.077-0.077-0.115-0.115c-2.657-2.658-6.778-3.059-9.971-1.075c-10.491,6.519-22.892,10.241-36.158,10.102    c-37.455-0.394-67.676-31.844-66.621-69.286c1.061-37.681,33.215-67.721,71.657-65.312c33.126,2.076,60.09,28.49,62.819,61.569    c1.111,13.475-1.787,26.206-7.61,37.157c-1.667,3.136-1.153,6.982,1.358,9.493c0.041,0.041,0.083,0.083,0.124,0.124    c3.773,3.773,10.154,2.886,12.675-1.816C336.664,282.269,340.301,267.197,339.402,251.22z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <circle cx="342.232" cy="158.989" r="21.558" />
                          </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </div>
                    <h2>Mojuri instagram</h2>
                  </div>
                  <div className="block-content">
                    <div className="slick-wrap">
                      <div
                        className="slick-sliders"
                        data-dots="false"
                        data-item_row={1}
                        data-nav="false"
                        data-columns4={1}
                        data-columns3={2}
                        data-columns2={3}
                        data-columns1={4}
                        data-columns={4}
                      >
                        <div className="item slick-slide">
                          <a className="instagram" href="#">
                            <img
                              width={450}
                              height={450}
                              src="media/banner/instagram-1.jpg"
                              alt="Image Slider"
                            />
                          </a>
                        </div>
                        <div className="item slick-slide">
                          <a className="instagram" href="#">
                            <img
                              width={450}
                              height={450}
                              src="media/banner/instagram-2.jpg"
                              alt="Image Slider"
                            />
                          </a>
                        </div>
                        <div className="item slick-slide">
                          <a className="instagram" href="#">
                            <img
                              width={450}
                              height={450}
                              src="media/banner/instagram-3.jpg"
                              alt="Image Slider"
                            />
                          </a>
                        </div>
                        <div className="item slick-slide">
                          <a className="instagram" href="#">
                            <img
                              width={450}
                              height={450}
                              src="media/banner/instagram-4.jpg"
                              alt="Image Slider"
                            />
                          </a>
                        </div>
                        <div className="item slick-slide">
                          <a className="instagram" href="#">
                            <img
                              width={450}
                              height={450}
                              src="media/banner/instagram-5.jpg"
                              alt="Image Slider"
                            />
                          </a>
                        </div>
                        <div className="item slick-slide">
                          <a className="instagram" href="#">
                            <img
                              width={450}
                              height={450}
                              src="media/banner/instagram-6.jpg"
                              alt="Image Slider"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                {/* Block Newsletter (Layout 2) */}
                <div className="block block-newsletter layout-2 one-col">
                  <div className="block-widget-wrap">
                    <div className="newsletter-title-wrap">
                      <h2 className="newsletter-title">Latest From MoJuri!</h2>
                      <div className="newsletter-text">
                        Sign-up to receive 10% off your next purchase. Plus hear
                        about new arrivals and offers.
                      </div>
                    </div>
                    <form action="#" method="post" className="newsletter-form">
                      <input
                        type="email"
                        name="your-email"
                        defaultValue=""
                        size={40}
                        placeholder="Email address"
                      />
                      <span className="btn-submit">
                        <input type="submit" defaultValue="SUBSCRIBE" />
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding background-img bg-img-5 p-t-120 p-b-120 m-b-0">
              <div className="section-container">
                {/* Block Info */}
                <div className="block block-info">
                  <div className="block-widget-wrap">
                    <div className="info-wrap">
                      <div className="icon animation-horizontal">
                        <svg viewBox="0 0 512 512" width={512} height={512}>
                          <g>
                            <circle cx={256} cy={196} r={10} />
                            <path d="m181 296h150c5.522 0 10-4.477 10-10v-93.972l13.493 11.566c4.21 3.609 10.521 3.09 14.1-1.086 3.594-4.193 3.108-10.506-1.086-14.101l-104.999-89.999c-3.744-3.21-9.271-3.21-13.016 0l-104.999 89.999c-4.194 3.594-4.68 9.907-1.086 14.101 3.593 4.194 9.907 4.679 14.1 1.086l13.493-11.566v93.972c0 5.523 4.478 10 10 10zm10-121.115 65-55.714 65 55.714v101.115h-55v-40c0-5.523-4.478-10-10-10s-10 4.477-10 10v40h-55z" />
                            <path d="m248.814 508.954c1.884 1.947 4.477 3.046 7.186 3.046s5.302-1.099 7.186-3.046c63.824-65.879 182.814-214.083 182.814-312.954 0-34.896-9.487-69.49-27.438-100.042-2.799-4.762-8.926-6.354-13.688-3.557-4.762 2.798-6.354 8.926-3.557 13.688 16.148 27.484 24.683 58.575 24.683 89.911 0 101.169-136.787 255.428-170 291.384-33.213-35.956-170-190.215-170-291.384 0-95.402 77.851-176 170-176 30.377 0 60.33 8.741 86.62 25.279 4.673 2.941 10.849 1.535 13.789-3.14s1.534-10.849-3.141-13.789c-29.483-18.547-63.118-28.35-97.268-28.35-106.552 0-190 92.76-190 196 0 98.768 118.792 246.87 182.814 312.954z" />
                            <circle cx={383} cy={65} r={10} />
                          </g>
                        </svg>
                      </div>
                      <h2 className="title">Visit Our Store</h2>
                      <ul>
                        <li>
                          Rains HQ, Jens Olsens Vej 13 ,8200 Aarhus N, Denmark
                        </li>
                        <li>Email : sayhello@sienastore.com</li>
                        <li>Phone : (+45) 7199 2516</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding p-t-10 p-b-10 m-b-0">
              <div className="section-container">
                {/* Block Image */}
                <div className="block block-image slider">
                  <div className="block-widget-wrap">
                    <div className="slick-wrap">
                      <div
                        className="slick-sliders"
                        data-nav={0}
                        data-columns4={1}
                        data-columns3={2}
                        data-columns2={3}
                        data-columns1={4}
                        data-columns1440={5}
                        data-columns={5}
                      >
                        <div className="item slick-slide">
                          <div className="item-image animation-horizontal">
                            <a href="#">
                              <img
                                width={450}
                                height={450}
                                src="media/brand/1.jpg"
                                alt="Brand 1"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="item slick-slide">
                          <div className="item-image animation-horizontal">
                            <a href="#">
                              <img
                                width={450}
                                height={450}
                                src="media/brand/2.jpg"
                                alt="Brand 2"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="item slick-slide">
                          <div className="item-image animation-horizontal">
                            <a href="#">
                              <img
                                width={450}
                                height={450}
                                src="media/brand/3.jpg"
                                alt="Brand 3"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="item slick-slide">
                          <div className="item-image animation-horizontal">
                            <a href="#">
                              <img
                                width={450}
                                height={450}
                                src="media/brand/4.jpg"
                                alt="Brand 4"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="item slick-slide">
                          <div className="item-image animation-horizontal">
                            <a href="#">
                              <img
                                width={450}
                                height={450}
                                src="media/brand/5.jpg"
                                alt="Brand 5"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

  <div className="popup-shadow" />
  <div className="newsletter-popup">
    <a href="#" className="newsletter-close" />
    <div className="newsletter-container">
      <div className="newsletter-img">
        <img src="media/banner/newsletter-popup.jpg" alt="" />
      </div>
      <div className="newsletter-form">
        <form action="#" method="post">
          <div className="newsletter-title">
            <div className="title">
              Get
              <br /> free shipping
            </div>
            <div className="sub-title">
              on your first order. Offer ends soon.
            </div>
          </div>
          <div className="newsletter-input clearfix">
            <input
              type="email"
              name="your-email"
              size={40}
              className="form-control"
              placeholder="Enter Your Email ..."
            />
            <input
              type="submit"
              defaultValue="Subscribe"
              className="form-control"
            />
          </div>
          <div className="newsletter-no">no thanks !</div>
        </form>
      </div>
    </div>
  </div>
  {/* Page Loader */}

</>

    
  
     
   
         
          
         
         
      








    </>)
}
export default Home