import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditCategory from "./editCategory";

const Catagory = (props) => {
  // ######################  data  ############################################
  const [catText, setCatText] = useState("");
  const [update, setUpdate] = useState({ data: { show: false, dataSet: {} } });

  // ######################  function  ############################################

  // handle catagory text
  const handleCatText = (e) => {
    setCatText(e.target.value);
  };

  // add catagory
  const handleAdd = () => {
    if (catText !== "") {
      const data = {
        cat: catText,
      };

      // ----------------
      props.func.handleAddCatagory(data);

      // temp
      setCatText("");
    } else {
      alert("Enter some valid catagory name!");
    }
  };

  // delete catagory
  const handleDelete = (id) => {
    props.func.handleDeleteCatagory(id);
  };

  // edit catagory
  const handleEdit = (i) => {
    update.data.show = true;
    update.data.dataSet = props.data.catagoryList[i];
    setUpdate({ data: update.data });

    console.log(props.data.catagoryList[i]);

    // props.func.handleEditCatagory(i);
  };

  // update catagory
  const handleUpdate = (data) => {
    props.func.handleUpdateCatagory(data);
    update.data.show = false;
    update.data.dataSet = {};
    setUpdate({ data: update.data });
  };

  // active catagory
  const handleActive = (i) => {
    // console.log(i);
    props.func.handleActiveCatagory(i);
  };

  // #################################################################################
  return (
    <>
      {update.data.show ? (
        <EditCategory
          data={{
            dataSet: update.data.dataSet,
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
            <h3 style={titleText}>Catagory</h3>
            <hr />
            <div className="row ">
              {/* ------------------------------------ */}
              <form className=" row m-auto " onSubmit={handleAdd}>
                <div className="col-4">
                  <h6 className="m-2">New catagory</h6>
                </div>
                <div className="col-6">
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="input"
                    placeholder="new catagory name..."
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
              </form>

              {/* ------------------------------------ */}
            </div>
          </div>

          {/* List Active------------------------------- */}
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
                Category Lists{" "}
                <span style={{ color: "#00f500" }}>( ACTIVE )</span>{" "}
              </h5>

              <div style={{ justifyContent: "center" }} className="row  m-1">
                <div
                  styles={{ overflowY: "scroll" }}
                  className="col"
                  id="table table-responsive"
                >
                  <table className="table table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Category name</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.catagoryList.map((item, i) => {
                        return (
                          <tr className="p-0" key={i}>
                            <td> {i + 1} </td>

                            <td>{item.categoryName}</td>

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
                  {props.data.catagoryList.length === 0 && (
                    // <div className="row m-auto bg-warning">
                    <h6 style={{ textAlign: "center", color: "#a6a6a6" }}>
                      - No Data Found -
                    </h6>
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
            <div className=" p-1 m-2 ">
              <h5 style={titleText}>
                Catagory Lists{" "}
                <span style={{ color: "#f50000" }}>( DEACTIVE )</span>{" "}
              </h5>

              <div style={{ justifyContent: "center" }} className="row  m-1">
                <div
                  styles={{ overflowY: "scroll" }}
                  className="col"
                  id="table table-responsive"
                >
                  <table className="table table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Catagory</th>
                        <th scope="col"></th>
                        {/* <th scope="col"></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.deactiveCatagoryList.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td style={{ color: "#aa5555" }}> {i + 1} </td>
                            <td style={{ color: "#ad5555" }}>
                              {item.categoryName}
                            </td>
                            <td>
                              <a
                                href="#active"
                                onClick={() => handleActive(item.id)}
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
                  {props.data.deactiveCatagoryList.length === 0 && (
                    // <div className="row m-auto bg-warning">
                    <h6 style={{ textAlign: "center", color: "#a6a6a6" }}>
                      - No Data Found -
                    </h6>
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

export default Catagory;
