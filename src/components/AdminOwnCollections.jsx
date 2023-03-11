import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { } from "../actions/auth";
import axios from "axios";
import AsideBar from "./common/AsideBar";
import Footer from "./common/Footer";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const AdminOwnCollections = ({ auth: { user } }) => {
    const [categoryData, setcategoryData] = useState([]);

    const { id } = useParams()
    console.log(id);
    const getcategoryData = async () => {
        try {
            const resp = await axios.get(`http://localhost:5000/getartsOfUsersForAuctiuons/${id}`);
            setcategoryData(resp.data);
        } catch (error) {
            console.log(error);
        }
    };


    const Collumns = [
        {
            name: "Collection Title",
            selector: (row) => row.collection_title,
        },
        {
            name: "Collection Name",
            selector: (row) => row.artCollectionss_name,
        },
        {
            name: "Collection Image",
            selector: (row) => (
                <img
                    width={70}
                    height={70}
                    src={require(`../uploads/${row.collectionsImg}`).default}
                    alt={"NFT"}
                />
            ),
        },
        {
            name: "Collection Description",
            selector: (row) => row.artCollectionss_short_desc,
        },
        {
            name: "Collection Price",
            selector: (row) => row.artCollectionss_price,
        },
        {
            name: "Auction Status",
            selector: (row) => row.status,
        },
        
        {
            name: "Edit",
            cell: (row) => (
                <a href={`/admin/product-edit/${row._id}`} className="btn btn-success">
                    <i className="fa fa-pen"></i>
                </a>
            ),
        },

        {
            name: "Starrt Auction",
            cell: (row) => (
                <button
                    className="btn btn-info"
                onClick={() => StartAuctions(row._id)}
                >
                    <img src={("https://cdn-icons-png.flaticon.com/512/783/783196.png")} alt="" width={"20px"} style={{ color: "chartreuse" }} /> &nbsp;

                </button>
            ),
        },

        {
            name: "Delete",
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
        getcategoryData();
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





    const StartAuctions = async (id) => {
        await axios
          .patch(`http://localhost:5000/startAuctions/${id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data) => {
            console.log(data, "Auction Has Been Started");
            if (data.status === 200) {
              alert(`Auction Has Been Started`);
              window.location.href = `/user/auctions/${emailParam}`;
            }
          });
      };

    function calcTime(city, offset) {
        var b = new Date()
        var utc = b.getTime() + (b.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000 * offset));
        return nd.getHours();

    }



    var showime = (calcTime('Los Angeles', '-8'));



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
                                <h1 className="m-0">Manage Category</h1>
                            </div>

                            <div className="col-sm-6" align="right">
                                <a href="/admin/add-category" className="btn btn-outline-info">
                                    <i className="fa fa-plus"></i> Add Categoies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <DataTable
                                    title="Category Data"
                                    columns={Collumns}
                                    data={categoryData}
                                    pagination
                                    fixedHeader
                                    selectableRows
                                />
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
AdminOwnCollections.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(AdminOwnCollections);
