import React, { useState } from "react";

// get our fontawesome imports
import {
  
  faBars,
  faUser,
  faStore,
  faBook, 
  faDiceD6,
  faCubes,
  faBalanceScale,
  faPeopleCarry,
  faCartPlus,
  faShoppingCart,
  faAlignJustify,
  faExchangeAlt,
  faCogs,
  faCalendarAlt,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Route, Switch } from "react-router-dom";

export default function Slile2() {
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
      <div class="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className={status}>
          <div
            // style={{ alignContent: "center" }}
            className="row m-auto "
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
          {/* <div class="custom-menu">
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
          </div> */}
          <div class="m-auto">
            {/* {status !== "active" && <h5 className="m-auto">User name</h5>} */}
            <h1 className="m-auto  pt-3">
              {status !== "active" ? (
                <a href="#" className="logo">
                  Inventory
                </a>
              ) : (
                <a href="/" class="logo">
                  I
                </a>
              )}
            </h1>

            {/* LIST ------------------------------------- */}
            <ul class="list-unstyled components mb-5">
              <li>
                <NavLink
                  exact
                  to="/"
                  style={menuText}
                  activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faPalette} />
                  {status === "" && (
                    <>
                      <span className="p-2">Dashboard</span>
                    </>
                  )}
                </NavLink>
              </li>
              <li class="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                  style={menuText}
                  activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faBook} />
                  {status === "" && (
                    <>
                      <span className="p-2">Master</span>
                    </>
                  )}
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <NavLink
                      exact
                      to="/master/item"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faDiceD6} />
                      {status === "" && (
                        <>
                          <span className="p-2">Item</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master/catagory"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faCubes} />
                      {status === "" && (
                        <>
                          <span className="p-2">Catagory</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master/unit"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faBalanceScale} />
                      {status === "" && (
                        <>
                          <span className="p-2">Unit</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master/vendor"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faPeopleCarry} />
                      {status === "" && (
                        <>
                          <span className="p-2">Vendor</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                  style={menuText}
                  activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {status === "" && (
                    <>
                      <span className="p-2">Purchase</span>
                    </>
                  )}
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <NavLink
                      exact
                      to="/purchase/entry"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                      {status === "" && (
                        <>
                          {" "}
                          <span className="p-2">Purchase Entry</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/purchase/list"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faAlignJustify} />
                      {status === "" && (
                        <>
                          <span className="p-2">Purchase List</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/purchase/return"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faExchangeAlt} />
                      {status === "" && (
                        <>
                          <span className="p-2">Purchase Return</span>{" "}
                        </>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#store"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                  style={menuText}
                  activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faStore} />
                  {status === "" && (
                    <>
                      <span className="p-2">Stock</span>
                    </>
                  )}
                </a>
                <ul class="collapse list-unstyled" id="store">
                  <li>
                    <NavLink
                      exact
                      to="/stock/adjustment"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faCogs} />
                      {status === "" && (
                        <>
                          <span className="p-2">Adjustment</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/stock/bydate"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Date</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/stock/byitem"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faDiceD6} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Item</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/stock/bycatagory"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faCubes} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Catagory</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/stock/bypayment"
                      style={{ color: "#101010" }}
                      activeStyle={{ color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Payment</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href="#">Portfolio</a>
              </li> */}
              <li>
                <NavLink
                  exact
                  to="/account"
                  style={menuText}
                  activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faUser} />
                  {status === "" && (
                    <>
                      <span className="p-2">Account</span>
                    </>
                  )}
                </NavLink>
              </li>
            </ul>

            <div class="footer">
              <p>
                Copyright &copy; All rights reserved | This template is made
                with
              </p>
            </div>
          </div>
        </nav>

        {/* ################################################################################################### */}
        {/* ######################################### pages ########################################################## */}

        <div id="content" class="p-4 p-md-5 pt-5">
          <Switch>
            <Route exact path="/">
              <h1>Dashboard</h1>
            </Route>
            <Route exact path="/master/item">
              <h1>item</h1>
            </Route>
            <Route exact path="/master/catagory">
              <h1>catagory</h1>
            </Route>
            <Route exact path="/master/unit">
              <h1>unit</h1>
            </Route>
            <Route exact path="/master/vendor">
              <h1>vendor</h1>
            </Route>
            <Route exact path="/purchase/entry">
              <h1>Purchase Enery</h1>
            </Route>
            <Route exact path="/purchase/list">
              <h1>purchase list</h1>
            </Route>
            <Route exact path="/purchase/return">
              <h1>purchase return</h1>
            </Route>

            <Route exact path="/stock/adjustment">
              <h1>purchase return</h1>
            </Route>

            <Route exact path="/stock/byitem">
              <h1>purchase return</h1>
            </Route>

            <Route exact path="/stock/bycatagory">
              <h1>purchase return</h1>
            </Route>

            <Route exact path="/stock/date">
              <h1>purchase return</h1>
            </Route>
            <Route exact path="/stock/bypayment">
              <h1>purchase return</h1>
            </Route>
            <Route exact path="/account">
              <h1>Account</h1>
            </Route>
            <Route path="/">
              <h1>invalid !</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

const menuText = {
  color: "#000000",
};
