import React, { useState } from "react";

// get our fontawesome imports
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditVendor from "./editVendor";

const VendorList = (props) => {
  // #################### Data ##########################################
  // const [deletedVendor, setDeletedVendor] = useState({
  //   flag: false,
  //   vendor: "",
  // });
  const [update, setUpdate] = useState({ data: { show: false, dataSet: {} } });

  // #################### function ##########################################
  //   delete---
  const handleDelete = (id) => {
    props.func.handleDeleteVendor(id);
  };

  // edit---
  const handleEdit = (i) => {
    // props.func.handleEditVendor(id);
    // props.data.vendorList
    update.data.show = true;
    update.data.dataSet = props.data.vendorList[i];
    setUpdate({ data: update.data });
  };

  // update ---
  const handleUpdate = (data) => {
    props.func.handleUpdateVendor(data);
    update.data.show = false;
    update.data.dataSet = {};
    setUpdate({ data: update.data });
  };

  const handleActive = (id) => {
    props.func.handleActiveVendor(id);
    // setDeletedVendor({ flag: true, vendor: vendor });
  };

  const close = () => {
    update.data.dataSet = {};
    update.data.show = false;
    setUpdate({ data: update.data });
  };

  // ########################################################################
  return (
    <>
      {update.data.show ? (
        <EditVendor
          data={{
            dataSet: update.data.dataSet,
          }}
          func={{
            handleUpdate: handleUpdate.bind(this),
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
            className="container m-auto m-3 p-1 col-12"
          >
            <div
              className="row m-1 ml-4"
              style={{ justifyContent: "space-between" }}
            >
              <h5 style={titleText}>
                All Vendors <span style={{ color: "#00f500" }}>( ACTIVE )</span>{" "}
              </h5>
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
            {/* ########################## */}
            {/* {deletedVendor.flag && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Vendor <strong>{deletedVendor.vendor}</strong> , has been deleted!
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
            {/* ############################# */}
            <div
              styles={{ overflowY: "scroll" }}
              className="mt-0"
              id="table table-responsive"
            >
              {props.data.vendorList.length > 0 ? (
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">Sl</th>
                      <th scope="col">Id</th>
                      <th scope="col">Vendor</th>
                      <th scope="col">GST</th>
                      <th scope="col">City</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Email</th>
                      <th scope="col">Bank</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.data.vendorList.map((vendor, i) => {
                      return (
                        <tr key={i}>
                          <td> {i + 1} </td>
                          <td>{vendor.vendorCode}</td>
                          <td>{vendor.vendorName}</td>
                          <td>{vendor.gst}</td>
                          <td>{vendor.city}</td>
                          <td>{vendor.mobile}</td>
                          <td>{vendor.email}</td>
                          <td>{vendor.bankName}</td>
                          <td>
                            {/* ---------------- */}

                            <a
                              href="#edit"
                              className="tooltip-test"
                              title={"Edit " + vendor.vendorName}
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
                              title={"Delete " + vendor.vendorName}
                              data-placement="top"
                              onClick={() => {
                                handleDelete(vendor.id);
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
              ) : (
                // <div className="row m-auto bg-warning">
                <h6 style={{ textAlign: "center", color: "#a6a6a6" }}>
                  - No Data Found -
                </h6>
                // </div>
              )}
            </div>
          </div>
          {/* deactive list */}

          {/* ################################################################################ */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
              // scrollBehavior: "auto",
              // overflowY: "scroll",
            }}
            className="container mt-3 p-1 col-12"
          >
            <div
              className="row m-1 ml-4"
              style={{ justifyContent: "space-between" }}
            >
              <h5 style={titleText}>
                All Vendors{" "}
                <span style={{ color: "#f50000" }}>( Deactive )</span>{" "}
              </h5>
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
            {/* ########################## */}
            {/* {deletedVendor.flag && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Vendor <strong>{deletedVendor.vendor}</strong> , has been deleted!
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
            {/* ############################# */}
            <div
              styles={{ overflowY: "scroll" }}
              className="mt-0"
              id="table table-responsive"
            >
              {props.data.deactiveVendorList.length > 0 ? (
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">Sl</th>
                      <th scope="col">Id</th>
                      <th scope="col">Vendor</th>
                      <th scope="col">GST</th>
                      <th scope="col">City</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Email</th>
                      <th scope="col">Bank</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.data.deactiveVendorList.map((vendor, i) => {
                      return (
                        <tr key={i} style={{ color: "#a60000" }}>
                          <td> {i + 1} </td>
                          <td>{vendor.vendorCode}</td>
                          <td>{vendor.vendorName}</td>
                          <td>{vendor.gst}</td>
                          <td>{vendor.city}</td>
                          <td>{vendor.mobile}</td>
                          <td>{vendor.email}</td>
                          <td>{vendor.bankName}</td>
                          <td>
                            <a
                              href="#active"
                              onClick={() => handleActive(vendor.id)}
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
              ) : (
                // <div className="row m-auto bg-warning">
                <h6 style={{ textAlign: "center", color: "#a6a6a6" }}>
                  - No Data Found -
                </h6>
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

export default VendorList;
