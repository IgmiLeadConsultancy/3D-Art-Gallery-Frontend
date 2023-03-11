import Accordion from "react-bootstrap/Accordion";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "../common/Footer";


const FaqComp = () => {
  const [Faq, setFaq] = useState("");

  useEffect(() => {
    const fetchFaq = async () => {
      const resp = await fetch("http://localhost:5000/Fetch-Faq");
      const json = await resp.json();
      if (resp.ok) {
        setFaq(json);
      }
    };

    fetchFaq();
  }, []);

  return (
    <section className="faqs m-0">
   
      
      {/* Slider Part End */}
      <div className="container p-3">
        <div className="row my-3">
          <div className="col-md-6">
            <h6 className="mt-5 text-light">Some key facts about NFTs and how to buy them through Virtual Gallery</h6>
          </div>
          <div className="col-md-6">
      <h4 className="text-light m-2">Frequently Asked Questions</h4>
            <h3 className="text-light" align="center">
              {Faq &&
                Faq.map((Faq) => (
                  <Accordion className="m-2">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header key={Faq._id}>
                        {Faq.question}
                      </Accordion.Header>
                      <Accordion.Body key={Faq._id}>
                        {Faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
            </h3>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </section>
  );
};

FaqComp.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(FaqComp);
