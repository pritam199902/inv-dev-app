import React from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------

function Purchase() {
  //---------------Component-----------

  // 1  customers status
  const PurStatus = () => {
    return <h1>Purchase Status</h1>;
  };
  // 2 customers--
  const PurList = () => {
    return <h1>Purchase List</h1>;
  };
  // 3 Add customers--
  const AddPur = () => {
    return <h1>Purchase Entry</h1>;
  };

  // // 4 customers order --
  // const CusOrderList = () => {
  //   return <h1>Customer Orders List</h1>;
  // };
  // // 5 customers order --
  // const AddCusOrder = () => {
  //   return <h1>Add Customer Orders </h1>;
  // };
  // 6 customers payment--
  const PurPayment = () => {
    return <h1>Payment</h1>;
  };

  return (
    <>
      <ul class="nav nav-tabs bg-dark" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="itemlist-tab"
            data-toggle="tab"
            href="#cusstatus"
            role="tab"
            aria-controls="itemlist"
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
            href="#cuslist"
            role="tab"
            aria-controls="cuslist"
            aria-selected="false"
          >
            Purchase List
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="addItem-tab"
            data-toggle="tab"
            href="#addcus"
            role="tab"
            aria-controls="addcus"
            aria-selected="false"
          >
            Purchase Entry
          </a>
        </li>
        {/* <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="catlist-tab"
            data-toggle="tab"
            href="#cusorderlist"
            role="tab"
            aria-controls="cusorderlist"
            aria-selected="false"
          >
            Order List
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="addCat-tab"
            data-toggle="tab"
            href="#addcusorder"
            role="tab"
            aria-controls="addcusorder"
            aria-selected="false"
          >
            Add Order
          </a>
        </li> */}
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
          id="cusstatus"
          role="tabpanel"
          aria-labelledby="cusstatus-tab"
          style={{ backgroundColor: "#fff" }}
        >
          <PurStatus />
        </div>
        <div
          class="tab-pane fade"
          id="cuslist"
          role="tabpanel"
          aria-labelledby="cuslist-tab"
        >
          <PurList />
        </div>
        <div
          class="tab-pane fade"
          id="addcus"
          role="tabpanel"
          aria-labelledby="addcus-tab"
        >
          <AddPur />
        </div>
        {/* <div
          class="tab-pane fade "
          id="cusorderlist"
          role="tabpanel"
          aria-labelledby="cusorderlist-tab"
        >
          <CusOrderList />
        </div>
        <div
          class="tab-pane fade "
          id="addcusorder"
          role="tabpanel"
          aria-labelledby="addcusorder-tab"
        >
          <AddCusOrder />
        </div> */}
        <div
          class="tab-pane fade "
          id="pay"
          role="tabpanel"
          aria-labelledby="pay-tab"
        >
          <PurPayment />
        </div>
      </div>
      {/* <h1>Store</h1> */}
    </>
  );
}

export default Purchase;
