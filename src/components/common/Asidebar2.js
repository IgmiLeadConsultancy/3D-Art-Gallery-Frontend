import React, { Component } from 'react'
import Logo from '../../images/virtual-art-gif2.gif';

export default class AsideBar extends Component {





  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
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
        this.setState({ userData: data.data });
      });
  }





  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3">
            <div className="info d-flex justify-content-center">
              <a href="/admin/dashboard" className="d-block">
                <img src={Logo} alt="" width={"320px"}>
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
                  <i className="fas fa-search fa-fw" />
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
                <a href="/user/dashboard" className="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt text-dark"></i> &nbsp;
                  <p>Dashboard</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="/user/dashboard" className="nav-link">
                  <i class="fa fa-users text-dark"></i> &nbsp;
                  <p>
                    My Account
                    <i className="fas fa-angle-left right text-dark" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href={`/user/profle/${this.state.userData.email}`} className="nav-link">
                      <i className="far fa-circle nav-icon text-dark" />
                      My Profile
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="/user/dashboard" className="nav-link">
                  <img src={("https://cdn-icons-png.flaticon.com/512/783/783196.png")} alt="" width={"20px"} style={{ color: "chartreuse" }} /> &nbsp;
                  <p>
                    My Auctions
                    <i className="fas fa-angle-left right text-dark" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href={`/user/auctions/${this.state.userData.email}`} className="nav-link">
                      <i className="far fa-circle nav-icon text-dark" />
                      All Auctions
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="/user/dashboard" className="nav-link">
                  <i class="fa-solid fa-image"></i> &nbsp;
                  <p>
                    My Art Collections
                    <i className="fas fa-angle-left right text-dark" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href={`/user/collections/${this.state.userData.email}`} className="nav-link">
                      <i className="far fa-circle nav-icon text-dark" />
                      My Collections
                    </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <a href="/user/dashboard" className="nav-link">
                  <i class="fas fa-money text-dark"></i> &nbsp;
                  <p>
                    My Purchases
                    <i className="fas fa-angle-left right text-dark" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/user/profle" className="nav-link">
                      <i className="far fa-circle nav-icon text-dark" />
                      My Orders
                    </a>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <a href="/user/wishlists" className="nav-link">
                  <i className="nav-icon fa fa-heart text-dark" /> &nbsp;
                  <p>
                    Wishlists
                  </p>
                </a>

              </li>
            </ul>
          </nav>
        </div>
      </aside>
    )
  }
}
