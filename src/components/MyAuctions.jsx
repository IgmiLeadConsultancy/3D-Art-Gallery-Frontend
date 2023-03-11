import React, { useState, useEffect } from "react";
import Footer from "./common/Footer";
import AsideBar from "./common/Asidebar2";
import { useParams } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";

const MyAuctions = () => {


    const [userData, setuserData] = useState([]);
    // const [fns, setfns] = useState("");
    const [arts, setArts] = useState("");
    const [users, setusers] = useState("");
    const [emailParam, setEamilParam] = useState([]);


    const userDetails = () => {
        fetch("http://localhost:5000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("loggedIn"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                setuserData({ userData: data.data });
                // setfns({ fns: data.data.fname.slice(0, 1) + data.data.lname.slice(0, 1) });
                // console.log(data.data.fname.slice(0,1));
                setEamilParam( data.data.email );
            });
    }

    useEffect(() => {
        userDetails();
    }, []);

    const logout = () => {
        window.localStorage.clear();
        window.location.href = "/";
    };

    const { id } = useParams();


    const getArts = async () => {
        try {
            const resp = await axios.get(`http://localhost:5000/getartsOfUsersForAuctiuons/${id}`);
            setArts(resp.data);
            console.log(resp.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArts();
    }, []);

    // console.log(arts);






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
                <a href={`/user/auction-edit/${row._id}`} className="btn btn-success">
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





    const deletecategory = async (id) => {
        await axios
          .delete(`http://localhost:5000/deleteMyAuctionCollection/${id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data) => {
            console.log(data, "Art Collection Has Been Deleted");
            if (data.status === 200) {
              alert(`Art Collection Has Been Deleted`);
              window.location.href = `/user/auctions/${emailParam}`;
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


      





    return (
        <div>
            <div className="wrapper">
                <div>
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
                                        <h5 className="text-dark text-center font-weight-bold">
                                            {" "}
                                            Welcome, <span></span> 👋 &nbsp;
                                            <button className="btn btn-info border-none" onClick={logout}
                                                style={{ border: "none", borderRadius: "0px" }}
                                            >
                                                Logout <i className="fa fa-sign-out"></i>
                                            </button>
                                        </h5>

                                    </div>

                                </div>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right"></div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <AsideBar />
                </div>
                <div className="content-wrapper">

                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6"></div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center">


                                <div className="col-md-12" align="center">
                                    <DataTable
                                        title="My Collections's Data"
                                        columns={Collumns}
                                        data={arts}
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
        </div>
    );
}
export default MyAuctions;
