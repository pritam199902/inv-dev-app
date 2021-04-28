import React, { useState } from "react";

// get our fontawesome imports
import {
  faHome,
  faBars,
  faUser,
  faStore,
  faTruck,
  faMoneyBill,
  faPalette,
  faBook,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Route, Switch } from "react-router-dom";

// components--------------
import Home from "./home";
import Account from "./account";
import Purchase from "./purchase";
import Store from "./store";
import Master from "./master";
import Suppliers from "./suppliers";

function VenderSec() {
  const [status, setStatus] = useState("active");

  const handleState = () => {
    if (status === "active") {
      setStatus("");
    } else if (status === "") {
      setStatus("active");
    }
  };

  return (
    <>
      <div className=" d-flex align-items-stretch">
        <nav
          id="sidebar"
          // style={{ backgroundColor: "#505050" }}
          className={status}
        >
          <div
            // style={{ alignContent: "center" }}
            className="row m-auto  "
          >
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-outline-dark float-right ml-3 mt-3"
              onClick={handleState}
              // style={{ marginLeft: 3 }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {status !== "active" && (
            <div
              style={{ justifyContent: "center" }}
              className="row m-auto p-3  "
            >
              <h4>Company name</h4>
            </div>
          )}
          <h1>
            {/* <a href="#" className="logo ml-3">
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#101010",
                }}
              ></div>
            </a> */}
          </h1>
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <NavLink
                exact
                to="/"
                style={{ color: "#101010" }}
                activeStyle={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faPalette} />
                {status === "" && (
                  <>
                    <span className="fa fa-home"></span> Dashboard
                  </>
                )}
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                exact
                to="/master"
                style={{ color: "#101010" }}
                activeStyle={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faBook} />
                {status === "" && (
                  <>
                    <span className="fa fa-home"></span> Master
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                style={{ color: "#101010" }}
                activeStyle={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faStore} />
                {status === "" && (
                  <>
                    <span className="fa fa-home"></span> Store
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchase"
                style={{ color: "#101010" }}
                activeStyle={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faMoneyBill} />
                {status === "" && (
                  <>
                    <span className="fa fa-home"></span> Purchase
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vendor"
                style={{ color: "#101010" }}
                activeStyle={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faTruck} />
                {status === "" && (
                  <>
                    <span className="fa fa-home"></span> Vendor
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account"
                style={{ color: "#101010" }}
                activeStyle={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faUser} />
                {status === "" && (
                  <>
                    <span className="fa fa-home"></span> Account
                  </>
                )}
              </NavLink>
            </li>
          </ul>

          <div className="footer">
            <p>All rights reserved @ | Inventory system</p>
          </div>
        </nav>

        <div id="content">
          {/* <nav className="navbar navbar-expand-lg navbar-light mb-1 pt-1 pb-1 ">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-primary"
                onClick={handleState}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>

              <button
                className="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <h6 className="mt-2 mr-2">User name</h6>
                  <li className="nav-item active">
                    <button type="button" className="btn btn-outline-warning">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}

          {/* -------------------------- body container ---------------------------- */}
          <div>
            <Switch>
              {/* ----------------HOME--------------- */}
              <Route exact path="/">
                <>
                  <Home />
                </>
              </Route>
              {/* ----------------Store--------------- */}
              <Route exact path="/master">
                <>
                  <Master />
                </>
              </Route>
              {/* ----------------Store--------------- */}
              <Route exact path="/store">
                <>
                  <Store />
                </>
              </Route>
              {/* ----------------Purchase--------------- */}
              <Route exact path="/purchase">
                <>
                  <Purchase />
                </>
              </Route>
              {/* -------------Suppliers--------------- */}
              <Route exact path="/vendor">
                <>
                  <Suppliers />
                </>
              </Route>
              {/* ----------------Account-------------- */}
              <Route exact path="/account">
                <>
                  {/* {setActivePage("My Account")} */}
                  <Account />
                </>
              </Route>
              {/* ----------------------------------- */}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default VenderSec;
