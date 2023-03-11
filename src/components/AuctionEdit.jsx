import React, { useState, useEffect } from "react";
import Footer from "./common/Footer";
import AsideBar from "./common/Asidebar2";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const AuctionEdit = () => {


    
    const [newUser, setNewUser] = useState({
        collection_title: "",
        artCollectionss_name: "",
        artCollectionss_short_desc: "",
        artCollectionss_category: "",
        artCollectionss_price: "",
        auction_duration:"",
        collectionsImg: "",
      });

 

      const handleChange = (e) => {


        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };


    const [userData, setuserData] = useState([]);
    const [emailParam, setEamilParam] = useState([]);
    // const [fns, setfns] = useState("");
    const [arts, setArts] = useState("");
    const [users, setusers] = useState("");


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


console.log(emailParam);

    const logout = () => {
        window.localStorage.clear();
        window.location.href = "/";
    };


    
const {id}=useParams()
 
console.log(id);




const [categoryData, setcategoryData] = useState([]);

  const getcategoryData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Categories");
      setcategoryData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcategoryData();
  }, []);




const getUserData = async () => {
    try {
      const resp = await axios.get(`http://localhost:5000/getAuctionDetails/${id}`);
      setNewUser(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  },[]);






  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("collection_title", newUser.collection_title);
    formData.append("artCollectionss_name", newUser.artCollectionss_name);
    formData.append("artCollectionss_short_desc", newUser.artCollectionss_short_desc);
    formData.append("artCollectionss_category",   newUser.artCollectionss_category);
    formData.append("artCollectionss_price",  newUser.artCollectionss_price);
    formData.append("auction_duration",  newUser.auction_duration);
    formData.append("collectionsImg",  newUser.collectionsImg);

 await axios({
      method: "PATCH",
      url: `http://localhost:5000/updateAuctionCollections/${id}`,
      data: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    }).then((data) => {console.log(data,"Arts Collection Has Been Updated Successfully");
  
    if(data.status === 200){
      alert("Arts Collection Has Been Updated Successfully");
      window.location.href=`/user/auctions/${emailParam}`
     }
  })
    
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


                             <div className="col-md-12">
                             <form action="">
                            <div className="form-group">
                                <Form className="col-md-12 form-add p-5 shadow-lg rounded my-5">
                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Art's Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="collection_title"
                                            onChange={handleChange}
                                            value={newUser.collection_title}
                                            placeholder="Art's Title"
                                        />
                                    </Form.Group>

                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Art's Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="artCollectionss_name"
                                            onChange={handleChange}
                                            value={newUser.artCollectionss_name}
                                            placeholder="Art's Name"
                                        />
                                    </Form.Group>

                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Art's Short Desc</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="artCollectionss_short_desc"
                                            onChange={handleChange}
                                            value={newUser.artCollectionss_short_desc}
                                            placeholder="Art's Short Desc"
                                        />
                                    </Form.Group>

                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Art's's Category</Form.Label>
                                        <Form.Select
                                            name="artCollectionss_category"
                                            className="form-control"
                                            onChange={handleChange}
                                            value={newUser.artCollectionss_category}
                                        >
                                            <option>---------</option>
                                            {categoryData.map((e) => {
                                                return (
                                                    <option key={e.category_name}>{e.category_name}</option>
                                                );
                                            })}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Art's Price</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="artCollectionss_price"
                                            onChange={handleChange}
                                            value={newUser.artCollectionss_price}
                                            placeholder="Art's Price"
                                        />
                                    </Form.Group>


                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Art's Auction Duration</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="auction_duration"
                                            onChange={handleChange}
                                            value={newUser.auction_duration}
                                            placeholder="Art's Auction Duration"
                                        />
                                    </Form.Group>



                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>Art's Thumbnail</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="collectionsImg"
                                            onChange={(e)=>e.target.files[0]}
                                            placeholder="Art's Thumbnail"
                                        />
                                    </Form.Group>


                                   

                                    <Form.Group
                                        className=""
                                        controlId="formBasicEmail"
                                        align="center"
                                    >
                                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </form>
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
export default AuctionEdit;
