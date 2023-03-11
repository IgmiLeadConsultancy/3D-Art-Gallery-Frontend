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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a Loader
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Logo from "../../images/virtual-art-gif2.gif";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const Landing = ({ isAuthenticated }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [country_name, setcountry_name] = useState("");

  // const history = useHistory();

  const setFname = (e) => {
    const { value } = e.target;
    setfname(value);
  };

  const setLname = (e) => {
    const { value } = e.target;
    setlname(value);
  };

  const setEmail = (e) => {
    const { value } = e.target;
    setemail(value);
  };

  const setPassword = (e) => {
    const { value } = e.target;
    setpassword(value);
  };

  const setCountryName = (e) => {
    const { value } = e.target;
    setcountry_name(value);
  };

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("country_name", country_name);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await axios
      .post("http://localhost:5000/register", formData, config)
      .then((data) => {
        console.log(data, "Category Added");
        if (data.status === 200) {
          alert(`Signed Up Successfully`);
          window.location.href = "/auctions";
        }
      });
  };


  const [OnGoingAuctions, setOnGoingAuctions] = useState("");

  useEffect(() => {
    const fetchOnGoingAuctions = async () => {
      const resp = await fetch("http://localhost:5000/OngoingAuctionsArts");
      const json = await resp.json();
      if (resp.ok) {
        setOnGoingAuctions(json);
      }
    };

    fetchOnGoingAuctions();
  }, []);


