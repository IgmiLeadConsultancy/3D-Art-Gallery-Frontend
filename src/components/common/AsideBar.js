import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from '../../images/virtual-art-gif2.gif';
const  AsideBar=()=>  {


  const [arts, setArts] = useState("");



  const getArts = async () => {
    try {
        const resp = await axios.get(`http://localhost:5000/Fetch-Admin-Details/`);
       for (let i = 0; i < resp.data.length; i++) {
        
        console.log(resp.data[i]);
        setArts(resp.data[i].email);
       }
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getArts();
}, []);


// console.log(arts);

  
 
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3">
            <div className="info d-flex justify-content-center">
              <a href="/admin/dashboard" className="d-block">
                <img src={Logo} alt="">
                </img>
              </a>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" style={{ color: "black" }} />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="/admin/dashboard" className="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" style={{ color: "black" }}></i> &nbsp;
                  <p>Dashboard</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="/admin/dashboard" className="nav-link">
                  <i class="fa fa-users" style={{ color: "black" }}></i> &nbsp;
                  <p>
                    User Management
                    <i className="fas fa-angle-left right" style={{ color: "black" }} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/admin/users" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Users
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/admin/earnings" className="nav-link">
                  <i className="nav-icon fas fa-credit-card" style={{ color: "black" }} /> &nbsp;
                  <p>Earnings</p>
                </a>
              </li>


              <li className="nav-item">
                <a href="/admin/dashboard" className="nav-link">
                  <img src={("https://cdn-icons-png.flaticon.com/512/783/783196.png")} alt="" width={"20px"} style={{ color: "chartreuse" }} /> &nbsp;
                  <p>
                    Auctions
                    <i className="fas fa-angle-left right" style={{ color: "black" }} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/admin/transactions" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      All Auctions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/transactions" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Auctions Result
                    </a>
                  </li>
                </ul>
              </li>



              <li className="nav-item">
                <a href="/admin/dashboard" className="nav-link">
                  <i class="nav-icon fas far fa-money" style={{ color: "black" }}></i> &nbsp;
                  <p>
                    Transactions
                    <i className="fas fa-angle-left right" style={{ color: "black" }} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/admin/transactions" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      All Transactions
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a href="/admin/category-list" className="nav-link">
                  <i className="nav-icon fa fa-list-alt" style={{ color: "black" }} /> &nbsp;
                  <p>Categories</p>
                </a>
              </li> */}
              <li className="nav-item">
                <a href="/" className="nav-link">
                <i class="fa-solid fa-image"></i> &nbsp;
                  <p>
                    Artworks Collections
                    <i className="fas fa-angle-left right" style={{ color: "black" }} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/admin/atrsCollections" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      All Artworks Collections
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href={`/admin-own/atrsCollections/${arts}`} className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Own Artworks Collections
                    </a>
                  </li>

                 
                </ul>
              </li>
              {/* <li className="nav-item">
                <a href="javascript()/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-address-book" /> &nbsp;
                  <p>
                    Contacts
                  </p>
                </a>
              
              </li> */}
              {/* <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-list-ol" /> &nbsp;
                  <p>
                    Subscribers
                  </p>
                </a>
              
              </li> */}
              {/* <li className="nav-item">
                <a href="/admin/news-list" className="nav-link">
                  <i className="nav-icon fas fa-newspaper" /> &nbsp;
                  <p>
                    News
                  </p>
                </a>
              
              </li> */}
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="fa fa-wrench" style={{ color: "black" }} /> &nbsp;
                  <p>
                    Settings
                    <i className="fas fa-angle-left right" style={{ color: "black" }} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/admin/general-settings" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      General Settings
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a href="/admin/emails" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      Email Settings
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a href="/admin/nfts" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      NFT Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/sliders" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Sliders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/contents" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Contents
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a href="admin/counters" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                     Counters
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a href="/admin/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-address-book" style={{ color: "black" }} /> &nbsp;
                  <p>
                    CMS
                    <i className="fas fa-angle-left right" style={{ color: "black" }} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/admin/aboutus" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/contactus" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/faqs" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/privaypolicy" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/admin-policy" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      Admin Pollicy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/admin/tnc" className="nav-link">
                      <i className="far fa-circle nav-icon" style={{ color: "black" }} />
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }



  export default AsideBar;