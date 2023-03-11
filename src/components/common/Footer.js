import React, { useEffect, useState } from "react";
import axios from "axios";
const Footer = () => {
  const [CollectionData1, setCollectionData1] = useState([]);

  const getCollectionData1 = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-GeneralSettings");
      setCollectionData1(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionData1();
  }, []);


  let img = undefined;
  let cmp_name = undefined;
  let copyright = undefined;

  {
    CollectionData1 &&
      CollectionData1.map((cd) => (

        img = require(`../../uploads/${cd.logo}`).default,
        cmp_name = cd.company_name,
        copyright = cd.cpoyright_text
      ));
  }

  return (
    <>
    <hr className="bg-light" />
    <footer className="text-center text-lg-start text-muted bg-dark">
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="p-2"><a href="" className="text-decoration-none text-light">Newsletter Signup</a></li>
              <li className="p-2"><a href="" className="text-decoration-none text-light">vrartgallery.com</a></li>
              <li className="p-2"><a href="" className="text-decoration-none text-light">Contact Us</a></li>
              <li className="p-2"><a href="" className="text-decoration-none text-light">Create an Account</a></li>
              <li className="p-2"><a href="" className="text-decoration-none text-light">Cookie Settings</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="p-2"><a href="" className="text-decoration-none text-light">Partner</a></li>
              <li className="p-2"><a href="" className="text-decoration-none text-light">Privacy Center</a></li>
              <li className="p-2"><a href="" className="text-decoration-none text-light">Terms and Conditions</a></li>
              <li className="p-2"><a href="" className="text-decoration-none text-light">Conditions of Sales</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="bg-light"></hr>
      <br></br>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; All Rights Reserved For Vr Art Gallery 2023</p>
          </div>

          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="list-inline-item">
                <a href="/" className="text-light bg-light" style={{ padding: "20px" }}><i className="fa fa-facebook text-dark font-weight-bold"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-light bg-light" style={{ padding: "20px" }}><i className="fa fa-instagram text-dark font-weight-bold"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-light bg-light" style={{ padding: "20px" }}><i className="fa fa-twitter text-dark font-weight-bold"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-light bg-light" style={{ padding: "20px" }}><i className="fa fa-linkedin text-dark font-weight-bold"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-light bg-light" style={{ padding: "20px" }}><i className="fa fa-pinterest text-dark font-weight-bold"></i></a>
              </li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
