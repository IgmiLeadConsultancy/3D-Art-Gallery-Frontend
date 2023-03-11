import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../css/landing.css";
import Footer from "../common/Footer";
import axios from "axios";
import Item from "./item";
import virtualVdo from '../../images/virtual-vdo.webm'

// import Carousel2 from "react-elastic-carousel";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Container from "react-bootstrap/Container";
import Carousel2 from "react-elastic-carousel";
import Author1 from "../../images/author-1.jpg";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];


const Landing = ({ isAuthenticated }) => {
  // Categories Fetching





  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }


  return (
    <>
    
      <div className="navNsec m-0 bg-dark ">

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 m-0">
              <video className="W-100 m-0 p-0" autoPlay="true" loop="true" muted style={{width:"100%"}}>
                <source src={virtualVdo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="mt-5" align="center">
          <h2 className="text-light font-weight-bold" style={{ fontSize: "35px" }}>
            DISCOVER AND BUY ONLINE ORIGINAL CONTEMPORARY ART
          </h2>
          <p>Shop blockchain and NFC authenticated art from our curated collections</p>
        </div>
        <Container className="new-itms">
          <h2 align="center" className="text-light font-weight-bold">
            Featured Products
          </h2>
          <div className="App">
            <Carousel2 breakPoints={breakPoints}>
              <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                  <div className="parent-author" style={{ cursor: "pointer" }}>
                    <a href="/" className="author">
                      <img src={Author1} className="ath1" alt="NFT" />
                    </a>
                  </div>
                  <div align="center" className="card-item p-3 card-item-img">
                    <a href="/">
                      <img
                        className="rounded"
                        src={("https://th.bing.com/th/id/OIP._uqECX1oZFenV1Jzjh0-hwHaEj?pid=ImgDet&rs=1")}
                        height={"230px"}
                        alt="NFT"
                      />
                    </a>
                    <p className="text-light d-flex my-2">Lorem ipsum.</p>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        0.00 ETH{" "}
                      </p>
                      <span className="text-light">1/20</span>
                    </div>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                      </p>
                      <span className="text-light">
                        <i className="fa fa-heart"></i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Item>

              <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                  <div className="parent-author" style={{ cursor: "pointer" }}>
                    <a href="/" className="author">
                      <img src={Author1} className="ath1" alt="NFT" />
                    </a>
                  </div>
                  <div align="center" className="card-item p-3 card-item-img">
                    <a href="/">
                      <img
                        className="rounded"
                        src={("https://th.bing.com/th/id/OIP._uqECX1oZFenV1Jzjh0-hwHaEj?pid=ImgDet&rs=1")}
                        height={"230px"}
                        alt="NFT"
                      />
                    </a>
                    <p className="text-light d-flex my-2">Lorem ipsum.</p>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        0.00 ETH{" "}
                      </p>
                      <span className="text-light">1/20</span>
                    </div>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                      </p>
                      <span className="text-light">
                        <i className="fa fa-heart"></i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Item>


              <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                  <div className="parent-author" style={{ cursor: "pointer" }}>
                    <a href="/" className="author">
                      <img src={Author1} className="ath1" alt="NFT" />
                    </a>
                  </div>
                  <div align="center" className="card-item p-3 card-item-img">
                    <a href="/">
                      <img
                        className="rounded"
                        src={("https://th.bing.com/th/id/OIP._uqECX1oZFenV1Jzjh0-hwHaEj?pid=ImgDet&rs=1")}
                        height={"230px"}
                        alt="NFT"
                      />
                    </a>
                    <p className="text-light d-flex my-2">Lorem ipsum.</p>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        0.00 ETH{" "}
                      </p>
                      <span className="text-light">1/20</span>
                    </div>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                      </p>
                      <span className="text-light">
                        <i className="fa fa-heart"></i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Item>

              <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                  <div className="parent-author" style={{ cursor: "pointer" }}>
                    <a href="/" className="author">
                      <img src={Author1} className="ath1" alt="NFT" />
                    </a>
                  </div>
                  <div align="center" className="card-item p-3 card-item-img">
                    <a href="/">
                      <img
                        className="rounded"
                        src={("https://th.bing.com/th/id/OIP._uqECX1oZFenV1Jzjh0-hwHaEj?pid=ImgDet&rs=1")}
                        height={"230px"}
                        alt="NFT"
                      />
                    </a>
                    <p className="text-light d-flex my-2">Lorem ipsum.</p>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        0.00 ETH{" "}
                      </p>
                      <span className="text-light">1/20</span>
                    </div>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                      </p>
                      <span className="text-light">
                        <i className="fa fa-heart"></i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Item>

              <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                  <div className="parent-author" style={{ cursor: "pointer" }}>
                    <a href="/" className="author">
                      <img src={Author1} className="ath1" alt="NFT" />
                    </a>
                  </div>
                  <div align="center" className="card-item p-3 card-item-img">
                    <a href="/">
                      <img
                        className="rounded"
                        src={("https://th.bing.com/th/id/OIP._uqECX1oZFenV1Jzjh0-hwHaEj?pid=ImgDet&rs=1")}
                        height={"230px"}
                        alt="NFT"
                      />
                    </a>
                    <p className="text-light d-flex my-2">Lorem ipsum.</p>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        0.00 ETH{" "}
                      </p>
                      <span className="text-light">1/20</span>
                    </div>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                      </p>
                      <span className="text-light">
                        <i className="fa fa-heart"></i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Item>

              <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                  <div className="parent-author" style={{ cursor: "pointer" }}>
                    <a href="/" className="author">
                      <img src={Author1} className="ath1" alt="NFT" />
                    </a>
                  </div>
                  <div align="center" className="card-item p-3 card-item-img">
                    <a href="/">
                      <img
                        className="rounded"
                        src={("https://th.bing.com/th/id/OIP._uqECX1oZFenV1Jzjh0-hwHaEj?pid=ImgDet&rs=1")}
                        height={"230px"}
                        alt="NFT"
                      />
                    </a>
                    <p className="text-light d-flex my-2">Lorem ipsum.</p>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        0.00 ETH{" "}
                      </p>
                      <span className="text-light">1/20</span>
                    </div>
                    <div className="d-flex bid">
                      <p className="d-inline" style={{ color: "#8affff" }}>
                        <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                      </p>
                      <span className="text-light">
                        <i className="fa fa-heart"></i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Item>
            </Carousel2>
          </div>
        </Container>
        <div className="container my-5">
          <div className="row">
            <h2 align="center">CURATED COLLECTIONS</h2>
            <div className="col-md-4">
              <div className="sc-fHlXLc byRjWJ item">
                <a href="/en/collections/international-artists-day" />
                <div className="sc-jMvuUo iWmOVb">
                  <a href="/en/collections/international-artists-day">
                    <picture>
                      <source
                        srcSet="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651691253382.webp"
                        type="image/webp"
                      />
                      <source
                        srcSet="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651697582947.jpg"
                        type="image/jpeg"
                      />
                      <img
                        src="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651697582947.jpg"
                        alt="RtistiQ Art Collection:International Artist's Daynull"
                        hideimage="false"
                        className="sc-fEUNkw ejHbiO sc-iysEgW bMeaAZ"
                      />
                    </picture>
                  </a>
                  <div className="sc-fxgLge dLpgPf">
                    <a href="/en/collections/international-artists-day">
                      <p className="sc-gtXRHa evRbeb">International Artist's Day</p>
                    </a>
                    <a
                      className="sc-fyjYeE hmrpWc"
                      href="/en/collections/international-artists-day"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>;

            </div>
            <div className="col-md-4">
              <div className="sc-fHlXLc byRjWJ item">
                <a href="/en/collections/international-artists-day" />
                <div className="sc-jMvuUo iWmOVb">
                  <a href="/en/collections/international-artists-day">
                    <picture>
                      <source
                        srcSet="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651691253382.webp"
                        type="image/webp"
                      />
                      <source
                        srcSet="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651697582947.jpg"
                        type="image/jpeg"
                      />
                      <img
                        src="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651697582947.jpg"
                        alt="RtistiQ Art Collection:International Artist's Daynull"
                        hideimage="false"
                        className="sc-fEUNkw ejHbiO sc-iysEgW bMeaAZ"
                      />
                    </picture>
                  </a>
                  <div className="sc-fxgLge dLpgPf">
                    <a href="/en/collections/international-artists-day">
                      <p className="sc-gtXRHa evRbeb">International Artist's Day</p>
                    </a>
                    <a
                      className="sc-fyjYeE hmrpWc"
                      href="/en/collections/international-artists-day"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>;

            </div>
            <div className="col-md-4">
              <div className="sc-fHlXLc byRjWJ item">
                <a href="/en/collections/international-artists-day" />
                <div className="sc-jMvuUo iWmOVb">
                  <a href="/en/collections/international-artists-day">
                    <picture>
                      <source
                        srcSet="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651691253382.webp"
                        type="image/webp"
                      />
                      <source
                        srcSet="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651697582947.jpg"
                        type="image/jpeg"
                      />
                      <img
                        src="https://d28jbe41jq1wak.cloudfront.net/CollectionImages/international-artists-da-638022651697582947.jpg"
                        alt="RtistiQ Art Collection:International Artist's Daynull"
                        hideimage="false"
                        className="sc-fEUNkw ejHbiO sc-iysEgW bMeaAZ"
                      />
                    </picture>
                  </a>
                  <div className="sc-fxgLge dLpgPf">
                    <a href="/en/collections/international-artists-day">
                      <p className="sc-gtXRHa evRbeb">International Artist's Day</p>
                    </a>
                    <a
                      className="sc-fyjYeE hmrpWc"
                      href="/en/collections/international-artists-day"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>;

            </div>
          </div>

        </div>


        <div className="container">

          <div className="row">

            <div className="col-md-8">
              <div
                className="imageContainer"
                style={{
                  width: 736,
                  height: 540,
                  justifyContent: "center",
                  display: "flex",
                  backgroundImage: 'url("https://art.rtistiq.com/static/media/about.03cc10d7.webp")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                }}
              />;

            </div>

            <div className="col-md-4" style={{ alignSelf: 'center' }}>
              <h2>ABOUT Virtual Art Gallery</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate mollitia dolorum, accusantium adipisci sed repellat laudantium quidem fugit autem, quisquam error ex placeat.
              </p>
            </div>



          </div>


        </div>


        {/* <div className="container">
          <div className="row">
            <div className="col-md-12" align="center">
              <h4>OUR TESTIMONIALS</h4>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
              >
                <div>
                  <img src={testimonial} />
                  <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                      It's freeing to be able to catch up on customized news and not be
                      distracted by a social media element on the same site
                    </p>
                  </div>
                </div>
                <div>
                  <img src={testimonial} />
                  <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                      It's freeing to be able to catch up on customized news and not be
                      distracted by a social media element on the same site
                    </p>
                  </div>
                </div>
                <div>
                  <img src={testimonial} />
                  <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                      It's freeing to be able to catch up on customized news and not be
                      distracted by a social media element on the same site
                    </p>
                  </div>
                </div>

                <div>
                  <img src={testimonial} />
                  <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                      It's freeing to be able to catch up on customized news and not be
                      distracted by a social media element on the same site
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div> */}

        <br />
        <br />
        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="sc-dCzMmV ffuIIJ">
                <div className="sc-jAWRmi igSQqX">
                  <h2 className="sc-eOnLuU gjGAnR">BUY ART ONLINE ON VIRTUAL ART GALLERY</h2>
                  <p>If you are looking for original art online, you've come to the right place. RtistiQ features more than 3,000
                    works of art created by artists from 30+ countries, ranging from <a
                      href="/">abstract art</a> to <a
                        href="/">contemporary paintings</a> ,
                    and we have what you need.</p>
                </div>
                <div className="sc-hWWTYC jsxtKH"><img
                  data-src="https://uielement.s3-ap-southeast-1.amazonaws.com/Icon/buyArtWall.webp"
                  alt="BUY ART ONLINE ON VIRTUAL ART GALLERY" className="sc-igaqVs fFjKdP ls-is-cached lazyloaded"
                  title="BUY ART ONLINE ON RTISTIQ" width={492} height={355}
                  src="https://uielement.s3-ap-southeast-1.amazonaws.com/Icon/buyArtWall.webp" /></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />


        <Footer />
      </div>

    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
