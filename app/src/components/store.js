import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------
import {
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Route, Switch } from "react-router-dom";

function Store() {
  // test data --------------------

  const [catagories, setCatagories] = useState([
    { id: 1, cat: "catagory 1 werwew erwrwrn wrwr" },
    { id: 2, cat: "catagory 2" },
    { id: 3, cat: "catagory 3" },
    { id: 4, cat: "catagory 4 wer we werrw erwerwer" },
    { id: 5, cat: "catagory 4 wer we werrw erwerwer" },
  ]);

  const [units, setUnits] = useState([
    { id: 1, unit: "unit 1" },
    { id: 2, unit: "unit 2" },
    { id: 3, unit: "unit 3" },
    { id: 4, unit: "unit 4" },
    { id: 5, unit: "unit 5" },
  ]);

  const data = [
    {
      id: 1,
      itemName: "item 1",
      desc: "this is description...",
      catagory: catagories[0].cat,

      unit: units[0].unit,
      HSNcode: "28198",

      purUnitPrice: "1000",
      saleUnitPrice: "1000",

      tax: "18%",
    },
    {
      id: 2,
      itemName: "item 2",
      desc: "this is description...",
      catagory: catagories[1].cat,

      unit: units[1].unit,
      HSNcode: "23498",

      purUnitPrice: "1000",
      saleUnitPrice: "1000",

      tax: "18%",
    },
    {
      id: 3,
      itemName: "item 3 asdasdasd ad  asd asdasdascWECcECec",
      desc: "this is description...",
      catagory: catagories[2].cat,

      unit: units[2].unit,
      HSNcode: "28198",

      purUnitPrice: "1000",
      saleUnitPrice: "1000",

      tax: "18%",
    },
    {
      id: 4,
      itemName: "item 4",
      desc: "this is description...",
      catagory: catagories[3].cat,

      unit: units[3].unit,
      HSNcode: "28198",

      purUnitPrice: "1000",
      saleUnitPrice: "1000",

      tax: "18%",
    },
    {
      id: 5,
      itemName: "item 4",
      desc: "this is description...",
      catagory: catagories[4].cat,

      unit: units[4].unit,
      HSNcode: "28198",

      purUnitPrice: "1000",
      saleUnitPrice: "1000",

      tax: "18%",
    },
  ];

  const [text, setText] = useState();

  //---------------Component-----------
  // Items--
  const ItemList = () => {
    return (
      <div
        style={{ position: "relative" }}
        className="container m-2 pl-2 pr-2 "
      >
        <div className="row m-2" style={{ justifyContent: "space-between" }}>
          <h3 style={titleText}>All Items</h3>
          <div>
            <form className="form-inline ">
              <input
                className="form-control mr-2 sm-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success btn-sm my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div
          styles={{ overflowY: "scroll" }}
          className="ml-3 mr-3"
          id="table table-responsive"
        >
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Code</th>
                <th scope="col">Item</th>
                <th scope="col">Catagory</th>
                <th scope="col">Unit</th>
                <th scope="col">Price ( Rs )</th>
                <th scope="col">Tax</th>
                <th scope="col">Edit</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr>
                    <td scope="row"> {i + 1} </td>
                    <td>{item.id}</td>
                    <td>{item.itemName}</td>
                    <td>{item.catagory}</td>
                    <td>{item.unit}</td>
                    <td>{item.purUnitPrice}</td>
                    <td>{item.tax}</td>
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          alert("Edit->  id: " + item.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          alert("Remove->  id: " + item.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} color="#f00" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  // Add Item--
  const AddItem = () => {
    return (
      <div
        style={{ position: "relative" }}
        className="container m-auto pl-5 pr-5"
      >
        <h3 style={titleText}>Add Item</h3>
        <div className="pl-5 pr-3">
          <form action>
            {/* --------------------------------- */}
            <div className="form-row m-2">
              <div className="col-3 pt-2">
                <h6 className="float-right">Item Id</h6>
              </div>
              <div className="col-5 ml-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Item id auto generated..."
                  readOnly
                />
              </div>
            </div>
            {/* --------------------------------- */}
            <div className="form-row m-2">
              <div className="col-3 pt-2">
                <h6 className="float-right">Item Name</h6>
              </div>
              <div className="col-5 ml-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Item name..."
                />
              </div>
            </div>

            {/* --------------------------------- */}
            <div className="form-row m-2">
              <div className="col-3 pt-2">
                <h6 className="float-right">Catagory</h6>
              </div>
              <div className="col-5 ml-3">
                {/* <input
                  type=""
                  class="form-control"
                  placeholder="Item name..."
                /> */}
                <select
                  className="form-control custom-select"
                  // id="inputGroupSelect01"
                >
                  <option selected>--CATAGORY--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="pt-2">
                <a href="#">
                  <h6 style={{ color: "#595" }}>( add new Catagory )</h6>
                </a>
              </div>
            </div>
            {/* --------------------------------- */}
            <div className="form-row m-2">
              <div className="col-3 pt-2">
                <h6 className="float-right">HSN Code</h6>
              </div>
              <div className="col-5 ml-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="HSN code..."
                />
              </div>
            </div>
            {/* --------------------------------- */}
            <div className="form-row m-2">
              <div className="col-3 pt-2">
                <h6 className="float-right">Unit</h6>
              </div>
              <div className="col-5 ml-3">
                <select
                  className="form-control custom-select"
                  // id="inputGroupSelect01"
                >
                  <option selected>--UNIT--</option>
                  <option value="1">unit 1</option>
                  <option value="2">unit 2</option>
                  <option value="3">unit 3</option>
                </select>
              </div>

              <div className="pt-2">
                <a href="#">
                  <h6 style={{ color: "#595" }}>( add new Unit )</h6>
                </a>
              </div>
            </div>
            {/* --------------------------------- */}
            <div className="form-row m-2">
              <div className="col-3 pt-2">
                <h6 className="float-right">Unit Price</h6>
              </div>
              <div className="col-5 ml-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Purchase price..."
                  min={0}
                />
              </div>
            </div>
            {/* --------------------------------- */}
            {/* <div className="form-row m-2">
              <div class="col-3 pt-2">
                <h6 className="float-right">Sale Price</h6>
              </div>
              <div class="col-5 ml-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Sale price..."
                />
              </div>
            </div> */}

            {/* --------------------------------- */}
            <div className="form-row m-2">
              <div className="col-3 pt-2">
                <h6 className="float-right">Tax</h6>
              </div>
              <div className="col-5 ml-3">
                <select
                  className="form-control custom-select"
                  // id="inputGroupSelect01"
                >
                  <option selected>--TAX--</option>
                  <option value="1">5% GST</option>
                  <option value="2">18% GST</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            {/* --------------------------------- */}
            <div className="form-row m-4 ">
              <div className="col-9 ">
                <button className="btn btn-primary btn-sm pl-5 pr-5 mr-5 float-right">
                  Add
                </button>
              </div>
            </div>
            {/* --------------------------------- */}
          </form>
        </div>
      </div>
    );
  };

  // add Text to catagories
  const addCat = () => {
    console.log();
  };

  const txch = (e) => {
    setText(e.target.value);
  };

  // Catagory--
  const Unit = () => {
    return (
      <div
        style={{ position: "relative" }}
        className="container m-auto pl-5 pr-5 "
      >
        <h3 style={titleText}>Unit</h3>
        <div className="row pl-5 pr-5 ml-5 mr-5 ">
          <button
            type="button"
            className="btn btn-outline-primary"
            data-toggle="modal"
            data-target="#example"
          >
            Add new Unit
          </button>

          <div
            className="modal fade "
            id="example"
            // tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog  modal-dialog-centered">
              <div className="modal-content">
                {/* <form> */}
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add New Unit
                  </h5>
                </div>
                <div className="modal-body">
                  {/* <form> */}
                  <div className="form-row m-2">
                    <h6 className="float-right">New unit name</h6>

                    <input
                      type="text"
                      name="cat_e"
                      className="form-control"
                      placeholder="enter new unit name..."
                      // readOnly
                      value={text}
                      onChange={(e) => {
                        console.log(e.target.value);
                        txch(e);
                        // setText(e.target.value);
                      }}
                    />
                  </div>
                  {/* </form> */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm pl-4 pr-4"
                    data-dismiss="modal"
                    // onClick={() => {
                    //   addUnit();
                    // }}
                  >
                    Add
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" pl-5 pr-5 ml-5 mr-5 m-2">
          <h5 style={titleText}>Unit Lists</h5>

          <div style={{ justifyContent: "center" }} className="row  m-2">
            <div
              styles={{ overflowY: "scroll" }}
              className="col-10"
              id="table table-responsive"
            >
              <table className="table table-striped  ">
                <thead>
                  <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Unit</th>

                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {units.map((item, i) => {
                    return (
                      <tr>
                        <td scope="row"> {i + 1} </td>

                        <td>{item.unit}</td>

                        <td>
                          <a
                            href="#"
                            onClick={() => {
                              alert("Edit->  id: " + item.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            onClick={() => {
                              alert("Remove->  id: " + item.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} color="#f00" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // Add Catagory--
  const Catagory = () => {
    return (
      <div
        style={{ position: "relative" }}
        className="container m-auto pl-5 pr-5 "
      >
        <h3 style={titleText}>Catagories</h3>
        <div className="row pl-5 pr-5 ml-5 mr-5 ">
          <button
            type="button"
            className="btn btn-outline-primary"
            data-toggle="modal"
            data-target="#example"
          >
            Add new catagory
          </button>

          <div
            className="modal fade "
            id="example"
            // tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog  modal-dialog-centered">
              <div className="modal-content">
                {/* <form> */}
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add New Catagory
                  </h5>
                </div>
                <div className="modal-body">
                  {/* <form> */}
                  <div className="form-row m-2">
                    <h6 className="float-right">New catagory name</h6>

                    <input
                      type="text"
                      name="cat_e"
                      className="form-control"
                      placeholder="enter new catagory name..."
                      // readOnly
                      value={text}
                      onChange={(e) => {
                        console.log(e.target.value);
                        txch(e);
                        // setText(e.target.value);
                      }}
                    />
                  </div>
                  {/* </form> */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm pl-4 pr-4"
                    data-dismiss="modal"
                    onClick={() => {
                      addCat();
                    }}
                  >
                    Add
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" pl-5 pr-5 ml-5 mr-5 m-2">
          <h5 style={titleText}>Catagory Lists</h5>

          <div style={{ justifyContent: "center" }} className="row  m-2">
            <div
              styles={{ overflowY: "scroll" }}
              className="col-10"
              id="table table-responsive"
            >
              <table className="table table-striped  ">
                <thead>
                  <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Catagory</th>

                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {catagories.map((item, i) => {
                    return (
                      <tr>
                        <td scope="row"> {i + 1} </td>

                        <td>{item.cat}</td>

                        <td>
                          <a
                            href="#"
                            onClick={() => {
                              alert("Edit->  id: " + item.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            onClick={() => {
                              alert("Remove->  id: " + item.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} color="#f00" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ul className="nav nav-tabs bg-dark" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <NavLink
            to="/store/itemlist"
            className="nav-link active"
            id="itemlist-tab"
            data-toggle="tab"
            // href="#itemlist"
            role="tab"
            aria-controls="itemlist"
            aria-selected="true"
          >
            {/* <NavLink to="/store/itemlist"> */}
            Item List
            {/* </NavLink> */}
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="addItem-tab"
            data-toggle="tab"
            // href="#additem"
            role="tab"
            aria-controls="additem"
            aria-selected="false"
          >
            {/* Add Item */}
            <NavLink to="/store/additem">Add List</NavLink>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="catlist-tab"
            data-toggle="tab"
            // href="#catlist"
            role="tab"
            aria-controls="catlist"
            aria-selected="false"
          >
            {/* Unit */}
            <NavLink to="/store/unit">Unit</NavLink>
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
            {/* Catagory */}
            <NavLink to="/store/catagory">Catagory</NavLink>
          </a>
        </li>
      </ul>

      {/* ============================================= */}
      <div className="tab-content" id="myTabContent">
        <div
          exact
          path="/store/itemlist"
          className="tab-pane fade show active"
          id="itemlist"
          role="tabpanel"
          aria-labelledby="itemlist-tab"
          style={{ backgroundColor: "#fff" }}
        >
          {/*  */}
          <Switch>
            <Route exact path="/store/itemlist">
              <ItemList />
            </Route>
            <Route exact path="/store/additem">
              <AddItem />
            </Route>
            <Route exact path="/store/catagory">
              <Catagory />
            </Route>
            <Route exact path="/store/unit">
              <Unit />
            </Route>
          </Switch>
        </div>
        {/*  */}

        {/* <Route exact path="/store/additem">
          <div
            className="tab-pane fade show active"
            id="itemlist"
            role="tabpanel"
            aria-labelledby="itemlist-tab"
            style={{ backgroundColor: "#fff" }}
          >
            <AddItem />
          </div>
        </Route>
        <Route exact path="/store/catagory">
          <div
            className="tab-pane fade show active"
            id="itemlist"
            role="tabpanel"
            aria-labelledby="itemlist-tab"
            style={{ backgroundColor: "#fff" }}
          >
            <Catagory />
          </div>
        </Route>
        <Route exact path="/store/unit">
          <div
            className="tab-pane fade show active"
            id="itemlist"
            role="tabpanel"
            aria-labelledby="itemlist-tab"
            style={{ backgroundColor: "#fff" }}
          >
            <Unit />
          </div>
        </Route> */}

        {/* -------------------------------------------- */}
        {/* 
            
       
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
          </div> */}
      </div>
    </>
  );
}

const titleText = {
  color: "#919191",
};

export default Store;
