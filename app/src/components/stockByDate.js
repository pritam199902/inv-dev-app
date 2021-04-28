import React from "react";

// get our fontawesome imports
// import {} from "@fortawesome/free-solid-svg-icons";


const AddItem = () =>{
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
              <h3 style={titleText}>By Date</h3>
            </div>
        </div>
        <hr className="m-0" />
        <div className="form-row m-2">
        <div className="col-2 pt-2">
            <h6 className="float-right">From Date</h6>
          </div>
          <div className="col-3 ml-3">
            <input
              type="date"
              className="form-control"
              placeholder="date"
              // value={data}
              // onChange={handleCode}
            />
          </div>
          <div className="col-2 pt-2">
            <h6 className="float-right">To Date</h6>
          </div>
          <div className="col-3 ml-3">
            <input
              type="date"
              className="form-control"
              placeholder="date"
              // value={data}
              // onChange={handleCode}
            />
          </div>
        </div>
        <hr className="m-0" />
        <br/>
        <div className=" pb-2">
          <div styles={{ overflowY: "scroll" }} id="table table-responsive">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Purchase Date</th>
                  <th scope="col">Item</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Vandor</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Modify on</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col">01/01/2020</td>
                  <td scope="col">ABC</td>
                  <td scope="col">12</td>
                  <td scope="col">XYZ</td>
                  <td scope="col">Rs.12,999</td>
                  <td scope="col">05/05/2020</td>
                  <td scope="col">Edit</td>
                  <td scope="col">Delete</td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
        </div>
    );
}

const titleText = {
    color: "#919191",
    textAlign: "center",
  };
  
export default AddItem;