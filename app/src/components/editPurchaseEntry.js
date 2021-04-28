import React, { useState, useEffect } from "react";

// get our fontawesome imports
import {
  faTrash,
  faPlus,
  faRedoAlt,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditPurchaseEntry = (props) => {
  const { dataSet } = props.data;
  console.log(dataSet);
  const billIns = {
    id: dataSet.id,
    billId: dataSet.billId,
    billDate: dataSet.purchaseDate.split("T", 1),
    vendorId: Number(dataSet.vendorId),
    itemData: [
      {
        id: "",

        itemId: "",
        itemCode: "",
        itemName: "",
        itemRate: 0.0,
        itemTax: 0,
        qty: 1,
        total: 0,
      },
    ],
    subTotal: Number(dataSet.subTotalAmount),
    totalTaxAmt: Number(dataSet.totalTaxAmount),
    totalAmt: Number(dataSet.netAmount),
    pkgAmt: Number(dataSet.pkgAmount),
    dlvAmt: Number(dataSet.dlvAmount),
    billType: dataSet.billType,
    billPaid: Number(dataSet.paidAmount),
    billDue: Number(dataSet.dueAmount),
  };

  const [purBillData, setPurBillData] = useState({
    data: billIns,
  });

  // ############################ data ###############################################
  // const [count, setCount] = useState(0);

  const billType = [
    {
      value: "cash",
      text: "CASH",
    },
    {
      value: "credit",
      text: "CREDIT",
    },
    {
      value: "cheque",
      text: "CHEQUE",
    },
    {
      value: "online",
      text: "ONLINE",
    },
    // {
    //   value: "slpit",
    //   text: "SPLIT",
    // },
  ];

  const data = {
    // id: count + 1,
    // sl: "",
    itemId: "",
    itemCode: "",
    itemName: "",
    itemRate: 0.0,
    itemTax: 0,

    qty: 0,
    total: 0,
  };

  // const [selectedItemId, setSelectedItemId] =()

  // ########################## Handle Functions ##########################################################

  const handleAddItem = () => {
    // alert("value:  " + count);

    // setCount(count + 1);
    purBillData.data.itemData = [...purBillData.data.itemData, data];
    setPurBillData({ data: purBillData.data });
  };

  //   delete item from list
  const handleDeleteItem = (i) => {
    purBillData.data.itemData.splice(i, 1);

    handleAmount(-1);
  };

  // // reset
  // const handleResetItem = () => {
  //   setPurBillData({ data: billIns });
  //   // handleAmount(-1);
  // };

  //  code
  const handleSelectItemCode = (e, i) => {
    if (e.target.value !== "") {
      fetch(`/get-item/${Number(e.target.value)}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Item:  ", data.data);

          const { id, itemCode, itemName, itemRate, itemTax } = data.data;

          // purBillData.data.itemData = [...data.data];
          // setPurBillData({ data: purBillData.data });

          // purBillData.data.itemData[i].sl = e.target.value;
          purBillData.data.itemData[i].itemId = id;
          purBillData.data.itemData[i].itemCode = itemCode;
          purBillData.data.itemData[i].itemName = itemName;
          purBillData.data.itemData[i].itemTax = Number(itemTax);
          purBillData.data.itemData[i].itemRate = Number(itemRate);
          purBillData.data.itemData[i].qty = 1;

          setPurBillData({ data: purBillData.data });
          handleAmount(i);
        });
    } else {
      purBillData.data.itemData[i] = data;
      setPurBillData({ data: purBillData.data });
      handleAmount(i);
    }
  };

  //  item
  const handleSelectItem = (e, i) => {
    if (e.target.value !== "") {
      fetch(`/get-item/${Number(e.target.value)}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Item:  ", data.data);

          const { id, itemCode, itemName, itemRate, itemTax } = data.data;

          // purBillData.data.itemData = [...data.data];
          // setPurBillData({ data: purBillData.data });

          // purBillData.data.itemData[i].sl = e.target.value;
          purBillData.data.itemData[i].itemId = id;
          purBillData.data.itemData[i].itemCode = itemCode;
          purBillData.data.itemData[i].itemName = itemName;
          purBillData.data.itemData[i].itemTax = Number(itemTax);
          purBillData.data.itemData[i].itemRate = Number(itemRate);
          purBillData.data.itemData[i].qty = 1;

          setPurBillData({ data: purBillData.data });
          handleAmount(i);
        });
    } else {
      purBillData.data.itemData[i] = data;
      setPurBillData({ data: purBillData.data });
      handleAmount(i);
    }
  };

  //  handle amount--------------------
  const handleAmount = (i) => {
    // purBillData.data.itemData[i].rate = e.target.value;

    if (i !== -1) {
      purBillData.data.itemData[i].total = Number(
        Number(purBillData.data.itemData[i].itemRate) *
          Number(purBillData.data.itemData[i].qty)
      );
    }

    var sub = 0;
    var total = 0;
    var taxTotal = 0;
    purBillData.data.itemData.map((v) => {
      return (
        (sub += Number(v.total)),
        (taxTotal += Number(v.total) * (Number(v.itemTax) / 100))
        // (total += Number(v.total) + Number(taxTotal))
      );
    });

    purBillData.data.subTotal = Number(sub).toFixed(2);
    purBillData.data.totalTaxAmt = Number(taxTotal).toFixed(2);
    purBillData.data.totalAmt = Number(
      sub +
        taxTotal +
        Number(purBillData.data.pkgAmt) +
        Number(purBillData.data.dlvAmt)
    ).toFixed(2);

    purBillData.data.billDue = Number(
      Number(purBillData.data.totalAmt) - Number(purBillData.data.billPaid)
    ).toFixed(2);

    setPurBillData({ data: purBillData.data });
    // calculate();
  };

  //  Quantity
  const handleQtyText = (e, i) => {
    purBillData.data.itemData[i].qty = Number(e.target.value);
    // purBillData.data.itemData[i].total =
    //   Number(e.target.value) * purBillData.data.itemData[i].rate;

    // var sub = 0;
    // var total = 0;
    // var taxTotal = 0;
    // purBillData.data.itemData.map((v) => {
    //   sub += v.total;
    //   taxTotal += v.total * (v.tax / 100);
    //   total += v.total;
    // });
    // purBillData.data.subTotal = sub;
    // purBillData.data.totalTaxAmt = taxTotal;
    // purBillData.data.totalAmt = total + taxTotal;

    // purBillData.data.billDue =
    //   purBillData.data.totalAmt - purBillData.data.billPaid;

    setPurBillData({ data: purBillData.data });

    handleAmount(i);
  };

  // bill type
  const [billTypeSelected, setBillTypeSelected] = useState();
  const selectedValue = (v) => {
    if (v.target.value !== "") {
      purBillData.data.billType = v.target.value;

      if (
        v.target.value === "online" ||
        v.target.value === "cheque" ||
        v.target.value === "credit"
      ) {
        purBillData.data.billPaid = purBillData.data.totalAmt;
        purBillData.data.billDue =
          purBillData.data.totalAmt - purBillData.data.billPaid;
      } else if (v.target.value === "cash") {
        purBillData.data.billPaid = 0;
        purBillData.data.billDue =
          purBillData.data.totalAmt - purBillData.data.billPaid;
      }

      // purBillData.data.billDue =
      //   purBillData.data.totalAmt - purBillData.data.billPaid;
      setPurBillData({ data: purBillData.data });
    } else {
      alert("Please select a bill type");
    }
  };

  const handlePkgAmt = (e) => {
    purBillData.data.pkgAmt = Number(e.target.value);

    handleAmount(-1);
    // ----------
    // var total = 0;
    // purBillData.data.itemData.map((v) => {
    //   return (total += v.total);
    // });
    // purBillData.data.totalAmt =
    //   total + purBillData.data.pkgAmt + purBillData.data.dlvAmt;
    // purBillData.data.billDue =
    //   purBillData.data.totalAmt - purBillData.data.billPaid;

    setPurBillData({ data: purBillData.data });
  };

  // delivery charge
  const handleDlvAmt = (e) => {
    purBillData.data.dlvAmt = Number(e.target.value);
    handleAmount(-1);
    // -------
    // var total = 0;
    // purBillData.data.itemData.map((v) => {
    //   return (total += v.total);
    // });
    // purBillData.data.totalAmt =
    //   total + purBillData.data.dlvAmt + purBillData.data.pkgAmt;
    // purBillData.data.billDue =
    //   purBillData.data.totalAmt - purBillData.data.billPaid;

    setPurBillData({ data: purBillData.data });
  };

  const handleCashPaidByVendor = (e) => {
    purBillData.data.billPaid = e.target.value;
    purBillData.data.billDue =
      purBillData.data.totalAmt - purBillData.data.billPaid;

    setPurBillData({ data: purBillData.data });
  };

  const [selectedVendorId, setSelectedVendorId] = useState(
    Number(dataSet.vendorId)
  );
  const [vendorMaster, setVendorMaster] = useState({
    data: {},
  });

  const handleSelectVendor = (e) => {
    if (e.target.value !== "") {
      setSelectedVendorId(e.target.value);
      getData(e.target.value);
      purBillData.data.vendorId = e.target.value;
      setPurBillData({ data: purBillData.data });
    } else {
      setVendorMaster({ data: {} });
    }
  };

  const handleSelectVendorCode = (e) => {
    if (e.target.value !== "") {
      setSelectedVendorId(e.target.value);
      getData(e.target.value);
      purBillData.data.vendorId = e.target.value;
      setPurBillData({ data: purBillData.data });
    } else {
      setVendorMaster({ data: {} });
    }
  };

  const handleDate = (e) => {
    console.log(e.target.value);
    purBillData.data.billDate = e.target.value;
    setPurBillData({ data: purBillData.data });
  };

  const getData = (id) => {
    fetch(`/get-vendor/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setVendorMaster({ data: data.data });
        // console.log(data.data.id);
      });
  };

  const handleSubmit = () => {
    // console.log(setPurBillData);
    props.func.handleUpdate(purBillData.data);
  };

  const handleClose = () => {
    props.func.close();
  };

  // #################################################################

  useEffect(() => {
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // var yyyy = today.getFullYear();
    // today = yyyy + "-" + mm + "-" + dd;
    // purBillData.data.billDate = today;
    // setPurBillData({ data: purBillData.data });

    // console.log(today);

    fetch(`/get-purchase-item/${props.data.dataSet.billId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Item List:  ", data.data);
        purBillData.data.itemData = [...data.data];
        // handleAmount(-1);
        // setCount(data.data.length - 1);
        setPurBillData({ data: purBillData.data });
      });
    // console.log(props.data);
    getData(dataSet.vendorId);
  }, []);

  // #####################################################################################
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
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h5 style={titleText}>Update Purchase Entry</h5>
          </div>
          <div className="col-4">
            <a href="#close" onClick={handleClose}>
              <h3
                style={{ color: "#a6a6a6" }}
                className="float-right pt-2 pr-2"
              >
                <FontAwesomeIcon icon={faTimes} color="#f00" />
              </h3>
            </a>
          </div>
        </div>
      </div>
      {/* +++++++++++++++++++++++++ Vendor details Section +++++++++++++++++++++++++ */}
      <form
      // onSubmit={handleSubmit}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: 6,
          }}
          className="container mt-2 col-11 p-2 "
        >
          <h5 style={{ color: "#a4a4a4" }} className="px-2 pt-1 ">
            Vendor details
          </h5>
          <hr />

          {/* ------------- details --------------- */}
          <div className="px-2 pb-2">
            {/* ============================= */}
            <div className="form-row">
              {/* --------------------------- */}
              <div className="col-2 ">
                <h6 className="float-right pt-1">Bill no.</h6>
              </div>
              <div className="col-3">
                <input
                  style={{ color: "#33dd33" }}
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="Bill no.."
                  value={purBillData.data.billId}
                />
              </div>
              <div className="col-2 ">
                <h6 className="float-right pt-1">Bill date</h6>
              </div>
              <div className="col-3">
                <input
                  type="date"
                  className="form-control"
                  placeholder="00/00/00"
                  value={purBillData.data.billDate}
                  onChange={handleDate}
                />
              </div>
              {/* ----------------------- */}
            </div>
            {/* ================================================================== */}

            <div className="form-row pt-4">
              {/* --------- supplier name-------------------- */}
              <div className="col-2 ">
                <h6 className="float-right pt-1">Vendor name</h6>
              </div>
              <div className="col-8">
                {/* <input
                type="text"
                class="form-control"
                placeholder="Vendor name..."
              /> */}
                <select
                  required
                  className="form-control custom-select"
                  value={selectedVendorId}
                  onChange={handleSelectVendor}
                >
                  <option value="">--select vendor--</option>
                  {props.data.vendorList.map((v, i) => {
                    return (
                      <option key={i} value={v.id}>
                        {v.vendorName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <a className="pt-2 pl-2" href="/master-vendor">
                <h6 style={{ color: "#aaddaa" }}>add new +</h6>
              </a>
            </div>

            {/* /--------------supplier code----------------------- */}
            <div className="form-row pt-1">
              <div className="col-2 ">
                <h6 className="float-right pt-2">Vendor code</h6>
              </div>
              <div className="col-4">
                {/* <input
                type="text"
                class="form-control"
                placeholder="Vendor ID..."
              /> */}
                <select
                  required
                  className="form-control custom-select"
                  value={selectedVendorId}
                  onChange={handleSelectVendorCode}
                >
                  <option value="">--select code--</option>
                  {props.data.vendorList.map((v, i) => {
                    return (
                      <option key={i} value={v.id}>
                        {v.vendorCode}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* -------------GST---------- */}

              <div className="col-1 ">
                <h6 className="float-right pt-2">GST</h6>
              </div>
              <div className="col-3">
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="GST no..."
                  value={vendorMaster.data.gst ? vendorMaster.data.gst : ""}
                />
              </div>
            </div>
            <div className="form-row pt-1">
              <div className="col-2 ">
                <h6 className="float-right pt-2">City</h6>
              </div>
              <div className="col-4">
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="City..."
                  value={vendorMaster.data.city ? vendorMaster.data.city : ""}
                />
              </div>

              {/* -------------GST---------- */}

              <div className="col-1 ">
                <h6 className="float-right pt-2">Mobile</h6>
              </div>
              <div className="col-3">
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  placeholder="Mobile no..."
                  value={
                    vendorMaster.data.mobile ? vendorMaster.data.mobile : ""
                  }
                />
              </div>
            </div>

            {/* ----------------------- */}
          </div>
        </div>

        {/* =================================================================================== */}
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

          {/* ------------- details --------------- */}
          <div className=" pb-2">
            <div styles={{ overflowY: "scroll" }} id="table table-responsive">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Code</th>
                    <th scope="col">Item</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Qnt</th>
                    <th scope="col">Tax</th>
                    <th scope="col">Sub total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="p-0">
                  {purBillData.data.itemData.map((itemDtl, i) => {
                    // console.log(itemDtl);
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          {/* <input
                          type="text"
                          class="form-control"
                          placeholder="code.."
                          name="code"
                          value={itemDtl.itemId}
                          onChange={(e) => handleCodeText(e, i)}
                        /> */}
                          <select
                            required
                            className="form-control custom-select"
                            value={itemDtl.itemId}
                            onChange={(e) => {
                              handleSelectItemCode(e, i);
                            }}
                          >
                            <option value=""></option>
                            {props.data.itemList.map((v, i) => {
                              return (
                                <option key={i} value={v.id}>
                                  {v.itemCode}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                        <td>
                          {/* <input
                          type="text"
                          class="form-control"
                          placeholder="item.."
                          name="item"
                          value={itemDtl.item}
                          onChange={(e) => handleItemText(e, i)}
                        /> */}
                          <select
                            required
                            className="form-control custom-select"
                            value={itemDtl.itemId}
                            onChange={(e) => handleSelectItem(e, i)}
                          >
                            <option value=""></option>
                            {props.data.itemList.map((v, i) => {
                              return (
                                <option key={i} value={v.id}>
                                  {v.itemName}
                                </option>
                              );
                            })}
                          </select>
                        </td>

                        <td>
                          {/* <input
                          readOnly
                          type="number"
                          className="form-control"
                          placeholder="rate.."
                          name="qnt"
                          min={1}
                          value={itemDtl.itemRate}
                          onChange={(e) => handleRateText(e, i)}
                        /> */}
                          {itemDtl.itemRate}
                        </td>
                        <td>
                          <input
                            // readOnly
                            type="number"
                            className="form-control"
                            placeholder="qty.."
                            name="qty"
                            min={1}
                            value={itemDtl.qty}
                            onChange={(e) =>
                              itemDtl.itemId !== ""
                                ? handleQtyText(e, i)
                                : alert("* Please choose an item *")
                            }
                          />
                        </td>

                        <td>
                          {itemDtl.itemTax + "%"}
                          {/* <input
                          readOnly
                          type="text"
                          className="form-control"
                          placeholder="tax.."
                          name="item"
                          value={itemDtl.itemTax + "% GST"}
                          // onChange={(e) => handleItemText(e, i)}
                        /> */}
                        </td>

                        <td>
                          {itemDtl.total}
                          {/* <input
                          readOnly
                          type="text"
                          className="form-control"
                          placeholder="total.."
                          name="item"
                          value={itemDtl.total}
                          // onChange={(e) => handleItemText(e, i)}
                        /> */}
                        </td>

                        <td>
                          {purBillData.data.itemData.length > 1 && (
                            <a
                              href="#delete"
                              onClick={() => {
                                handleDeleteItem(i);
                              }}
                            >
                              <FontAwesomeIcon icon={faTrash} color="#f00" />
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <hr></hr>
              <div className="row">
                <button
                  className="btn btn-sm btn-outline-success m-auto"
                  onClick={handleAddItem}
                >
                  <FontAwesomeIcon icon={faPlus} color="#0f0" /> Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================= total Ammount and Tax details =========================== */}

        <div
          style={{
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: 6,
          }}
          className="container mt-2 col-11 p-2"
        >
          <h5 style={{ color: "#a4a4a4" }} className="pl-2 pt-1 ">
            Amount and Tax Details
          </h5>
          <hr />

          {/* ----------------------- TOTAL , TAX , Details  ect-------------------------- */}
          <div className="form-row pt-1">
            {/* ************************************** */}

            <div className="col-2">
              <h6 className="float-right pt-2">Sub Total</h6>
            </div>
            <div className="col-3">
              <input
                readOnly
                type="number"
                className="form-control"
                name="subTotal"
                placeholder="Rs.."
                min={0}
                value={purBillData.data.subTotal}
              />
            </div>
            {/* __________ */}
            <div className={totalAmountStyle}>
              <h6 className="float-right pt-2">Packaging Charge</h6>
            </div>
            <div className="col-3">
              <input
                type="number"
                className="form-control"
                name="pkgCharge"
                placeholder="Rs.."
                min={0}
                value={purBillData.data.pkgAmt}
                onChange={handlePkgAmt}
              />
            </div>
          </div>
          <div className="form-row pt-1">
            <div className="col-2">
              <h6 className="float-right pt-2">Total Tax Amount</h6>
            </div>
            <div className="col-3">
              <input
                readOnly
                type="number"
                className="form-control"
                name="totalTax"
                placeholder="Rs.."
                min={0}
                value={purBillData.data.totalTaxAmt}
              />
            </div>
            <div className={totalAmountStyle}>
              <h6 className="float-right pt-2">Delivery Charge</h6>
            </div>
            <div className="col-3">
              <input
                type="number"
                className="form-control"
                name="dlvCharge"
                placeholder="Rs.."
                min={0}
                value={purBillData.data.dlvAmt}
                onChange={handleDlvAmt}
              />
            </div>
          </div>
          {/* $$$$$$$$$$$$$$$$$$$$$$$$ */}
          <div className="form-row pt-1">
            <div className="col-2">
              <h6 className="float-right pt-2">Total After Tax</h6>
            </div>
            <div className="col-3">
              <input
                readOnly
                type="number"
                className="form-control"
                name="totalWithTax"
                placeholder="Rs.."
                value={purBillData.data.totalAmt}
              />
            </div>
            <div className={totalAmountStyle}>
              <h6 style={{ color: "#0b5edb" }} className="float-right pt-2">
                Nett Amount
              </h6>
            </div>
            <div className="col-3">
              <input
                readOnly
                type="number"
                className="form-control"
                name="nettAmt"
                placeholder="Rs.."
                min={0}
                value={purBillData.data.totalAmt}
              />
            </div>
          </div>
          {/* $$$$$$$$$$$$$$$$$$$$$$$$ */}
          <div className="form-row pt-1 ">
            <div className="col-2 ">
              <h5 style={{ color: "#fa5555" }} className="float-right pt-3">
                Rs.
              </h5>
            </div>
            <div className="col-3 ">
              <h2
                style={{
                  color: purBillData.data.billDue === 0 ? "#55fa55" : "#fa5555",
                  textAlign: "center",
                }}
              >
                <strong> {purBillData.data.totalAmt} </strong>
              </h2>
            </div>

            {/* _____ */}

            <div className={totalAmountStyle}>
              <h6 className="float-right pt-3">Bill Type</h6>
            </div>
            <div className="col-3 pt-3">
              <select
                required
                className="form-control custom-select"
                id="inputGroupSelect01"
                value={purBillData.data.billType}
                onChange={(v, i) => {
                  selectedValue(v);
                }}
              >
                <option value="">--Bill Type--</option>
                {billType.map((data, i) => {
                  return (
                    <option key={i} value={data.value}>
                      {data.text}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* ---- */}

          {/* ############# Rendering Entry component according to billtype choosen ################### */}
          {/* ------- CASH----- */}
          {purBillData.data.billType === "cash" && (
            <>
              <div className="form-row pt-1">
                <div className={totalAmountStyleS}>
                  <h6 style={txt} className="float-right pt-2">
                    Total Cash Amount (Rs.)
                  </h6>
                </div>
                <div className="col-3">
                  <input
                    readOnly
                    type="number"
                    className="form-control"
                    name="cashAmt"
                    placeholder="Rs.."
                    value={purBillData.data.totalAmt}
                  />
                </div>
              </div>
              {/*  */}

              <div className="form-row pt-1">
                <div className={totalAmountStyleS}>
                  <h6 style={txt} className="float-right pt-2">
                    Cash Paid By Me(Rs.)
                  </h6>
                </div>
                <div className="col-3">
                  <input
                    type="number"
                    className="form-control"
                    name="cashGiven"
                    placeholder="Rs.."
                    min={0}
                    value={purBillData.data.billPaid}
                    onChange={handleCashPaidByVendor}
                  />
                </div>
              </div>
              {/* ----------------- */}

              {purBillData.data.totalAmt - purBillData.data.billPaid === 0 &&
              purBillData.data.totalAmt !== 0 ? (
                <div className="form-row pt-1">
                  <div className="col-11">
                    <h4
                      style={{ color: "#33ff33" }}
                      className="float-right pt-3"
                    >
                      <strong>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#0f0"
                          style={{ marginRight: 5 }}
                        />
                        Paid Successfully !
                      </strong>
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="form-row pt-1">
                  <div className={totalAmountStyleS}>
                    {purBillData.data.billDue >= 0 ? (
                      <h6
                        style={{ color: "#e8b600" }}
                        className="float-right pt-2"
                      >
                        Cash Due (Rs.)
                      </h6>
                    ) : (
                      <h6
                        style={{ color: "#ff4444" }}
                        className="float-right pt-2"
                      >
                        Cash Extra Paid By Me (Rs.)
                      </h6>
                    )}
                  </div>
                  <div className="col-3">
                    <input
                      style={{
                        color: purBillData.data.billDue < 0 && "#ff1111",
                      }}
                      readOnly
                      type="number"
                      className="form-control"
                      name="cashAmt"
                      placeholder="Rs.."
                      value={
                        purBillData.data.billDue < 0
                          ? Math.abs(purBillData.data.billDue)
                          : purBillData.data.billDue
                      }
                      // onChange={()=>{}}
                    />
                  </div>
                </div>
              )}
            </>
          )}
          {/* ------- CHEQUE ----- */}
          {purBillData.data.billType === "cheque" && (
            <>
              <div className="form-row pt-1">
                <div className={totalAmountStyleS}>
                  <h6 style={txt} className="float-right pt-2">
                    Total Cheque Amount (Rs.)
                  </h6>
                </div>
                <div className="col-3">
                  <input
                    readOnly
                    type="number"
                    className="form-control"
                    name="chequeAmt"
                    placeholder="Rs.."
                    value={purBillData.data.totalAmt}
                  />
                </div>
              </div>
            </>
          )}
          {/* ------- CREDIT ----- */}
          {purBillData.data.billType === "credit" && (
            <>
              <div className="form-row pt-1">
                <div className={totalAmountStyleS}>
                  <h6 style={txt} className="float-right pt-2">
                    Total Credit Amount (Rs.)
                  </h6>
                </div>
                <div className="col-3">
                  <input
                    readOnly
                    type="number"
                    className="form-control"
                    name="creditAmt"
                    placeholder="Rs.."
                    value={purBillData.data.totalAmt}
                  />
                </div>
              </div>
            </>
          )}
          {/* ------- ONLINE ----- */}
          {purBillData.data.billType === "online" && (
            <>
              <div className="form-row pt-1">
                <div className={totalAmountStyleS}>
                  <h6 style={txt} className="float-right pt-2">
                    Total Online Amount (Rs.)
                  </h6>
                </div>
                <div className="col-3">
                  <input
                    readOnly
                    type="number"
                    className="form-control"
                    name="onlineAmt"
                    placeholder="Rs.."
                    value={purBillData.data.totalAmt}
                  />
                </div>
              </div>
            </>
          )}

          {/* -- nett-- */}
          {/* <div className="form-row pt-2">
          <div className={totalAmountStyleS}>
            <h6 style={{ color: "#0b5edb" }} className="float-right pt-2">
              Nett Amount (Rs.)
            </h6>
          </div>
          <div class="col-3">
            <input
              readOnly
              type="number"
              class="form-control"
              name="nettAmt"
              placeholder="Rs.."
            />
          </div>
        </div> */}
          {/* -------------------------------------------------- */}
          <hr />
          <div style={{ justifyContent: "center" }} className="row m-2">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-info  btn-block"
                onClick={handleSubmit}
              >
                Update Bill
              </button>
            </div>
          </div>
        </div>
      </form>
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

export default EditPurchaseEntry;
