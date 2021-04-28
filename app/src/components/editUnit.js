import React, { useState } from "react";

// get our fontawesome imports
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateUnit = (props) => {
  console.log(props.data.dataSet);
  // ######################  data  ############################################
  const [uText, setUText] = useState(props.data.dataSet.unitName);

  // ######################  function  ############################################
  // handle catagory text
  const handleUText = (e) => {
    setUText(e.target.value);
  };

  // add catagory
  const handleAdd = () => {
    if (uText !== "") {
      const data = {
        id: props.data.dataSet.id,
        unit: uText,
      };
      props.func.handleUpdate(data);

      // temp solution
      setUText("");
    } else {
      alert("Enter some valid catagory name!");
    }
  };

  // #################################################################################

  return (
    <>
      {/* ---------------###############---------------------- */}

      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 6,
        }}
        className="container m-auto m-3 p-3 col-9 p-3"
      >
        <h3 style={titleText}>Update unit</h3>
        <hr />
        <div className="row ">
          {/* ------------------------------------ */}
          <form
            className=" row m-auto "
            // onSubmit={handleAdd}
          >
            <div className="col-4">
              <h6 className="m-2">Unit name</h6>
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
    </>
  );
};

const titleText = {
  color: "#919191",
  textAlign: "center",
};

export default UpdateUnit;
