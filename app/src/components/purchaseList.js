import React, { useState } from "react";

// get our fontawesome imports
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditPurchase from "./editPurchaseEntry";

const PurchaseList = (props) => {
  // #################### Data ##########################################
  const [update, setUpdate] = useState({ data: { show: false, dataSet: {} } });

  // #################### function ##########################################
  //   // delete---
  //   const handleDelete = (id) => {
  //     props.func.handleDeleteItem(id);
  //   };

  // edit---
  const handleEdit = (i) => {
    // props.func.handleEditItem(id);
    update.data.show = true;
    update.data.dataSet = props.data.purchaseList[i];
    setUpdate({ data: update.data });
  };

  const handleupdate = (id) => {
    props.func.handleUpdatePurchase(id);
    update.data.dataSet = {};
    update.data.show = false;
    setUpdate({ data: update.data });
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
        <EditPurchase
          data={{
            dataSet: update.data.dataSet,
            vendorList: props.data.vendorList,
            itemList: props.data.itemList,
          }}
          func={{
            handleUpdate: handleupdate.bind(this),
            close: close.bind(this),
          }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: 6,
            // scrollBehavior: "auto",
            // overflowY: "scroll",
          }}
          className="container mt-2 p-1 pt-2 col-12"
        >
          <div className="row m-2" style={{ justifyContent: "space-between" }}>
            <h5 style={titleText} className="ml-2">
              Purchase Lists
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

          <div
            styles={{ overflowY: "scroll" }}
            className="ml-3 mr-3"
            id="table table-responsive"
          >
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Bill Id</th>
                  <th scope="col">Vendor</th>
                  <th scope="col">Date</th>
                  <th scope="col">Nett(Rs.)</th>
                  <th scope="col">Bill type</th>
                  <th scope="col">Paid(Rs.)</th>
                  <th scope="col">Due(Rs.)</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                {props.data.purchaseList.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td> {i + 1} </td>
                      <td>{item.billId}</td>
                      <td>{item.vendorName}</td>
                      <td>{item.purchaseDate.split("T", 1)}</td>
                      <td>{item.netAmount}</td>
                      <td>{item.billType}</td>
                      <td>{item.paidAmount}</td>
                      <td>{item.dueAmount}</td>
                      <td>
                        <a
                          href="#view"
                          className="tooltip-test"
                          title={"View "}
                          data-placement="top"
                          onClick={() => {
                            // handleEdit(i);
                          }}
                        >
                          <FontAwesomeIcon icon={faEye} color="#aaa" />
                        </a>
                      </td>
                      <td>
                        <a
                          href="#edit"
                          className="tooltip-test"
                          title={"Edit "}
                          data-placement="top"
                          onClick={() => {
                            handleEdit(i);
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {props.data.purchaseList.length === 0 && (
              // <div className="row m-auto bg-warning">
              <h6 style={{ textAlign: "center", color: "#a6a6a6" }}>
                - No Data Found -
              </h6>
              // </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const titleText = {
  color: "#919191",
};

export default PurchaseList;
