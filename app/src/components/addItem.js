import React, { useState, useEffect } from "react";

// get our fontawesome imports
// import {} from "@fortawesome/free-solid-svg-icons";

const AddItem = (props) => {
  // ######################  data  ###############################################################
  // new item added flag
  const [addedItem, setAddedItem] = useState("");

  // data
  const [code, setCode] = useState("");
  const [item, setItem] = useState("");
  const [selectedCatagory, setSelectedCatagory] = useState();
  const [selectedSubCatagory, setSelectedSubCatagory] = useState("");
  const [hsn, setHsn] = useState("");
  const [unit, setUnit] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [tax, setTax] = useState();

  // #################################################################

  useEffect(() => {
    fetch("/item-code-generate")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const lastItemId = data.id;
        // console.log(lastItemId);

        const iCode = "ITEM00" + (Number(lastItemId) + 1);

        setCode(iCode);
      });
  }, []);
  // ########################  function  ##############################################################
  // reset field
  const reset = () => {
    setItem("");
    setSelectedCatagory();
    setSelectedSubCatagory("");
    setHsn("");
    setUnit("");
    setUnitPrice();
    setTax();
    setAddedItem("");

    // setAddedItem({ flag: false, item: "" });
  };

  // code
  // const handleCode = (e) => {
  //   setCode(e.target.value);
  // };

  // item
  const handleItem = (e) => {
    setItem(e.target.value);
  };

  // catagory
  const handleCatagory = (e) => {
    setSelectedCatagory(e.target.value);
    console.log(e.target.value);

    // setSubCatList({list: []})
  };

  // sub catagory
  const handleSubCatagory = (e) => {
    setSelectedSubCatagory(e.target.value);
  };

  // HSN
  const handleHsn = (e) => {
    setHsn(e.target.value);
  };

  // unit
  const handleUnit = (e) => {
    setUnit(e.target.value);
  };

  // unit price
  const handleUnitPrice = (e) => {
    setUnitPrice(e.target.value);
  };

  // tax
  const handleTax = (e) => {
    setTax(e.target.value);
  };

  // submit
  const handleOnSubmit = () => {
    if (code && item && selectedCatagory && hsn && unit && unitPrice && tax) {
      const data = {
        code: code,
        itemName: item,
        category: selectedCatagory,
        subCategory: selectedSubCatagory,
        HSNcode: hsn,
        unit: unit,
        unitPrice: unitPrice,
        tax: tax,
      };
      setAddedItem(item);
      props.func.handleAddItem(data);

      //  fetch("/data", {
      //   method: "POST",
      //   // mode: "no-cors",
      //   body: JSON.stringify({ data }),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then((response) => response)
      //   .then((json) => console.log(json))
      //   .catch((err) => console.log(err));

      // reset();
    } else {
      alert(" Please fill all the field !");
    }
  };

  // ######################################################################################

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 6,
      }}
      className="container m-auto ml-5 mr-5 pl-5 pr-5 col-10 p-2"
    >
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h3 style={titleText}>Add Item</h3>
        </div>
        <div className="col-4">
          <a href="/master-itemlist">
            <h6 style={{ color: "#a6a6a6" }} className="float-right pt-2">
              Total item{" "}
              <span
                style={{ color: "#fff" }}
                class="badge badge-pill badge-warning p-2"
              >
                {props.data.itemCount}
              </span>
            </h6>
          </a>
        </div>
      </div>
      <hr className="m-0" />
      <div style={{ justifyContent: "center" }} className="p-2">
        {/* --------------------------------- */}
        {/* alert--------------------- */}
        {addedItem.flag && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            New item <strong> {addedItem} </strong> , has been added !
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {/* <div className="form-row m-2">
          <div className="col-3 pt-2">
            <h6 className="float-right">Date</h6>
          </div>
          <div className="col-6 ml-3">
            <input type="date" class="form-control" placeholder="00/00/00" />
          </div>
        </div> */}
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
                value={code}
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
                required
                type="text"
                className="form-control"
                placeholder="Item name..."
                value={item}
                onChange={handleItem}
              />
            </div>
          </div>

          {/* --------------------------------- */}
          <div className="form-row m-2">
            <div className="col-3 pt-2">
              <h6 className="float-right">Catagory</h6>
            </div>
            <div className="col-6 ml-3">
              <select
                required
                className="form-control custom-select"
                value={selectedCatagory}
                onChange={handleCatagory}
              >
                <option value="">--CATAGORY--</option>
                {props.data.catagories.map((v, i) => {
                  return (
                    <option key={i} value={v.id}>
                      {v.categoryName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="pt-2">
              <a href="/master-catagory">
                <h6 style={{ color: "#aaddaa" }}>add new +</h6>
              </a>
            </div>
          </div>
          {/* --------------------------------- */}
          <div className="form-row m-2">
            <div className="col-3 pt-2">
              <h6 className="float-right">Sub Catagory</h6>
            </div>
            <div className="col-6 ml-3">
              <select
                required
                className="form-control custom-select"
                value={selectedSubCatagory}
                onChange={handleSubCatagory}
              >
                <option value="">--SUB CATAGORY--</option>
                {props.data.subCategories.map((sc, i) => {
                  return (
                    Number(sc.categoryId) === Number(selectedCatagory) && (
                      <option key={i} value={sc.id}>
                        {sc.subCategoryName}
                      </option>
                    )
                  );
                })}
              </select>
            </div>
            <div className="pt-2">
              <a href="/master-sub-catagory">
                <h6 style={{ color: "#aaddaa" }}>add new +</h6>
              </a>
            </div>
          </div>
          {/* --------------------------------- */}
          <div className="form-row m-2">
            <div className="col-3 pt-2">
              <h6 className="float-right">HSN Code</h6>
            </div>
            <div className="col-6 ml-3">
              <input
                required
                type="text"
                className="form-control"
                placeholder="HSN code..."
                value={hsn}
                onChange={handleHsn}
              />
            </div>
          </div>
          {/* --------------------------------- */}
          <div className="form-row m-2">
            <div className="col-3 pt-2">
              <h6 className="float-right">Unit</h6>
            </div>
            <div className="col-6 ml-3">
              <select
                required
                className="form-control custom-select "
                value={unit}
                onChange={handleUnit}
                // id="inputGroupSelect01"
              >
                <option value="">--UNIT--</option>
                {props.data.units.map((v, i) => {
                  return (
                    <option key={i} value={v.id}>
                      {v.unitName}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pt-2">
              <a href="/master-unit">
                <h6 style={{ color: "#aaddaa" }}>add new +</h6>
              </a>
            </div>
          </div>
          {/* --------------------------------- */}
          <div className="form-row m-2">
            <div className="col-3 pt-2">
              <h6 className="float-right">Unit Price (Rs.)</h6>
            </div>
            <div className="col-6 ml-3">
              <input
                required
                type="number"
                className="form-control"
                placeholder="Unit price..."
                min={0}
                value={unitPrice}
                onChange={handleUnitPrice}
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
              <h6 className="float-right">Applicable Tax</h6>
            </div>
            <div className="col-6 ml-3">
              <select
                required
                className="form-control custom-select"
                // id="inputGroupSelect01"
                value={tax}
                onChange={handleTax}
              >
                <option value="">--TAX--</option>
                {props.data.taxs.map((v, i) => {
                  return (
                    <option key={i} value={v.value}>
                      {v.tax}
                    </option>
                  );
                })}
              </select>
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
                Save
              </button>
            </div>
          </div>
          {/* --------------------------------- */}
        </form>
      </div>
    </div>
  );
};

const titleText = {
  color: "#919191",
  textAlign: "center",
};

export default AddItem;
