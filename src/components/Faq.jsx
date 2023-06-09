import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import icon from "../img/user.png";
// import { logout } from "../actions/auth";
import axios from "axios";
import AsideBar from "./common/AsideBar";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./common/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import Footer from "./common/Footer";

const FAQs = ({ auth: { user } }) => {
  const [userInfo, setuserInfo] = useState({
    question: "",
    answer: "",
  });

  const onquestion = (value) => {
    setuserInfo({ ...userInfo, question: value });
  };
  const onanswer = (value) => {
    setuserInfo({ ...userInfo, answer: value });
  };

  

  const [isError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();

      await axios
        .post(`http://localhost:5000/FAQS`, {
          question: userInfo.question,
          answer: userInfo.answer,
        })
        .then((data) => {
          console.log(data, "FAQs Data Has Been Updated Successfully");

          if (data.status === 200) {
            alert(`FAQs Data Has Been Inserted Successfully`);
            window.location.href = "/admin/faqs";
          }
        });
    } catch (error) {
      throw error;
    }
  };

  function calcTime(city, offset) {
    var b = new Date();
    var utc = b.getTime() + b.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.getHours();
  }

  var showime = calcTime("Los Angeles", "-8");

  return (
    <div className="wrapper">
      <div>

      </div>
      <div>
        <AsideBar />
      </div>
      <div className="content-wrapper">
        
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">FAQs</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="editor">
                  <div className="col-md-12">
                    <form onSubmit={addDetails} className="update__forms">
                      <h3 className="myaccount-content"> Add </h3>
                      <div className="form-row">
                        <div className="clearfix"></div>
                        <div className="form-group col-md-12 editor">
                          <label className="font-weight-bold">
                            {" "}
                            Question <span className="required"> * </span>{" "}
                          </label>
                          <EditorToolbar toolbarId={"t1"} />
                          <ReactQuill
                            theme="snow"
                            value={userInfo.question}
                            onChange={onquestion}
                            placeholder={"Write something awesome..."}
                            modules={modules("t1")}
                            formats={formats}
                          />
                        </div>
                        <br />
                        <div className="form-group col-md-12 editor">
                          <label className="font-weight-bold"> Answer </label>
                          <EditorToolbar toolbarId={"t2"} />
                          <ReactQuill
                            theme="snow"                           
                            onChange={onanswer}
                            placeholder={"Write something awesome..."}
                            modules={modules("t2")}
                            formats={formats}
                          />
                        </div>
                        <br />
                        {isError !== null && (
                          <div className="errors"> {isError} </div>
                        )}
                        <div className="form-group col-sm-12" align="center">
                          <button
                            type="submit"
                            className="btn btn-outline-primary btn__theme"
                          >
                            {" "}
                            Save{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

FAQs.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(FAQs);
