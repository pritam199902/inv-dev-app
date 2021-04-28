import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// components----------------
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateCatagory = (props) => {
  console.log(props.data.dataSet);

  // ######################  data  ############################################
  const [catText, setCatText] = useState(props.data.dataSet.categoryName);

  // ######################  function  ############################################

  // handle catagory text
  const handleCatText = (e) => {
    setCatText(e.target.value);
  };

  // update catagory
  const handleAdd = () => {
    if (catText !== "") {
      const data = {
        id: Number(props.data.dataSet.id),
        cat: catText,
      };

      props.func.handleUpdate(data);
    }
  };
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 6,
      }}
      className="container m-auto m-3 p-3 col-9 p-3"
    >
      <h3 style={titleText}>Edit Catagory</h3>
      <hr />
      <div className="row ">
        {/* ------------------------------------ */}
        <form
          className=" row m-auto p-4"
          // onSubmit={handleAdd}
        >
          <div className="col-4">
            <h6 className="m-2">Catagory name</h6>
          </div>
          <div className="col-6">
            <input
              required
              type="text"
              className="form-control"
              id="input"
              placeholder="update catagory name..."
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
        </form>

        {/* ------------------------------------ */}
      </div>
    </div>
  );
};

const titleText = {
  color: "#919191",
  textAlign: "center",
};

export default UpdateCatagory;
