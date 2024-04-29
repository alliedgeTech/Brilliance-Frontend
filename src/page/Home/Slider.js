function Slider (){
    return(<>
      <section className="section m-b-70">
           
            <div className="block block-sliders auto-height color-white nav-center">
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
                        height={1080}
                        src="media/slider/1-1.jpg"
                        alt="Image Slider"
                      />
                    </div>
                    <div className="item-info horizontal-start vertical-middle">
                      <div className="content">
                        <h2 className="title-slider">
                          Discover a <br />
                          world of jewelry
                        </h2>
                        <a
                          className="button-slider button button-white button-outline thick-border"
                          href="shop-grid-left.html"
                        >
                          Explore Bestseller
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
                        height={1080}
                        src="media/slider/1-2.jpg"
                        alt="Image Slider"
                      />
                    </div>
                    <div className="item-info horizontal-start vertical-middle">
                      <div className="content">
                        <h2 className="title-slider">
                          Discover the
                          <br /> Best of the Best
                        </h2>
                        <a
                          className="button-slider button button-white button-outline thick-border"
                          href="shop-grid-left.html"
                        >
                          Explore Bestseller
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
                        height={1080}
                        src="media/slider/1-3.jpg"
                        alt="Image Slider"
                      />
                    </div>
                    <div className="item-info horizontal-start vertical-middle">
                      <div className="content">
                        <h2 className="title-slider">
                          Oh,
                          <br /> Hello Newness!
                        </h2>
                        <a
                          className="button-slider button button-white button-outline thick-border"
                          href="shop-grid-left.html"
                        >
                          Explore Bestseller
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
    )
}
export default Slider