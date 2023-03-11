import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import Logo from "../../images/virtual-art-gif2.gif";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";

const NavbaR = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  function calcTime(city, offset) {
    var b = new Date();
    var utc = b.getTime() + b.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.getHours();
  }

  var showime = calcTime("Los Angeles", "-8");

  function calcTime(city, offset) {
    var b = new Date();
    var utc = b.getTime() + b.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.getHours();
  }

  var showime = calcTime("Los Angeles", "-8");

  const IsLoggedIn = window.localStorage.getItem("userLoggedIn");

  logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  const authLinks = (
   <>
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="pushmenu"
            href="#/"
            role="button"
          >
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link text-warning">
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block"></li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="navbar-search"
            href="#/"
            role="button"
          >
            <i className="fas fa-search" />
          </a>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button
                    className="btn btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#/">
            <i className="fa fa-user" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
            align="center"
          >
            <div style={{ marginTop: "", textAlign: "center" }}>
              <h5 className="font-weight-bold">
                Welcome, {user && user.name} 👋
              </h5>
              {(() => {
                if (showime >= 3 && showime < 12) {
                  return (
                    <div>
                      {" "}
                      Good Morning <i className="fa fa-sun text-warning"></i>
                    </div>
                  );
                } else if (showime >= 12 && showime < 18) {
                  return (
                    <div>
                      {" "}
                      Good Afternoon <i className="fa fa-sun text-warning "></i>{" "}
                    </div>
                  );
                } else if (showime >= 18 && showime < 23) {
                  return (
                    <div>
                      {" "}
                      Good Evening <i className="fa fa-moon text-dark"></i>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      {" "}
                      Good Evening <i className="fa fa-moon text-dark"></i>
                    </div>
                  );
                }
              })()}
            </div>

            <Link
              className="d-flex justify-content-center"
              to="/admin/dashboard"
            >
              <i className="fas fa-user"></i>{" "}
              <span className="hide-sm">Dashboard</span>
            </Link>
            <Link
              className="d-flex justify-content-center"
              onClick={logout}
              to="/"
              replace
            >
              <i className="fa fa-arrow-right"></i>{" "}
              <span className="hide-sm">Logout</span>
            </Link>
          </div>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right"></div>
        </li>
      </ul>
    </nav>
    
   </>
  );
  const guestLinks = (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">

        <button
          className="navbar-toggler text-warning"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-warning" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container-fluid">
            <div className="row w-100">
              <div className="col-md-4">

                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/auctions"
                    >AUCTIONS <span className="sr-only">(current)</span></a
                    >
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/arts">VIEW ALL</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/virtual-tour"> VIRTUAL GALLERY</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/faqs">FAQs</a>
                  </li>



                </ul>
              </div>
              <div className="col-md-4">
                <a href="/">
                  <img src={Logo} alt="" width={"505px"} />
                </a>
              </div>
              <div className="col-md-4 d-flex justify-content-end">

                {(() => {
                  if (IsLoggedIn === "true") {
                    return (
                      <>
                        <ul className="list-unstyled" style={{ marginTop: "16px" }}>
                          <li className="list-inline-item font-weight-bold"><a href="/user/dashboard" className="text-light nav-lists">DASHBOARD</a></li>
                          <li className="list-inline-item font-weight-bold"><a href="" className="text-light nav-lists" onClick={logout}>LOGOUT</a></li>
                          <li className="list-inline-item font-weight-bold"><a href="/create-bid" className="text-light nav-lists">ADD ARTS</a></li>
                        </ul>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <ul className="list-unstyled" style={{ marginTop: "15px" }}>
                          <li className="list-inline-item m-2 font-weight-bold"><a href="/user/register">SIGN UP</a></li>
                          <li className="list-inline-item m-2 font-weight-bold"><a href="/user/login">SIGN IN</a></li>
                          <li className="list-inline-item m-2 font-weight-bold"><a href="">CONNECT WALLET</a></li>
                        </ul>

                      </>
                    );
                  }
                })()}
              </div>

            </div>
          </div>
        </div>

      </nav>
    <hr  className="bg-warning"/>
    </>
  );

  return (
    <>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
      
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavbaR);
