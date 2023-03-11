import React , {useEffect, useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {} from "../actions/auth";
import axios  from "axios";
import AsideBar from "./common/AsideBar";
import Footer from "./common/Footer";
// import Table from "react-bootstrap/Table";
import DataTable from "react-data-table-component";

const ManageProducts = ({ auth: { user } }) => {

   const [newsData,setnewsData]=useState([]);
    
    const getnewsData= async()=>{
     try {
      const resp=await axios.get("http://localhost:5000/Fetch-All-News");
      setnewsData(resp.data);
     } catch (error) {
      console.log(error);
     }
    }

   const Collumns=[
    {
      name:"News Title",
      selector:row=>row.news_title
    },
    {
      name:"News Description",
      selector:row=>row.news_desc
    },
    {
      name:"Created At",
      selector:row=>row.news_createdAt
    },

    {
      name:"News Thumbnail",
      selector:row=>row.news_thumbnail
    },
  
    {
      name:"Edit",
      cell:(row)=><a href={`/edit?id=${row._id}`} className="btn btn-success">Edit</a>
            
    },
    {
      name:"Delete",
      cell:(row)=><button className="btn btn-danger" >Delete</button>
            
    },  
   ]
     
    useEffect(()=>{
      getnewsData();
    }, []);


    function calcTime(city,offset){
      var b=new Date()
      var utc=b.getTime()+(b.getTimezoneOffset()*60000);
      var nd=new Date(utc+(3600000*offset));
      return nd.getHours();
  
    }
  
    
  
    var showime=(calcTime('Los Angeles','-8'));
    
    


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
                <h1 className="m-0">Manage Products</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-11 m-2 d-flex justify-content-end">
                    <a href="/add-news" className="btn btn-outline-info"><i className="fa fa-plus"></i>Add News</a>
                </div>
            </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <DataTable 
                title="Products' Data"
                columns={Collumns}
                data={newsData}
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
ManageProducts.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ManageProducts);
