import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditSubCategory from "./editSubCategory";

const SubCatagory = (props) => {
  // ######################  data  ############################################
  const [catText, setCatText] = useState("");
  const [selectedCatagory, setSelectedCatagory] = useState();

  const [update, setUpdate] = useState({ data: { show: false, dataSet: {} } });

  // ######################  function  ############################################

  // handle catagory text
  const handleCatText = (e) => {
    setCatText(e.target.value);
    console.log(e.target.value);
  };

  // add catagory
  const handleAdd = () => {
    if (catText !== "") {
      const data = {
        id: catText,
        categoryId: selectedCatagory,
        subCategoryName: catText,
        categoryName: "",
      };

      props.func.handleAddSubCategory(data);
    } else {
      alert("Enter some valid sub catagory name!");
    }
  };

  // delete catagory------------
  const handleDelete = (i) => {
    props.func.handleDeleteSubCategory(i);
  };

  // edit catagory
  const handleEdit = (i) => {
    // props.func.handleEditSubCategory(i);
    update.data.show = true;
    update.data.dataSet = props.data.subCategoryList[i];
    setUpdate({ data: update.data });
  };

  // update subcatagory
  const handleUpdate = (data) => {
    props.func.handleUpdateSubCatagory(data);
    update.data.show = false;
    update.data.dataSet = {};
    setUpdate({ data: update.data });
  };

  // active catagory
  const handleActive = (i) => {
    console.log(i);
    props.func.handleActiveSubCategory(i);
  };

  const handleCatagory = (i) => {
    console.log("categoryId:  ", i.target.value);
    setSelectedCatagory(i.target.value);
  };

  // #################################################################################
  return (
    <>
      {update.data.show ? (
        <EditSubCategory
          data={{
            dataSet: update.data.dataSet,
            categoryList: props.data.categoryList,
          }}
          func={{
            handleUpdate: handleUpdate.bind(this),
          }}
        />
      ) : (
        <>
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
            }}
            className="container m-auto m-3 p-3 col-9 p-3"
          >
            <h3 style={titleText}>Sub Catagory</h3>
            <hr />

            {/* <div className="row "> */}
            {/* ------------------------------------ */}
            <form onSubmit={handleAdd}>
              <div className="form-row m-2">
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
                  <div className="col-4 pt-2">
                    <h6 className="float-right">New Sub Catagory</h6>
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
                      type="submit"
                      // onClick={handleAdd}
                      className="btn btn-primary mb-2"
                    >
                      Add
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

            {/* ------------------------------------ */}
          </div>
          {/* </div> */}
          {/* active list--------------------- */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
            }}
            className="container m-auto col-9"
          >
            <div className="p-1 m-1 ">
              <h5 style={titleText}>
                Sub-Catagory Lists{" "}
                <span style={{ color: "#00f500" }}>( ACTIVE )</span>{" "}
              </h5>

              <div style={{ justifyContent: "center" }} className="row  m-1">
                <div
                  styles={{ overflowY: "scroll" }}
                  className="col-md-12"
                  id="table table-responsive"
                >
                  <table className="table table-striped  p-0 ">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Catagory</th>
                        <th scope="col">Sub-Catagory</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.subCategoryList.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td> {i + 1} </td>

                            <td>{item.categoryName}</td>
                            <td>{item.subCategoryName}</td>

                            <td>
                              <a
                                href="#edit"
                                className="tooltip-test"
                                title={"Edit " + item.cat}
                                data-placement="top"
                                onClick={() => handleEdit(i)}
                              >
                                <FontAwesomeIcon icon={faEdit} color="#00f" />
                              </a>
                            </td>
                            <td>
                              <a
                                href="#delete"
                                onClick={() => handleDelete(item.id)}
                              >
                                <FontAwesomeIcon icon={faTrash} color="#f00" />
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {props.data.subCategoryList.length === 0 && (
                    // <div className="row m-auto bg-warning">
                    <h4 style={{ textAlign: "center", color: "#a6a6a6" }}>
                      - No Data Found -
                    </h4>
                    // </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Deactive list-------------------------- */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
            }}
            className="container m-auto col-9"
          >
            <div className=" p-1 m-1 ">
              <h5 style={titleText}>
                Sub-Catagory Lists{" "}
                <span style={{ color: "#f50000" }}>( DEACTIVE )</span>{" "}
              </h5>

              <div style={{ justifyContent: "center" }} className="row  m-1">
                <div
                  styles={{ overflowY: "scroll" }}
                  className="col-md-12"
                  id="table table-responsive"
                >
                  <table className="table table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Catagory</th>
                        <th scope="col">Sub-Catagory</th>
                        <th scope="col"> </th>
                        {/* <th scope="col"></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.deactiveSubCategoryList.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td> {i + 1} </td>

                            <td>{item.categoryName}</td>
                            <td>{item.subCategoryName}</td>

                            {/* <td>
                          <a
                            class="tooltip-test"
                            title={"Edit " + item.cat}
                            data-placement="top"
                            onClick={() => handleEdit(i)}
                          >
                            <FontAwesomeIcon icon={faEdit} color="#00f" />
                          </a>
                        </td> */}
                            <td>
                              <button
                                type="button"
                                onClick={() => handleActive(item.id)}
                                className="btn btn-outline-success p-0 pl-1 pr-1"
                              >
                                {/* <FontAwesomeIcon
                              icon={faCheckSquare}
                              color="#00a506"
                            /> */}
                                Active
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {props.data.deactiveSubCategoryList.length === 0 && (
                    // <div className="row m-auto bg-warning">
                    <h4 style={{ textAlign: "center", color: "#a6a6a6" }}>
                      - No Data Found -
                    </h4>
                    // </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const titleText = {
  color: "#919191",
  textAlign: "center",
};

export default SubCatagory;
