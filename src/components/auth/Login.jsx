import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../layout/Alert";
import Footer from "../common/Footer";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <div className="login-form my-5">
      <div className="text-light" align="center">
        <h1 className="heading text-light">Sign In</h1>
        <p className="lead text-light">
          <i className="fas fa-user text-light"></i> Log in Into Your Account
        </p>
      </div>

      <Alert />
      <br />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div
            className="col-md-6 p-5"
            style={{ borderRadius: "19px" }}
          >
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  className="form-control w-100 input-fileds"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength="6"
                  value={password}
                  onChange={(e) => onChange(e)}
                  className="form-control w-100 input-fileds"
                  required
                />
              </div>
              <input
                type="submit"
                className="input-fileds btn btn-outline-info w-100"
                value="Sign In"
                style={{borderRadius:"0px"}}
              />
            </form>
            {/* <p className="link">
				Don't have an account? <Link to="/register">Sign Up</Link>
			</p> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