console.log(OnGoingAuctions);


  const IsLoggedIn = window.localStorage.getItem("userLoggedIn");

  if (IsLoggedIn !== "true") {
    return <Redirect to="/user/login" />;
  }


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
                          <li className="list-inline-item">
                            <a className="text-light" href="/">
                              Calenders
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-light" href="/">
                              Auction Results
                            </a>
                          </li>
                        </ul>
                      </div>
                      <hr className="text-light" />
                    </div>
                  </div>
                  <h2 className="d-flex p-3">COMING SOON</h2>
                  <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-4 d-flex Vr">
                        <a href="/">
                          <img
                            src={Logo}
                            alt="Virtual Art Gallery"
                            width={"100%"}
                            height={"100%"}
                          />
                        </a>
                      </div>
                      <div className="col-md-7 cs">
                        <h4 className="d-flex">Auctions are Loading__ </h4>
                        <p className="d-flex">
                          The next Virtual Art Gallerie's auction will be announced
                          shortly.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="container">
                          <div className="row">
                            <div className="col-md-3">
                              <Button variant="primary" onClick={handleShow}>
                                Sign Up For Updates
                              </Button>
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton align="center">
                                  <Modal.Title align="center" className="text-light">
                                    STAY IN THE KNOW
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body align="center" className="text-light">
                                  <p>
                                    Get our top stories and personalised auction updates
                                    – delivered weekly to your inbox.
                                  </p>

                                  <form onSubmit={addUserData}>
                                    <h3 className="text-center">
                                      {" "}
                                      <i className="fa fa-user"></i> Sign Up
                                    </h3>
                                    <h3 className="text-center">
                                      {" "}
                                      Create Your Account{" "}
                                    </h3>

                                    <div className="">
                                      <label>First name</label>
                                      <input
                                        type="text"
                                        name="fname"
                                        className="form-control"
                                        placeholder="First name"
                                        onChange={setFname}
                                        required
                                      />
                                    </div>

                                    <div className="">
                                      <label>Last name</label>
                                      <input
                                        type="text"
                                        name="lname"
                                        className="form-control"
                                        placeholder="Last name"
                                        onChange={setLname}
                                        required
                                      />
                                    </div>

                                    <div className="">
                                      <label>Email address</label>
                                      <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        onChange={setEmail}
                                        required
                                      />
                                    </div>

                                    <div className="">
                                      <label>Password</label>
                                      <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        onChange={setPassword}
                                        required
                                      />
                                    </div>
                                    <label>Country</label>
                                    <select
                                      id="country_name"
                                      name="country_name"
                                      data-name="country_name"
                                      className="country_name form-control"
                                      onChange={setCountryName}
                                      required
                                    >
                                      <option value>Country</option>
                                      <option value="United States of America">
                                        United States of America
                                      </option>
                                      <option value="Afghanistan">Afghanistan</option>
                                      <option value="Albania">Albania</option>
                                      <option value="Algeria">Algeria</option>
                                      <option value="Andorra">Andorra</option>
                                      <option value="Angola">Angola</option>
                                      <option value="Antigua & Deps">
                                        Antigua &amp; Deps
                                      </option>
                                      <option value="Argentina">Argentina</option>
                                      <option value="Armenia">Armenia</option>
                                      <option value="Australia">Australia</option>
                                      <option value="Austria">Austria</option>
                                      <option value="Azerbaijan">Azerbaijan</option>
                                      <option value="Bahamas">Bahamas</option>
                                      <option value="Bahrain">Bahrain</option>
                                      <option value="Bangladesh">Bangladesh</option>
                                      <option value="Barbados">Barbados</option>
                                      <option value="Belarus">Belarus</option>
                                      <option value="Belgium">Belgium</option>
                                      <option value="Belize">Belize</option>
                                      <option value="Benin">Benin</option>
                                      <option value="Bhutan">Bhutan</option>
                                      <option value="Bolivia">Bolivia</option>
                                      <option value="Bosnia Herzegovina">
                                        Bosnia Herzegovina
                                      </option>
                                      <option value="Botswana">Botswana</option>
                                      <option value="Brazil">Brazil</option>
                                      <option value="Brunei">Brunei</option>
                                      <option value="Bulgaria">Bulgaria</option>
                                      <option value="Burkina">Burkina</option>
                                      <option value="Burma">Burma</option>
                                      <option value="Burundi">Burundi</option>
                                      <option value="Cambodia">Cambodia</option>
                                      <option value="Cameroon">Cameroon</option>
                                      <option value="Canada">Canada</option>
                                      <option value="Cape Verde">Cape Verde</option>
                                      <option value="Central African Rep">
                                        Central African Rep
                                      </option>
                                      <option value="Chad">Chad</option>
                                      <option value="Chile">Chile</option>
                                      <option value="Colombia">Colombia</option>
                                      <option value="Comoros">Comoros</option>
                                      <option value="Democratic Republic of the Congo">
                                        Democratic Republic of the Congo
                                      </option>
                                      <option value="Republic of the Congo">
                                        Republic of the Congo
                                      </option>
                                      <option value="Costa Rica">Costa Rica</option>
                                      <option value="Croatia">Croatia</option>
                                      <option value="Cyprus">Cyprus</option>
                                      <option value="Czech Republic">
                                        Czech Republic
                                      </option>
                                      <option value="Danzig">Danzig</option>
                                      <option value="Denmark">Denmark</option>
                                      <option value="Djibouti">Djibouti</option>
                                      <option value="Dominica">Dominica</option>
                                      <option value="Dominican Republic">
                                        Dominican Republic
                                      </option>
                                      <option value="East Timor">East Timor</option>
                                      <option value="Ecuador">Ecuador</option>
                                      <option value="Egypt">Egypt</option>
                                      <option value="El Salvador">El Salvador</option>
                                      <option value="Equatorial Guinea">
                                        Equatorial Guinea
                                      </option>
                                      <option value="Eritrea">Eritrea</option>
                                      <option value="Estonia">Estonia</option>
                                      <option value="Ethiopia">Ethiopia</option>
                                      <option value="Fiji">Fiji</option>
                                      <option value="Finland">Finland</option>
                                      <option value="France">France</option>
                                      <option value="Gabon">Gabon</option>
                                      <option value="Gaza Strip">Gaza Strip</option>
                                      <option value="The Gambia">The Gambia</option>
                                      <option value="Georgia">Georgia</option>
                                      <option value="Germany">Germany</option>
                                      <option value="Ghana">Ghana</option>
                                      <option value="Greece">Greece</option>
                                      <option value="Grenada">Grenada</option>
                                      <option value="Guatemala">Guatemala</option>
                                      <option value="Guinea">Guinea</option>
                                      <option value="Guinea-Bissau">
                                        Guinea-Bissau
                                      </option>
                                      <option value="Guyana">Guyana</option>
                                      <option value="Haiti">Haiti</option>
                                      <option value="Holy Roman Empire">
                                        Holy Roman Empire
                                      </option>
                                      <option value="Honduras">Honduras</option>
                                      <option value="Hungary">Hungary</option>
                                      <option value="Iceland">Iceland</option>
                                      <option value="India">India</option>
                                      <option value="Indonesia">Indonesia</option>
                                      <option value="Iraq">Iraq</option>
                                      <option value="Republic of Ireland">
                                        Republic of Ireland
                                      </option>
                                      <option value="Israel">Israel</option>
                                      <option value="Italy">Italy</option>
                                      <option value="Ivory Coast">Ivory Coast</option>
                                      <option value="Jamaica">Jamaica</option>
                                      <option value="Japan">Japan</option>
                                      <option value="Jonathanland">Jonathanland</option>
                                      <option value="Jordan">Jordan</option>
                                      <option value="Kazakhstan">Kazakhstan</option>
                                      <option value="Kenya">Kenya</option>
                                      <option value="Kiribati">Kiribati</option>
                                      <option value="South Korea">South Korea</option>
                                      <option value="Kosovo">Kosovo</option>
                                      <option value="Kuwait">Kuwait</option>
                                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                                      <option value="Laos">Laos</option>
                                      <option value="Latvia">Latvia</option>
                                      <option value="Lebanon">Lebanon</option>
                                      <option value="Lesotho">Lesotho</option>
                                      <option value="Liberia">Liberia</option>
                                      <option value="Libya">Libya</option>
                                      <option value="Liechtenstein">
                                        Liechtenstein
                                      </option>
                                      <option value="Lithuania">Lithuania</option>
                                      <option value="Luxembourg">Luxembourg</option>
                                      <option value="Macedonia">Macedonia</option>
                                      <option value="Madagascar">Madagascar</option>
                                      <option value="Malawi">Malawi</option>
                                      <option value="Malaysia">Malaysia</option>
                                      <option value="Maldives">Maldives</option>
                                      <option value="Mali">Mali</option>
                                      <option value="Malta">Malta</option>
                                      <option value="Marshall Islands">
                                        Marshall Islands
                                      </option>
                                      <option value="Mauritania">Mauritania</option>
                                      <option value="Mauritius">Mauritius</option>
                                      <option value="Mexico">Mexico</option>
                                      <option value="Micronesia">Micronesia</option>
                                      <option value="Moldova">Moldova</option>
                                      <option value="Monaco">Monaco</option>
                                      <option value="Mongolia">Mongolia</option>
                                      <option value="Montenegro">Montenegro</option>
                                      <option value="Morocco">Morocco</option>
                                      <option value="Mount Athos">Mount Athos</option>
                                      <option value="Mozambique">Mozambique</option>
                                      <option value="Namibia">Namibia</option>
                                      <option value="Nauru">Nauru</option>
                                      <option value="Nepal">Nepal</option>
                                      <option value="Newfoundland">Newfoundland</option>
                                      <option value="Netherlands">Netherlands</option>
                                      <option value="New Zealand">New Zealand</option>
                                      <option value="Nicaragua">Nicaragua</option>
                                      <option value="Niger">Niger</option>
                                      <option value="Nigeria">Nigeria</option>
                                      <option value="Norway">Norway</option>
                                      <option value="Oman">Oman</option>
                                      <option value="Ottoman Empire">
                                        Ottoman Empire
                                      </option>
                                      <option value="Pakistan">Pakistan</option>
                                      <option value="Palau">Palau</option>
                                      <option value="Panama">Panama</option>
                                      <option value="Papua New Guinea">
                                        Papua New Guinea
                                      </option>
                                      <option value="Paraguay">Paraguay</option>
                                      <option value="Peru">Peru</option>
                                      <option value="Philippines">Philippines</option>
                                      <option value="Poland">Poland</option>
                                      <option value="Portugal">Portugal</option>
                                      <option value="Prussia">Prussia</option>
                                      <option value="Qatar">Qatar</option>
                                      <option value="Romania">Romania</option>
                                      <option value="Rome">Rome</option>
                                      <option value="Rwanda">Rwanda</option>
                                      <option value="St Kitts & Nevis">
                                        St Kitts &amp; Nevis
                                      </option>
                                      <option value="St Lucia">St Lucia</option>
                                      <option value="Saint Vincent & the">
                                        Saint Vincent &amp; the
                                      </option>
                                      <option value="Grenadines">Grenadines</option>
                                      <option value="Samoa">Samoa</option>
                                      <option value="San Marino">San Marino</option>
                                      <option value="Sao Tome & Principe">
                                        Sao Tome &amp; Principe
                                      </option>
                                      <option value="Saudi Arabia">Saudi Arabia</option>
                                      <option value="Senegal">Senegal</option>
                                      <option value="Serbia">Serbia</option>
                                      <option value="Seychelles">Seychelles</option>
                                      <option value="Sierra Leone">Sierra Leone</option>
                                      <option value="Singapore">Singapore</option>
                                      <option value="Slovakia">Slovakia</option>
                                      <option value="Slovenia">Slovenia</option>
                                      <option value="Solomon Islands">
                                        Solomon Islands
                                      </option>
                                      <option value="Somalia">Somalia</option>
                                      <option value="South Africa">South Africa</option>
                                      <option value="Spain">Spain</option>
                                      <option value="Sri Lanka">Sri Lanka</option>
                                      <option value="Sudan">Sudan</option>
                                      <option value="Suriname">Suriname</option>
                                      <option value="Swaziland">Swaziland</option>
                                      <option value="Sweden">Sweden</option>
                                      <option value="Switzerland">Switzerland</option>
                                      <option value="Tajikistan">Tajikistan</option>
                                      <option value="Tanzania">Tanzania</option>
                                      <option value="Thailand">Thailand</option>
                                      <option value="Togo">Togo</option>
                                      <option value="Tonga">Tonga</option>
                                      <option value="Trinidad & Tobago">
                                        Trinidad &amp; Tobago
                                      </option>
                                      <option value="Tunisia">Tunisia</option>
                                      <option value="Turkey">Turkey</option>
                                      <option value="Turkmenistan">Turkmenistan</option>
                                      <option value="Tuvalu">Tuvalu</option>
                                      <option value="Uganda">Uganda</option>
                                      <option value="Ukraine">Ukraine</option>
                                      <option value="United Arab Emirates">
                                        United Arab Emirates
                                      </option>
                                      <option value="United Kingdom">
                                        United Kingdom
                                      </option>
                                      <option value="Uruguay">Uruguay</option>
                                      <option value="Uzbekistan">Uzbekistan</option>
                                      <option value="Vanuatu">Vanuatu</option>
                                      <option value="Vatican City">Vatican City</option>
                                      <option value="Venezuela">Venezuela</option>
                                      <option value="Vietnam">Vietnam</option>
                                      <option value="Yemen">Yemen</option>
                                      <option value="Zambia">Zambia</option>
                                      <option value="Zimbabwe">Zimbabwe</option>
                                    </select>

                                    <div
                                      className="d-grid"
                                      style={{ marginTop: "23px" }}
                                    >
                                      <button
                                        type="submit"
                                        className="btn btn-primary "
                                      >
                                        Sign Up
                                      </button>
                                    </div>
                                    <p className="forgot-password text-center ">
                                      Already registered{" "}
                                      <a href="/user/login">sign in?</a>
                                    </p>
                                  </form>

                                  <br />
                                  <br />

                                  <div className="foot-modal">
                                    <p>
                                      We will never pass your personal information to
                                      anyone outside of Christie's for their own
                                      marketing purposes without your consent. For more
                                      information about how Christie's processes your
                                      data, please click here to read our{" "}
                                      <a href="/privacy-policy">Privacy Notice</a>.
                                    </p>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                            <div className="col-md-9 d-flex justify-content-end">
                              <a href="/" className="text-light sua">
                                <i className="fa fa-arrow-right"></i>
                              </a>
                            </div>
                          </div>
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
