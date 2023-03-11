import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../css/landing.css";
import Footer from "../common/Footer";
import axios from "axios";
// import Item from "./item";
// import Carousel2 from "react-elastic-carousel";
// import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
];


const Landing = ({ isAuthenticated }) => {
  



    if (isAuthenticated) {
        return <Redirect to="/admin/dashboard" />;
    }


    return (
        <>
            <div className="navNsec m-0">


                <div className="auctions">


                    <div className="container-fluid">
                        <div className="row">
                            <hr className="text-light" />
                            <div className="col-md-12 bg-dark p-2 auc-lists">
                                <ul className="list-unstyled d-flex p-3">
                                    <a href="/">
                                        <li className="list-inline-item"><a className="text-light" href="/">ETH</a></li>
                                        <i class="fa-solid fa-arrow-right-arrow-left"></i> &nbsp;
                                        <li className="list-inline-item"><a className="text-light" href="/">USD</a></li>
                                    </a>
                                </ul>
                            </div>
                            <hr className="text-light" />

                        </div>
                    </div>
                    <div className="container" align="center">
                        <div className="row d-flex justify-content-center">
                            <div className="collections-parent col-md-3 m-3 p-2 collections">
                                <a href="/">
                                    <img className="w-100" src={("https://assets-global.website-files.com/61fabae28233a8a15472a9d3/637cfe9b4bf62d5e144ab1da_goldcat_The%20Swimmer-p-500.jpg")} alt="" />
                                </a>
                                <div className="info" align="center">
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <br />
                                    <p>PRICE REALISED</p>
                                    <p>0.00</p>
                                </div>
                            </div>
                            <div className="collections-parent col-md-3 m-3 p-2 collections">
                                <a href="/">
                                    <img className="w-100" src={("https://assets-global.website-files.com/61fabae28233a8a15472a9d3/637cfe9b4bf62d5e144ab1da_goldcat_The%20Swimmer-p-500.jpg")} alt="" />
                                </a>
                                <div className="info" align="center">
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <br />
                                    <p>PRICE REALISED</p>
                                    <p>0.00</p>
                                </div>
                            </div>
                            <div className="collections-parent col-md-3 m-3 p-2 collections">
                                <a href="/">
                                    <img className="w-100" src={("https://assets-global.website-files.com/61fabae28233a8a15472a9d3/637cfe9b4bf62d5e144ab1da_goldcat_The%20Swimmer-p-500.jpg")} alt="" />
                                </a>
                                <div className="info" align="center">
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <br />
                                    <p>PRICE REALISED</p>
                                    <p>0.00</p>
                                </div>
                            </div>
                            <div className="collections-parent col-md-3 m-3 p-2 collections">
                                <a href="/">
                                    <img className="w-100" src={("https://assets-global.website-files.com/61fabae28233a8a15472a9d3/637cfe9b4bf62d5e144ab1da_goldcat_The%20Swimmer-p-500.jpg")} alt="" />
                                </a>
                                <div className="info" align="center">
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <br />
                                    <p>PRICE REALISED</p>
                                    <p>0.00</p>
                                </div>
                            </div>

                            <div className="collections-parent col-md-3 m-3 p-2 collections">
                                <a href="/">
                                    <img className="w-100" src={("https://assets-global.website-files.com/61fabae28233a8a15472a9d3/637cfe9b4bf62d5e144ab1da_goldcat_The%20Swimmer-p-500.jpg")} alt="" />
                                </a>
                                <div className="info" align="center">
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <br />
                                    <p>PRICE REALISED</p>
                                    <p>0.00</p>
                                </div>
                            </div>

                            <div className="collections-parent col-md-3 m-3 p-2 collections">
                                <a href="/">
                                    <img className="w-100" src={("https://assets-global.website-files.com/61fabae28233a8a15472a9d3/637cfe9b4bf62d5e144ab1da_goldcat_The%20Swimmer-p-500.jpg")} alt="" />
                                </a>
                                <div className="info" align="center">
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <br />
                                    <p>PRICE REALISED</p>
                                    <p>0.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

            <br />
            <br />

            <Footer />

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
