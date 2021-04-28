import React from "react";

// components----------------

function Home(props) {
  return (
    <div className="container">
      <div
        style={{
          justifyContent: "space-around",
          paddingRight: 50,
          paddingLeft: 50,
          marginTop: 20,
        }}
        className="row"
      >
        <div style={card1} className="card col-3">
          <div style={cardTitle} className="card-title pt-1">
            <h5 style={titeText}>Total Items</h5>
          </div>
          <div style={cardBody} className="card-body">
            <h3 style={titeText}>{props.data.itemCount}</h3>
          </div>
        </div>

        <div style={card2} className="card col-3">
          <div style={card2Title} className="card-title pt-1">
            <h5 style={titeText}>Total Vendor</h5>
          </div>
          <div className="card-body">
            <h3 style={titeText}>{props.data.vendorCount}</h3>
          </div>
        </div>

        {/* <div style={card3} className="card col-3">
          <div style={card3Title} className="card-title pt-1">
            <h5 style={titeText}>Pending Bill</h5>
          </div>
          <div className="card-body">
            <h3 style={titeText}>5,10,000</h3>
          </div>
        </div> */}
      </div>

      {/* <div
        style={{
          justifyContent: "space-around",
          paddingRight: 50,
          paddingLeft: 50,
          marginTop: 20,
        }}
        className="row"
      >
        <div style={cardS} className="card col-5">
          <div style={cardSTitle} className="card-title pt-2">
            <h5 style={titeText}>Vendors</h5>
          </div>
          <div className="card-body">
            <div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Cras justo odio
                  <span className="float-right badge badge-primary badge-pill">
                    1
                  </span>
                </li>
                <li className="list-group-item">
                  Dapibus ac facilisis in
                  <span className="float-right badge badge-primary badge-pill">
                    1
                  </span>
                </li>
                <li className="list-group-item">
                  Morbi leo risus
                  <span className="float-right badge badge-primary badge-pill">
                    1
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>         
      </div>*/}
    </div>
  );
}

const titeText = {
  color: "#fff",
  textAlign: "center",
};
const cardTitle = {
  backgroundColor: "#2475B0",
};
const cardBody = {
  backgroundColor: "#3498DB",
};
const card1 = {
  //   borderRadius: 10,
  backgroundColor: "#3498DB",
};

const card3Title = {
  backgroundColor: "#26ae60",
};
const card3 = {
  //   borderRadius: 10,
  backgroundColor: "#2ecc72",
};

const card2Title = {
  backgroundColor: "#218F76",
};
const card2 = {
  //   borderRadius: 10,
  backgroundColor: "#1BCA9B",
};

const cardCTitle = {
  backgroundColor: "#777E8B",
};
const cardC = {
  //   borderRadius: 10,
  //   backgroundColor: "#DAE0E2",
};

const cardSTitle = {
  backgroundColor: "#777E8B",
};
const cardS = {
  //   borderRadius: 10,
  //   backgroundColor: "#DAE0E2",
};

export default Home;
