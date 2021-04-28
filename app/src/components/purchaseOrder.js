import React, { useState } from "react";

// get our fontawesome imports


const PurchaseOrder = (props) => {
  // ###########  data  ################################
  const [selectedVendor, setSelectedVendor] = useState({
    id: "",
    vendorId: "",
    name: "-selected vendor-",
    vendor: {},
  });
  // ##################################################
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 6,
        }}
        className="container m-auto m-2  col-11 p-2"
      >
        <h3 style={titleText}>Purchase Order</h3>
      </div>

      {/*=============================== Vendor Details ====================================*/}

      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 6,
        }}
        className="container mt-2 col-11 p-2 "
      >
        {/* <div className="form-row m-1 mb-4">
          <div class="col-8 ">
            <h6 className="float-right pt-2">Order ID </h6>
          </div>
          <div class="col-3">
            <h4 style={{ color: "#0069d1" }} className="mt-0 ml-2">
              <strong>0000002</strong>
            </h4>
          </div>

          <div class="col-8 ">
            <h6 className="float-right pt-1">Date </h6>
          </div>
          <div class="col-3">
            <input type="date" class="form-control" />
          </div>
        </div> */}
        {/* ------------------------------- */}

        <div className="px-2 py-2 ">
          <div className="form-row m-1">
            <div className="col-2 ">
              <h6 className="float-right pt-1">Vendor name </h6>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Vendor name...."
                value={
                  selectedVendor.id !== "" &&
                  selectedVendor.vendor.firmDtls.firmName
                }
              />
            </div>
            {/* -- */}
            <div className="col-2 ml-3">
              <h6 className="float-right pt-2">Order ID </h6>
            </div>
            <div className="col-3">
              <h4 style={{ color: "#0069d1" }} className="mt-0 ml-2">
                <strong>0000002</strong>
              </h4>
            </div>
          </div>
          <div className="form-row m-1">
            <div className="col-2 ">
              <h6 className="float-right pt-1">Vendor ID </h6>
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Vendor ID....."
                value={selectedVendor.id !== "" && selectedVendor.vendor.id}
              />
            </div>
            {/* -- */}
            <p className=" mt-1 mx-1"> or </p>
            <a
              href="#"
              className="text-primary mt-1 pl-1"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              ( Choose )
            </a>
            {/* ------ */}

            {/* <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@getbootstrap"
            >
              Open modal for @getbootstrap
            </button> */}
            {/* ########################  vendor list modal ########################## */}
            <div
              className="modal fade"
              id="exampleModal"
              //   tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className=" modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header p-2">
                    <h5
                      style={{ textAlign: "center" }}
                      className="modal-title"
                      id="exampleModalLabel"
                    >
                      Vendor List
                    </h5>
                  </div>
                  <div className="modal-body p-1">
                    <div className="col-12">
                      {/* ************************************ */}
                      <div className="list-group" id="list-tab" role="tablist">
                        {props.data.vendorList.map((v, i) => {
                          return (
                            <a
                              key={i}
                              className="list-group-item list-group-item-action "
                              //   id="list-home-list"
                              data-toggle="list"
                              href=""
                              onClick={() => {
                                setSelectedVendor({
                                  id: i,
                                  vendorId: v.firmDtls.id,
                                  name: v.firmDtls.firmName,
                                  vendor: props.data.vendorList[i],
                                });
                              }}
                              role="tab"
                            >
                              {/* {i + 1}.{v.firmDtls.firmName}({v.id}) */}
                              {i + 1}.{v.firmDtls.firmName}({v.id})
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    {props.data.vendorList.length === 0 && (
                      <h6> - No data found - </h6>
                    )}
                    {/* ************************************ */}
                  </div>
                  <div className="modal-footer p-1">
                    <div className="row p-2 ">
                      <div className="col-10 m-auto">
                        <h6
                          style={{ textAlign: "center" }}
                          className="mr-5 pr-5"
                        >
                          {selectedVendor.name}
                        </h6>
                      </div>
                      <div className="col-1 mr-3">
                        <button
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-primary pl-2 pr-2 float-right"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -- */}
            <div className="col-2 ">
              <h6 className="float-right pt-1">Date </h6>
            </div>
            <div className="col-3">
              <input type="date" className="form-control" />
            </div>
          </div>

          <div className="form-row m-1">
            <div className="col-2 ">
              <h6 className="float-right pt-1">GST No. </h6>
            </div>
            <div className="col-3">
              <h5 style={{ color: "#20809e" }}>
                {selectedVendor.id !== "" && selectedVendor.vendor.firmDtls.gst}
              </h5>
            </div>
            {/* -- */}
          </div>

          <div className="form-row  m-1">
            <div className="col-2 ">
              <h6 className="float-right pt-1">City </h6>
            </div>
            <div className="col-3">
              <h5 style={{ color: "#20809e" }}>City..</h5>
            </div>
          </div>

          <div className="form-row  m-1">
            <div className="col-2 ">
              <h6 className="float-right pt-1">Mobile No. </h6>
            </div>
            <div className="col-3">
              <h5 style={{ color: "#20809e" }}>Mobile no</h5>
            </div>
          </div>

          <div className="form-row m-1">
            <div className="col-2 ">
              <h6 className="float-right pt-1">Email </h6>
            </div>
            <div className="col-3">
              <h5 style={{ color: "#20809e" }}>Email</h5>
            </div>
          </div>
        </div>
      </div>
      {/*=============================== Subject Details ====================================*/}
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 6,
        }}
        className="container mt-2 col-11 p-2 "
      >
        <div className="form-row  m-1">
          <div className="col-2 ">
            <h6 className="float-right pt-1">Subject </h6>
          </div>
          <div className="col-8">
            <input
              readOnly
              type="text"
              className="form-control"
              placeholder="Subject.."
            />
          </div>
        </div>
        <div className="form-row  m-1">
          <div className="col-2 ">
            <h6 className="float-right pt-1">Message </h6>
          </div>
          <div className="col-8">
            <textarea
              readOnly
              type="text"
              className="form-control"
              placeholder="Message.."
            />
          </div>
        </div>
      </div>
      {/*=============================== Item Details ====================================*/}
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 6,
        }}
        className="container mt-2 col-11 p-2 "
      >
        <h5 style={{ color: "#a4a4a4" }} className="px-2 pt-1 ">
          Item Details
        </h5>
        <hr />
        <div className=" pb-2">
          <div styles={{ overflowY: "scroll" }} id="table table-responsive">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Sl.No.</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Qtn.</th>
                  <th scope="col">Catagory</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>function</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="item.."
                      name="item"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="qtn.."
                      name="qtn"
                      min={1}
                    />
                  </td>
                  <td>
                    <select
                      className="form-control custom-select"
                      id="inputGroupSelect01"
                    >
                      <option selected value="">
                        --Select Catagory--
                      </option>
                      <option value="1">abc</option>
                      <option value="2">def</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const titleText = {
  color: "#919191",
  textAlign: "center",
};

const totalAmountStyle = "col-3 pt-1";
const totalAmountStyleS = "col-8";

const txt = { color: "#5eab00" };

export default PurchaseOrder;
