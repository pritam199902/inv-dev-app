import React, { useState } from "react";

// get our fontawesome imports
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditUnit from "./editUnit";

const Unit = (props) => {
  // ######################  data  ############################################
  const [uText, setUText] = useState("");
  const [update, setUpdate] = useState({ data: { show: false, dataSet: {} } });

  // ######################  function  ############################################
  // handle catagory text
  const handleUText = (e) => {
    setUText(e.target.value);
  };

  // add catagory
  const handleAdd = () => {
    if (uText !== "") {
      const data = {
        id: uText,
        unit: uText,
      };
      props.func.handleAddUnit(data);

      // temp solution
      // setUText("");
    } else {
      alert("Enter some valid catagory name!");
    }
  };

  // delete unit
  const handleDelete = (i) => {
    props.func.handleDeleteUnit(i);
  };

  // edit unit
  const handleEdit = (i) => {
    // props.func.handleEditUnit(id);
    update.data.show = true;
    update.data.dataSet = props.data.units[i];
    setUpdate({ data: update.data });
  };

  // update unit
  const handleUpdate = (data) => {
    props.func.handleUpdateUnit(data);
    update.data.show = false;
    update.data.dataSet = {};
    setUpdate({ data: update.data });
  };

  // active unit
  const handleActive = (i) => {
    props.func.handleActiveUnit(i);
  };

  // #################################################################################

  return (
    <>
      {update.data.show ? (
        <EditUnit
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
            <h3 style={titleText}>Unit</h3>
            <hr />
            <div className="row ">
              {/* ------------------------------------ */}
              <form className=" row m-auto " onSubmit={handleAdd}>
                <div className="col-4">
                  <h6 className="m-2">New unit name</h6>
                </div>
                <div className="col-6">
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="input"
                    placeholder="Enter unit name..."
                    value={uText}
                    onChange={handleUText}
                  />
                </div>

                <div className="col-2">
                  <button
                    href="#"
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
          {/* </div>
      </div>  */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
            }}
            className="container mt-2  col-9 "
          >
            <div className=" p-2 mx-4 ">
              <h5 style={titleText}>
                Unit Lists <span style={{ color: "#00f500" }}>( ACTIVE )</span>{" "}
              </h5>

              <div style={{ justifyContent: "center" }} className="row  m-2">
                <div
                  styles={{ overflowY: "scroll" }}
                  className="col-11"
                  id="table table-responsive"
                >
                  <table className="table table-striped  ">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Unit name</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.units.map((item, i) => {
                        return (
                          <tr>
                            <td> {i + 1} </td>

                            <td>{item.unitName}</td>

                            <td>
                              <a
                                href="#edit"
                                className="tooltip-test"
                                title={"Edit " + item.unitName}
                                data-placement="top"
                                onClick={() => {
                                  handleEdit(i);
                                }}
                              >
                                <FontAwesomeIcon icon={faEdit} color="#00a" />
                              </a>
                            </td>
                            <td>
                              <a
                                href="#ddelete"
                                className="tooltip-test"
                                title={"Delete " + item.unitName}
                                data-placement="top"
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
                  {props.data.units.length === 0 && (
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
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 6,
            }}
            className="container m-auto col-9"
          >
            <div className=" p-2 m-3 ">
              <h5 style={titleText}>
                Unit Lists{" "}
                <span style={{ color: "#f50000" }}>( DEACTIVE )</span>
              </h5>

              <div style={{ justifyContent: "center" }} className="row  m-2">
                <div
                  styles={{ overflowY: "scroll" }}
                  className="col-md-11"
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
                      {props.data.deactiveUnitList.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td style={{ color: "#aa5555" }}> {i + 1} </td>
                            <td style={{ color: "#ad5555" }}>
                              {item.unitName}
                            </td>
                            <td>
                              <a
                                href="#active"
                                onClick={() => handleActive(item.id)}
                                className="btn btn-outline-success p-0 pl-1 pr-1"
                              >
                                Active
                              </a>
                              {/* <a onClick={() => handleActive(item.id)}>
                              <FontAwesomeIcon
                                icon={faCheckSquare}
                                color="#00a506"
                              />
                            </a> */}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {props.data.deactiveUnitList.length === 0 && (
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

export default Unit;
