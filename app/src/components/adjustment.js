import React, { useState, useEffect } from "react";

// get our fontawesome imports
// import {} from "@fortawesome/free-solid-svg-icons";


// import axios from "axios";

const AdjustItem = (props) => {
  // ################   use effect  #######################

  //   useEffect(() => {
  //     fetch("/edit-item")
  //         .then()
  //     ;
  //   }, []);

  // ######################  data  #################################

  const actionTypes = [
    {
      value: "Add to stock",
    },
    {
      value: "Minus from stock",
    },
    {
      value: "Damaged",
    },
  ];

  const [selectedItemId, setSelectedItemId] = useState();
  // data
  const [stock, setStock] = useState({
    data: {
      itemId: "",
      action: "",
      adjQtn: "",
      mdfDate: "",
      remark: "",
      minQty: 0,
      totalQty: "",
      dmg: "",
    },
  });

  const [itemMaster, setItemMaster] = useState({
    data: {},
  });

  const [itemStock, setItemStock] = useState({
    data: {},
  });

  // #################################################################

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    stock.data.mdfDate = today;
    setStock({ data: stock.data });

    // console.log(today);
  }, []);
  // ########################  function  ##############################################################
  // reset field
  // const reset = () => {
  //   setItem("");
  //   setSelectedCatagory();
  //   setSelectedSubCatagory("");
  //   setHsn("");
  //   setUnit("");
  //   setUnitPrice();
  //   setTax();
  // };

  const handleQty = (e) => {
    // setUnitPrice(e.target.value);
    if (stock.data.action === "Damaged") {
      if (e.target.value > itemStock.data.totalActiveQty) {
        alert(
          `Damaged quantity should not be greater than Stock quantity : ${itemStock.data.totalActiveQty}`
        );
      }
    } else {
      stock.data.adjQtn = Number(e.target.value);
      setStock({ data: stock.data });
    }
  };

  // tax
  const handleAction = (e) => {
    // setAction(e.target.value);
    stock.data.action = e.target.value;
    stock.data.totalQty = itemStock.data.totalQty;
    stock.data.dmg = Number(itemStock.data.damage);

    setStock({ data: stock.data });
  };

  const handleRemark = (e) => {
    // setTax(e.target.value);
    // console.log(e.target.value);
    stock.data.remark = e.target.value;
    setStock({ data: stock.data });
  };

  const handleReOrder = (e) => {
    stock.data.minQty = Number(e.target.value);
    setStock({ data: stock.data });
  };

  // submit
  const handleOnSubmit = () => {
    props.func.handleAdjustStock(stock.data);
  };

  const getData = (id) => {
    fetch(`/get-item/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setItemMaster({ data: data.data });
        // console.log(data.data.id);
      });

    fetch(`/get-stock-item/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Stock data::::  ", data.data);
        // stock.data.totalQty = data.data.totalQty;
        // alert(data.data.totalQty);
        // setStock({ data: stock.data });
        setItemStock({ data: data.data });
        // console.log(data.data);
      });
  };

  const handleSelectItem = (e) => {
    if (e.target.value !== "") {
      // console.log(e.target.value);
      setSelectedItemId(e.target.value);
      stock.data.itemId = Number(e.target.value);
      setStock({ data: stock.data });
      getData(e.target.value);
    } else {
      setItemMaster({ data: {} });
    }
  };
  const handleSelectItemCode = (e) => {
    if (e.target.value !== "") {
      // console.log(e.target.value);
      setSelectedItemId(e.target.value);
      stock.data.itemId = Number(e.target.value);
      setStock({ data: stock.data });

      getData(e.target.value);
    } else {
      setItemMaster({ data: {} });
    }
  };

  // ######################################################################################

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 6,
        }}
        className="container m-auto ml-5 mr-5 pl-5 pr-5 col-10 p-2"
      >
        <div style={{ justifyContent: "center" }} className="row text-center">
          <h4 style={titleText}>Stock Adjustment</h4>
        </div>
        <hr className="m-0" />
        {/* ------------------------ */}

        <div className="form-row m-2">
          <div className="col-3 pt-2">
            <h6 className="float-right">Item</h6>
          </div>
          <div className="col-6 ml-3">
            <select
              required
              className="form-control custom-select"
              value={selectedItemId}
              onChange={handleSelectItem}
            >
              <option value="">--select item--</option>
              {props.data.itemList.map((v, i) => {
                return (
                  <option key={i} value={v.id}>
                    {v.itemName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="pt-2">
            <a href="/master-additem">
              <h6 style={{ color: "#aaddaa" }}>add new +</h6>
            </a>
          </div>
        </div>

        {/* ------------------------- */}
        <div className="form-row p-0 m-auto">
          <div className="col-12 m-auto pt-1">
            <h6 style={{ textAlign: "center", justifyContent: "center" }}>
              or
            </h6>
          </div>
        </div>

        {/* ------------------------ */}

        <div className="form-row m-1">
          <div className="col-3 pt-1">
            <h6 className="float-right">Item code</h6>
          </div>
          <div className="col-6 ml-3">
            <select
              required
              className="form-control custom-select"
              value={selectedItemId}
              onChange={handleSelectItemCode}
            >
              <option value="">--select item code--</option>
              {props.data.itemList.map((v, i) => {
                return (
                  <option key={i} value={v.id}>
                    {v.itemCode}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* ----------------- */}
      </div>

      {/* --------  item details  ------- */}

      {itemMaster.data.id ? (
        <div
          style={{
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: 6,
          }}
          className="container   col-10 p-2 mt-3"
        >
          <div style={{ justifyContent: "center" }} className="row text-center">
            <h5 style={titleText}>Selected item details</h5>
          </div>
          <div style={{ justifyContent: "center" }} className="p-2">
            {/* -------------------------------- */}

            {/* --------------------------------- */}

            <form onSubmit={handleOnSubmit}>
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Item Code</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Item id auto generated..."
                    value={itemMaster.data.itemCode}
                    style={{ color: "#0080f0", fontStyle: "bold" }}
                    // onChange={handleCode}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Item Name</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Item name..."
                    value={itemMaster.data.itemName}
                    // onChange={handleItem}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Catagory</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Category..."
                    value={itemMaster.data.itemCategoryName}
                    // onChange={handleHsn}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Sub Catagory</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Sub category..."
                    value={itemMaster.data.itemSubCategoryName}
                    // onChange={handleHsn}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">HSN Code</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="HSN code..."
                    value={itemMaster.data.hsn}
                    // onChange={handleHsn}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Unit</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Unit..."
                    min={0}
                    value={itemMaster.data.itemUnitName}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Unit Price (Rs.)</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="number"
                    className="form-control"
                    placeholder="Unit price..."
                    min={0}
                    value={itemMaster.data.itemRate}
                    // onChange={handleUnitPrice}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Applicable Tax</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Tax..."
                    min={0}
                    // value={itemMaster.data.itemTax}
                    value={String(itemMaster.data.itemTax + " % GST")}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2 pt-3">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Total stock</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    readOnly
                    type="number"
                    className="form-control"
                    placeholder="Total stock..."
                    min={0}
                    value={
                      itemStock.data.totalActiveQty
                        ? itemStock.data.totalActiveQty
                        : 0
                    }
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2 ">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Re-Order quantity</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    // required
                    // readOnly
                    type="number"
                    className="form-control"
                    placeholder="Quantity..."
                    min={0}
                    value={stock.data.minQty}
                    onChange={handleReOrder}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2 pt-3">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Action</h6>
                </div>
                <div className="col-6 ml-3">
                  <select
                    required
                    // readOnly
                    className="form-control custom-select"
                    // id="inputGroupSelect01"
                    value={stock.data.action}
                    onChange={handleAction}
                  >
                    <option value="">--Action type--</option>
                    {actionTypes.map((i, index) => {
                      return (
                        <option key={index} value={i.value}>
                          {i.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* --------------------------------- */}
              {/* {stock.data.action !== "" && ( */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">
                    {stock.data.action !== "Damaged" ? (
                      "Adjustment Quantity"
                    ) : (
                      <strong style={{ color: "#fa0044" }}>
                        {" "}
                        Damaged Quantity
                      </strong>
                    )}
                  </h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    required
                    readOnly={stock.data.action !== "" ? false : true}
                    type="number"
                    className="form-control"
                    placeholder="Quantity..."
                    min={0}
                    max={
                      stock.data.action === "Damaged"
                        ? itemStock.data.totalActiveQty
                        : 100000000
                    }
                    value={stock.data.adjQtn}
                    onChange={handleQty}
                  />
                </div>
              </div>
              {/* )} */}
              {/* --------------------------------- */}
              <div className="form-row m-2">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Remark</h6>
                </div>
                <div className="col-6 ml-3">
                  <textarea
                    // required
                    // readOnly
                    type="text"
                    className="form-control"
                    placeholder="Remark..."
                    min={0}
                    value={stock.data.remark}
                    onChange={handleRemark}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-2 pt-3">
                <div className="col-3 pt-2">
                  <h6 className="float-right">Modified date</h6>
                </div>
                <div className="col-6 ml-3">
                  <input
                    required
                    readOnly
                    type="date"
                    className="form-control"
                    min={0}
                    value={stock.data.mdfDate}
                    // onChange={handleMdfDate}
                  />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="form-row m-4">
                <div className="col-5 m-auto">
                  <button
                    type="submit"
                    // onClick={handleOnSubmit}
                    className="btn btn-primary btn-block ml-3"
                  >
                    Update
                  </button>
                </div>
              </div>
              {/* --------------------------------- */}
            </form>
          </div>
        </div>
      ) : (
        <h6
          style={{ color: "#aa0000", textAlign: "center" }}
          className="m-3 p-3"
        >
          * Please select item or item-code *
        </h6>
      )}
    </>
  );
};

const titleText = {
  color: "#919191",
  textAlign: "center",
};

export default AdjustItem;
