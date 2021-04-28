import React from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------

function Supplier() {
  // fuunstion
  const vendorRegisterData = () => {};

  //---------------Component-----------

  // 1  customers status
  const SupStatus = () => {
    return <h1>Vendor Status</h1>;
  };
  // 2 customers--
  const SupList = () => {
    return <h1>Vendor List</h1>;
  };
  // 3 Add customers--

  const AddSup = () => {
    return (
      <div style={{ position: "relative" }} className="container pb-5">
        <h3 style={titleText}>Catagories</h3>
        <form onSubmit={vendorRegisterData}>
          {/* ==================================================================== */}
          <div className="form-row p-2">
            <div class="col-1 pt-1">
              <h6 className="float-left">Name of Firm/Company</h6>
            </div>
            <div class="col-10 ml-5">
              <input
                type="text"
                class="form-control"
                placeholder="Firm/Company's Name"
              />
            </div>
          </div>
          {/* ==================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">Catagory</h6>
            </div>
            <div class="col-4 ml-5">
              <select
                class="form-control custom-select"
                id="inputGroupSelect01"
              >
                <option selected>--Select--</option>
                <option value="1">Public Limited Co</option>
                <option value="2">Partnership Co</option>
                <option value="3">Preprietorship</option>
                <option value="4">Govt. Sector</option>
                <option value="5">Other</option>
              </select>
            </div>
            <div class="col-1 pt-1">
              <h6 className="float-left">Country</h6>
            </div>
            <div class="col-4 ml-5">
              <select
                class="form-control custom-select"
                id="inputGroupSelect01"
              >
                <option selected>--Select--</option>
                <option value="1">India</option>
                <option value="2">zyx</option>
                <option value="3">abc</option>
                <option value="4">pqr</option>
                <option value="5">Other</option>
              </select>
            </div>
          </div>
          {/* =================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">GST no.</h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="number"
                class="form-control"
                placeholder="Enter GST number"
              />
            </div>
            <div class="col-1 pt-1">
              <h6 className="float-left">PAN no.</h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="number"
                class="form-control"
                placeholder="Enter PAN number"
              />
            </div>
          </div>
          {/* =========================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">Status of Company</h6>
            </div>
            <div class="col-4 ml-5">
              <select
                class="form-control custom-select"
                id="inputGroupSelect01"
              >
                <option selected>--Select--</option>
                <option value="1">Manufacturer</option>
                <option value="2">Authorised Dealer</option>
                <option value="3">Stockist/Trader</option>
                <option value="4">Importer/Indian Agent</option>
                <option value="5">Service Provider</option>
              </select>
            </div>
          </div>
          {/* ================================================================== */}
          {/* ================================================================== */}
          <div className="form-row pt-5">
            <div class="col-2 pt-1">
              <h6 className="float-left">Name of Contact Person</h6>
            </div>
            <div class="col-4 ml-8">
              <input
                type="text"
                class="form-control"
                placeholder="Contact Person's Name"
              />
            </div>
            <div class="col-2 pt-1">
              <h6 className="float-left">Designation of Contact Person</h6>
            </div>
            <div class="col-4 ml-8">
              <input
                type="text"
                class="form-control"
                placeholder="Contact Person's Designation"
              />
            </div>
          </div>
          {/* ================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">Address</h6>
            </div>
            <div class="col-4 ml-5">
              <textarea
                type="text"
                class="form-control"
                aria-label="With textarea"
                placeholder="Imput Address"
              />
            </div>
            <div class="col-1 pt-1">
              <h6 className="float-left">City</h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="text"
                class="form-control"
                placeholder="Enter City"
              />
            </div>
          </div>
          {/* ================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">State</h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="text"
                class="form-control"
                placeholder="Enter State"
              />
            </div>
            <div class="col-1 pt-1">
              <h6 className="float-left">PIN</h6>
            </div>
            <div class="col-4 ml-5">
              <input type="text" class="form-control" placeholder="Enter PIN" />
            </div>
          </div>
          {/* ================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">Mobile No.</h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="number"
                class="form-control"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div class="col-1 pt-1">
              <h6 className="float-left">Email</h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
            </div>
          </div>
          {/* ================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">Website</h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Website"
              />
            </div>
          </div>
          {/* ================================================================== */}
          <div className="form-row pt-1">
            <div class="col-1 pt-1">
              <h6 className="float-left">
                Type of Items Interested for Supply/service
              </h6>
            </div>
            <div class="col-4 ml-5">
              <input
                type="text"
                readOnly
                class="form-control"
                data-toggle="modal"
                data-target="#exampleModal"
                value="--select--"
                data-whatever="@mdo"
              />
              {/* -- MODAL -- */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Choose Item
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="1"
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          abc
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="2"
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          xyz
                        </label>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ justifyContent: "center" }} className="row m-2 ">
            <div className="col-md-6">
              <button type="submit" class="btn btn-primary  btn-block">
                Save
              </button>
            </div>
          </div>
          <div style={{ justifyContent: "center" }} className="row m-2 ">
            <div className="col-md-6">
              <button
                type="submit"
                class="btn btn-outline-secondary  btn-block"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  // 4 customers order --
  const SupOrderList = () => {
    return <h1>Vendor Orders List</h1>;
  };
  // 5 customers order --
  const AddSupOrder = () => {
    return <h1>Add Vendor Orders </h1>;
  };
  // 6 customers payment--
  const SupPayment = () => {
    return <h1>Vendor payment</h1>;
  };

  return (
    <>
      <ul class="nav nav-tabs bg-dark" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="itemlist-tab"
            data-toggle="tab"
            href="#status"
            role="tab"
            aria-controls="status"
            aria-selected="true"
          >
            Status
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="addItem-tab"
            data-toggle="tab"
            href="#suplist"
            role="tab"
            aria-controls="cuslist"
            aria-selected="false"
          >
            Vendor List
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="addItem-tab"
            data-toggle="tab"
            href="#addsup"
            role="tab"
            aria-controls="addsup"
            aria-selected="false"
          >
            Add Vendor
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="catlist-tab"
            data-toggle="tab"
            href="#suporderlist"
            role="tab"
            aria-controls="cusorderlist"
            aria-selected="false"
          >
            Purchase list
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="addCat-tab"
            data-toggle="tab"
            href="#addsuporder"
            role="tab"
            aria-controls="addsuporder"
            aria-selected="false"
          >
            Purchase Entry
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="addCat-tab"
            data-toggle="tab"
            href="#pay"
            role="tab"
            aria-controls="pay"
            aria-selected="false"
          >
            Payment
          </a>
        </li>
      </ul>
      {/* -------------List----------------- */}
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="status"
          role="tabpanel"
          aria-labelledby="status-tab"
          style={{ backgroundColor: "#fff" }}
        >
          <SupStatus />
        </div>
        <div
          class="tab-pane fade"
          id="suplist"
          role="tabpanel"
          aria-labelledby="suplist-tab"
        >
          <SupList />
        </div>
        <div
          class="tab-pane fade"
          id="addsup"
          role="tabpanel"
          aria-labelledby="addcus-tab"
        >
          <AddSup />
        </div>
        <div
          class="tab-pane fade "
          id="suporderlist"
          role="tabpanel"
          aria-labelledby="suporderlist-tab"
        >
          <SupOrderList />
        </div>
        <div
          class="tab-pane fade "
          id="addsuporder"
          role="tabpanel"
          aria-labelledby="addsuporder-tab"
        >
          <AddSupOrder />
        </div>
        <div
          class="tab-pane fade "
          id="pay"
          role="tabpanel"
          aria-labelledby="pay-tab"
        >
          <SupPayment />
        </div>
      </div>
      {/* <h1>Store</h1> */}
    </>
  );
}

const titleText = {
  color: "#919191",
};

export default Supplier;
