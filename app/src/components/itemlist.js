import React, { useState } from "react";

// get our fontawesome imports
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditItem from "./editItem";

const ItemList = (props) => {
  // #################### Data ##########################################
  const [editData, setEditData] = useState({
    data: {
      show: false,
      dataSet: {},
    },
  });
  // #################### function ##########################################
  // delete---
  const handleDelete = (id) => {
    props.func.handleDeleteItem(id);
  };

  // edit---
  const handleEdit = (i) => {
    // props.func.handleEditItem(id);
    console.log(props.data.itemList[i]);
    editData.data.dataSet = {};

    editData.data.dataSet = props.data.itemList[i];
    editData.data.show = true;
    setEditData({ data: editData.data });

    // console.log(props.data.itemList[i]);
    // setEditData(true);
  };

  const handleActive = (id) => {
    props.func.handleActiveItem(id);
  };

  const handleUpdateItem = (data) => {
    console.log(data);
    props.func.handleUpdateItem(data);
    // console.log("updated");
    editData.data.show = false;
    editData.data.dataSet = {};
    setEditData({ data: editData.data });
  };

  const close = () => {
    editData.data.dataSet = {};
    editData.data.show = false;
    setEditData({ data: editData.data });
  };

  // ########################################################################
  return (
    <>
      {editData.data.show ? (
        <EditItem
          data={{
            dataSet: editData.data.dataSet,
            catagories: props.data.catagories,
            subCategories: props.data.subCategories,
            units: props.data.units,
            taxs: props.data.taxs,
            itemList: props.data.itemList,
          }}
          func={{
            handleUpdateItem: handleUpdateItem.bind(this),
            close: close.bind(),
          }}
        />
      ) : (
        <>
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
              // scrollBehavior: "auto",
              // overflowY: "scroll",
            }}
            className="container mt-2 p-1 pt-2 col-11"
          >
            <div
              className="row m-2"
              style={{ justifyContent: "space-between" }}
            >
              <h5 style={titleText} className="ml-2">
                Item Lists <span style={{ color: "#00f500" }}>( ACTIVE )</span>
              </h5>
              <div>
                {/* <form className="form-inline "> */}
                {/* <div className="form-inline ">
              <select
                required
                className="form-control custom-select mr-1"
                // value={selectedSearchItem}
                // onChange={handleSearch}
              >
                <option value="">Search..</option>
                {props.data.itemList.map((v, i) => {
                  return (
                    <option key={i} value={v.id}>
                      {v.itemName} ({v.itemCode})
                    </option>
                  );
                })}
              </select> 
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
            </div> */}
                {/* </form> */}
              </div>
            </div>
            {/* {deletedItem.flag && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Item <strong>{deletedItem.item}</strong> , has been deleted!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )} */}
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
                    <th scope="col">SubCatagory</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Unit price</th>
                    <th scope="col">Tax</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  {props.data.itemList.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td> {i + 1} </td>
                        <td>{item.itemCode}</td>
                        <td>{item.itemName}</td>
                        <td>{item.itemCategoryName}</td>
                        <td>{item.itemSubCategoryName}</td>
                        <td>{item.itemUnit}</td>
                        <td>{item.itemRate}</td>
                        <td>{item.itemTax}%</td>
                        <td>
                          <a
                            href="#edit"
                            className="tooltip-test"
                            title={"Edit " + item.itemName}
                            data-placement="top"
                            onClick={() => {
                              handleEdit(i);
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </a>
                        </td>
                        <td>
                          <a
                            href="#delete"
                            className="tooltip-test"
                            title={"Delete " + item.itemName}
                            data-placement="top"
                            onClick={() => {
                              handleDelete(item.id);
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
              {props.data.itemList.length === 0 && (
                // <div className="row m-auto bg-warning">
                <h4 style={{ textAlign: "center", color: "#a6a6a6" }}>
                  - No Data Found -
                </h4>
                // </div>
              )}
            </div>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
              // scrollBehavior: "auto",
              // overflowY: "scroll",
            }}
            className="container mt-2 p-1 pt-2 col-11"
          >
            <div
              className="row m-2 "
              style={{ justifyContent: "space-between" }}
            >
              <h5 style={titleText} className="ml-2">
                Item Lists{" "}
                <span style={{ color: "#f50000" }}>( DEACTIVE )</span>{" "}
              </h5>
              <div>
                {/* <form className="form-inline "> */}
                {/* <div className="form-inline ">
              <select
                required
                className="form-control custom-select mr-1"
                // value={selectedSearchItem}
                // onChange={handleSearch}
              >
                <option value="">Search..</option>
                {props.data.deactiveItemList.map((v, i) => {
                  return (
                    <option key={i} value={v.id}>
                      {v.itemName} ({v.itemCode})
                    </option>
                  );
                })}
              </select>

              <input
                className="form-control mr-2 sm-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-outline-success btn-sm my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
            </div> */}
                {/* </form> */}
              </div>
            </div>
            {/* {deletedItem.flag && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Item <strong>{deletedItem.item}</strong> , has been deleted!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )} */}
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
                    <th scope="col">SubCatagory</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Unit price</th>
                    <th scope="col">Tax</th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  {props.data.deactiveItemList.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td> {i + 1} </td>
                        <td>{item.itemCode}</td>
                        <td>{item.itemName}</td>
                        <td>{item.itemCategoryName}</td>
                        <td>{item.itemSubCategoryName}</td>
                        <td>{item.itemUnitName}</td>
                        <td>{item.itemRate}</td>
                        <td>{item.itemTax}%</td>
                        <td>
                          <a
                            href="#active"
                            onClick={() => handleActive(item.id)}
                            className="btn btn-outline-success p-0 pl-1 pr-1"
                          >
                            Active
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {props.data.deactiveItemList.length === 0 && (
                // <div className="row m-auto bg-warning">
                <h4 style={{ textAlign: "center", color: "#a6a6a6" }}>
                  - No Data Found -
                </h4>
                // </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const titleText = {
  color: "#919191",
};

export default ItemList;
