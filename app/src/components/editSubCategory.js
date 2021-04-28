import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubCatagory = (props) => {
  console.log(props.data.dataSet);
  // ######################  data  ############################################
  const [catText, setCatText] = useState(props.data.dataSet.subCategoryName);
  const [selectedCatagory, setSelectedCatagory] = useState(
    props.data.dataSet.categoryId
  );

  // ######################  function  ############################################

  // handle catagory text
  const handleCatText = (e) => {
    while (e.target.value !== '"') {
      setCatText(e.target.value);
    }
    // console.log(e.target.value);
  };

  // update sub catagory
  const handleAdd = () => {
    if (catText !== "") {
      const data = {
        id: Number(props.data.dataSet.id),
        categoryId: Number(selectedCatagory),
        subCategoryName: catText,
      };
      console.log(data);

      props.func.handleUpdate(data);
    } else {
      alert("Enter some valid sub catagory name!");
    }
  };

  const handleCatagory = (i) => {
    // console.log("categoryId:  ", i.target.value);
    setSelectedCatagory(i.target.value);
  };

  // #################################################################################
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 6,
        }}
        className="container m-auto m-3 p-3 col-9 p-3"
      >
        <h3 style={titleText}>Edit Sub-Catagory</h3>
        <hr />

        {/* <div className="row "> */}
        {/* ------------------------------------ */}
        <form
        // onSubmit={handleAdd}
        >
          <div className="form-row m-2 p-1">
            <div className="col-4 pt-2">
              <h6 className="float-right">Catagory</h6>
            </div>
            <div className="col-4 ml-2">
              <select
                required
                className="form-control custom-select"
                value={selectedCatagory}
                onChange={handleCatagory}
              >
                <option value="">--CATAGORY--</option>
                {props.data.categoryList.map((v, i) => {
                  return (
                    <option key={i} value={v.id}>
                      {v.categoryName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="pt-2 ml-2 ">
              <a href="/master-catagory">
                <h6 style={{ color: "#aaddaa" }}>add new +</h6>
              </a>
            </div>
          </div>
          {/* ------------------------------ */}
          {props.data.categoryList.length > 0 ? (
            <div className="form-row m-2">
              <div className="col-4 ">
                <h6 className="float-right">Sub Catagory</h6>
              </div>
              <div className="col-4 ml-2">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="new sub-catagory..."
                  value={catText}
                  onChange={handleCatText}
                />
              </div>

              <div className="col-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="btn btn-info mb-2"
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{ justifyContent: "center" }}
              className="row m-auto pt-2"
            >
              <a href="/master-catagory">
                <h6 style={{ color: "#dd5555" }}>
                  {" "}
                  * please add some category to add more sub-category *
                </h6>
              </a>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

const titleText = {
  color: "#919191",
  textAlign: "center",
};

export default SubCatagory;
