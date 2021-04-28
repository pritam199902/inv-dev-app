import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------

import { NavLink, Route, Switch } from "react-router-dom";

function Master() {
  const [text, setText] = useState();

  const txch = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      {/* <ul className="nav nav-tabs bg-dark" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="itemlist-tab"
            data-toggle="tab"
            href="#itemlist"
            role="tab"
            aria-controls="itemlist"
            aria-selected="true"
          >
            Item List
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="addItem-tab"
            data-toggle="tab"
            href="#additem"
            role="tab"
            aria-controls="additem"
            aria-selected="false"
          >
            <NavLink to="/master/additem">Add Item</NavLink>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="catlist-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="catlist"
            aria-selected="false"
          >
            <NavLink to="/master/unit">Unit</NavLink>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="addCat-tab"
            data-toggle="tab"
            // href="#addcat"
            role="tab"
            aria-controls="addcat"
            aria-selected="false"
          >
            <NavLink to="/master/catagory">Catagory</NavLink>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="addCat-tab"
            data-toggle="tab"
            href="#addcat"
            role="tab"
            aria-controls="addcat"
            aria-selected="false"
          >
            <NavLink to="/master/vendor">Vendor</NavLink>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="addCat-tab"
            data-toggle="tab"
            // href="#addcat"
            role="tab"
            aria-controls="addcat"
            aria-selected="false"
          >
            <NavLink to="/master/vendorlist">Venter List</NavLink>
          </a>
        </li>
      </ul> */}
      {/* ###################################################################################### */}
      <ul className="nav nav-tabs bg-dark" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="itemlist-tab"
            href="/master/itemlist"
            aria-controls="itemlist"
            aria-selected="true"
          >
            Item List
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="addItem-tab"
            href="/master/additem"
            aria-controls="additem"
            aria-selected="false"
          >
            <NavLink to="/master/additem">Add Item</NavLink>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="catlist-tab"
            href="/master/unit"
            aria-controls="catlist"
            aria-selected="false"
          >
            <NavLink to="/master/unit">Unit</NavLink>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            className="nav-link"
            id="addCat-tab"
            to="/master/catagory"
            aria-controls="addcat"
            aria-selected="false"
          >
            Catagory
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            className="nav-link"
            id="addCat-tab"
            to="/master/vendorlist"
            aria-controls="addcat"
            aria-selected="false"
          >
            Venter List
          </NavLink>
        </li>

        <li className="nav-item" role="presentation">
          <NavLink
            className="nav-link"
            id="addCat-tab"
            to="/master/vendor"
            aria-controls="addcat"
            aria-selected="false"
          >
            <NavLink to="/master/vendor">Vendor</NavLink>
          </NavLink>
        </li>
      </ul>

      {/* ================================================================================================= */}
      {/* <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="itemlist"
          role="tabpanel"
          aria-labelledby="itemlist-tab"
          style={{ backgroundColor: "#fff" }}
        >
         

          <div
            className="tab-pane fade"
            id="additem"
            role="tabpanel"
            aria-labelledby="additem-tab"
          >
            <ItemList />
          </div>
          <div
            className="tab-pane fade"
            id="additem"
            role="tabpanel"
            aria-labelledby="additem-tab"
          >
            <AddItem />
          </div>
          <div
            className="tab-pane fade "
            id="catlist"
            role="tabpanel"
            aria-labelledby="catlist-tab"
          >
            <Unit />
            <h2>Unit</h2>
          </div>
          <div
            className="tab-pane fade "
            id="addcat"
            role="tabpanel"
            aria-labelledby="addcat-tab"
          >
            <Catagory />
          </div>
        </div>
      </div> */}
      {/* ################################################################################# */}
      <div className="tab-content bg-warning" id="myTabContent">
        <div
          className="tab-pane fade show  "
          aria-labelledby="itemlist-tab"
          style={{ backgroundColor: "#fff" }}
        >
          {/* -------------------------------------------- */}
          <h1>Abcdef</h1>

          <Switch>
            <Route exact path="/master/itemlist">
              <>askjdkjahskjdhkajshdkjh</>
            </Route>
            <Route exact path="/master/additem">
              <>askjdkjahskjdhkajshdkjh</>
            </Route>
            <Route exact path="/master/catagory">
              <>askjdkjahskjdhkajshdkjh</>
            </Route>
            <Route exact path="/master/unit">
              <>askjdkjahskjdhkajshdkjh</>
            </Route>
            <Route exact path="/master/vendor">
              <>askjdkjahskjdhkajshdkjh</>
            </Route>
          </Switch>
          {/* <div className="tab-pane fade" aria-labelledby="additem-tab">
             <ItemList /> 
            <h2>Item List</h2>
          </div>
          <div className="tab-pane fade" aria-labelledby="additem-tab">
            <AddItem />
          </div>
          <div className="tab-pane fade " aria-labelledby="catlist-tab">
            <Unit />
            <h2>Unit</h2>
          </div>
          <div className="tab-pane fade " aria-labelledby="addcat-tab">
            <Catagory />
          </div> */}
        </div>
      </div>
    </>
  );
}

const titleText = {
  color: "#919191",
};

export default Master;
