import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { } from "../actions/auth";
import axios from "axios";
import AsideBar from "./common/AsideBar";
import Footer from "./common/Footer";
import DataTable from "react-data-table-component";

const ManageProducts = ({ auth: { user } }) => {
  // 3rd Wall Collections
  const [productsData, setProductsData] = useState([]);

  const getProductsData1 = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Products1");
      setProductsData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Collumns = [
    {
      name: "Title",
      selector: (row) => row.collection_title,
    },
    {
      name: "Name",
      selector: (row) => row.artCollectionss_name,
    },
    {
      name: "Description",
      selector: (row) => row.artCollectionss_short_desc,
    },
    {
      name: "Category",
      selector: (row) => row.artCollectionss_category,
    },
    {
      name: "Thumbnail",
      selector: (row) => (
        <img
          width={70}
          height={70}
          src={require(`../uploads/${row.collectionsImg}`).default}
          alt={"Florida Fashion"}
        />
      ),
    },
    {
      name: "Price",
      selector: (row) => row.artCollectionss_price,
    },

    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Selling Type",
      selector: (row) => row.selling_type,
    },
    {
      name: "Bid Amount",
      selector: (row) => row.bid_amount_in_usd,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
   
    {
      name: "Delete Collections",
      cell: (row) => (
          <button
              className="btn btn-danger"
              onClick={() => deletecategory(row._id)}
          >
              <i className="fa fa-times"></i>
          </button>
      ),
  },
    
  ];

  useEffect(() => {
    getProductsData1();
  }, []);

 
  const deletecategory = async (id) => {
    await axios
        .delete(`http://localhost:5000/deleteCategory/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((data) => {
            console.log(data, "Category Updated");
            if (data.status === 200) {
                alert(`Category Has Been Deleted Successfully`);
                window.location.href = "/admin/category-list";
            }
        });
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
      <div></div>
      <div>
        <AsideBar />
      </div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Manage Products</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-md-11 m-3" align="right">
              <a
                className="btn btn-outline-info"
                href="/admin/atrsCollections1"
              >
                <i className="fa fa-plus"></i> Add Collections
              </a>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-5">
              <h2 className="products-head p-3"> Auctions ArtCollections </h2>
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <DataTable
                        title="Auctions ArtCollections' Data"
                        columns={Collumns}
                        data={productsData}
                        pagination
                        fixedHeader
                        selectableRows
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
ManageProducts.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ManageProducts);
