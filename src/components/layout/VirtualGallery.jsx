import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../css/landing.css";
import Footer from "../common/Footer";
import axios from "axios";
import virtualVdo from '../../images/virtual-vdo.webm'
import ReactPlayer from 'react-player'


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


                <div className="container-fluid">
                    <div className="row m-0 p-0">
                        <div className="col-md-12 m-0 p-0">
                            <video className="W-100 m-0 p-0" autoPlay="true" loop="true" muted style={{width:"100%"}}>
                                <source src={virtualVdo} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>
                <br />

                <div className="steps p-2 m-2 bg-dark text-light m-0 p-0">
                    <div className="container-fluid m-0 p-0">
                        <div className="row m-0 p-0">
                            <div className="col-md-12 m-0 p-0">
                                <p style={{ fontSize: "34px" }}>Enter the  virtual art gallery to explore NFT art for sale and mix with fellow collectors.</p>
                                <br />
                                <br />
                                <p className="d-flex justify-content-start p-3">A few quick tips to get you started:</p>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="container steps-count">
                        <div className="row">
                            <div className="col-md-2">
                                <h2>1</h2>
                            </div>
                            <div className="col-md-8 para-steps">
                                <p>
                                    You can access the gallery straight away — there's no need to create an account or customise your avatar (you can do this later by clicking the bottom-right 'person' icon). Simply enter your name when prompted.</p>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="container steps-count">
                        <div className="row">
                            <div className="col-md-2">
                                <h2>2</h2>
                            </div>
                            <div className="col-md-8 para-steps">
                                <p>Use your arrow keys to move your avatar through the space, or click with your mouse to jump to another spot in the room.</p>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="container steps-count">
                        <div className="row">
                            <div className="col-md-2">
                                <h2>3</h2>
                            </div>
                            <div className="col-md-8 para-steps">
                                <p>Click and drag your mouse to rotate your perspective.</p>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="container steps-count">
                        <div className="row">
                            <div className="col-md-2">
                                <h2>4</h2>
                            </div>
                            <div className="col-md-8 para-steps">
                                <p>For a quick tour of all the NFT artworks on view in the gallery, press the play button at the bottom of the page.</p>
                            </div>

                        </div>
                    </div>
                    <div className="btn-holder is--view is--small is--faq" align="center">
                        <a data-w-id="415bd896-eb9f-80c5-e63e-e982931ca360"
                            style={{ color: 'rgb(255, 255, 255)' }}
                            href="https://www.spatial.io/s/Virtual-Art-Gallerys-Hi-Fi-Scene-63e38c6551e921b0e3622378?share=657380781386303235"
                            target="_blank" className="btn-main-btn w-inline-block"><img
                                src="https://assets-global.website-files.com/61f900f9ed3c141eec18edfe/61fa5c24e3ede617505af20f_btn-triangle.svg"
                                loading="lazy" alt className="btn-triangle" />
                            <div className="btn-text">Enter gallery</div><img
                                src="https://assets-global.website-files.com/61f900f9ed3c141eec18edfe/61fa5c24cc484d5efef57197_btn-triangle-2.svg"
                                loading="lazy" alt className="btn-triangle" />
                        </a>
                        <div style={{ opacity: 0, width: '0%', height: '100%' }} className="btn-hover-slide" />
                    </div>
                </div>
            </div>
            <br />
            <br />
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
