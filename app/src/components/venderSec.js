import React, { useState, useEffect } from "react";
// import {Link}

// get our fontawesome imports
import {
  faBars,
  faStore,
  faBook,
  faDiceD6,
  faCubes,
  faBalanceScale,
  faShoppingCart,
  faAlignJustify,
  faCogs,
  faLeaf,
  faTasks,
  faUsers,
  faList,
  faBookReader,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Route, Switch } from "react-router-dom";

// components--------------
import Home from "./home";
import AddItem from "./addItem";
import ItemList from "./itemlist";
import AddVendor from "./addVendor";
import VendorList from "./vendorList";
import PurchaseEntry from "./purchaseEntry";
import PurchaseOrder from "./purchaseOrder";
import PurchaseList from "./purchaseList";

import Unit from "./unit";
import Catagory from "./catagory";
import SubCatagory from "./subCategory";
import AdjustItem from "./adjustment";

export default function VenderSec() {
  // ################  DATA  ######################################################
  const [status, setStatus] = useState("active");

  // catagories
  const [catagories, setCatagories] = useState([]);

  // deactive catagories
  const [deactiveCatagories, setDeactiveCatagories] = useState([]);

  // sub catagories
  const [subcatagories, setSubCatagories] = useState([]);

  const [deactiveSubCatagories, setDeactiveSubCatagories] = useState([]);

  // unit
  const [units, setUnits] = useState([]);
  const [deactiveUnitList, setDeactiveUnitList] = useState([]);

  // Taxs
  const taxs = [
    // { value: 0, tax: "NILL" },
    { value: 5, tax: "5 % GST", isActive: true },
    { value: 12, tax: "12 % GST", isActive: true },
    { value: 18, tax: "18 % GST", isActive: true },
    { value: 28, tax: "28 % GST", isActive: true },
  ];

  // item List
  const [data, setData] = useState({
    dataList: [
      {
        id: 0,
        itemName: "item",

        catagory: 0,
        subCatagory: 0,

        unit: 0,
        HSNcode: "28198",

        unitPrice: 10,

        tax: 18,
        isActive: 1,
      },
    ],
  });

  const [deactiveData, setDeactiveData] = useState({
    dataList: [],
  });

  // test data of Vendor
  const vendorIns = {
    id: "",
    firmDtls: {
      firmName: "pritam das Co. & Ltd",
      catagory: "",
      counrty: "",
      gst: "GSTNO00010101",
      pan: "",
      firmStatus: "",
    },
    personalDtls: {
      name: "",
      designation: "",
      address: "",
      city: "Murshidabad",
      state: "",
      pin: "",
    },
    contactDtls: {
      mobile: "7699621924",
      email: "pm@gmail.com",
      website: "",
    },
    typesOfInterestedItem: [],
  };

  const [itemCount, setItemCount] = useState(data.dataList.length);
  const [vendorData, setVendorData] = useState({
    vendorList: [],
  });

  const [deactiveVendorData, setDeactiveVendorData] = useState({
    vendorList: [
      // test data--
      vendorIns,
    ],
  });

  // item id for update id
  const [selectedItemId, setSelectedItemId] = useState();

  const [purchaseList, setPurchaseList] = useState({ list: [] });

  // // ###########use effect ########################################################
  useEffect(() => {
    // alert(data.dataList.length);
  });
  useEffect(() => {
    fetch("/category-list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCatagories([...data.activeList]);
        setDeactiveCatagories([...data.deactiveList]);
      })
      .catch(e => console.log(e))

    fetch("/unit-list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUnits([...data.activeList]);
        setDeactiveUnitList([...data.deactiveList]);
      });

    fetch("/sub-category-list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubCatagories([...data.activeList]);
        setDeactiveSubCatagories([...data.deactiveList]);
      });

    fetch("/item-list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData({ dataList: [...data.activeList] });
        setDeactiveData({ dataList: [...data.deactiveList] });

        // count
        // setItemCount(data.activeList);
      });

    fetch("/vendor-list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVendorData({ vendorList: [...data.activeList] });
        setDeactiveVendorData({ vendorList: [...data.deactiveList] });

        // count
        // setItemCount(data.activeList);
      });

    fetch("/purchase-list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setPurchaseList({ list: [...data.data] });
        // console.log(data);
      });

    // counting
    // setVendorCount(data.activeList);
  }, []);

  // #################  Functions  #################################################
  // add new item
  const handleAddItem = (item) => {
    fetch("/add-item", {
      method: "POST",
      body: JSON.stringify({ item }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData({ dataList: [...data.activeList] });
        setDeactiveData({ dataList: [...data.deactiveList] });
      })
      .catch((err) => console.log(err));
  };

  // delete item
  const handleDeleteItem = (id) => {
    fetch(`/deactive-item/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData({ dataList: [...data.activeList] });
        setDeactiveData({ dataList: [...data.deactiveList] });
      });
  };

  // Edit item
  const handleEditItem = (id) => {
    // alert(id);
    setSelectedItemId(id);
    // <Redirect to="/edit-item" />;
  };

  const handleUpdateItem = (data) => {
    fetch("/update-item", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData({ dataList: [...data.activeList] });
        setDeactiveData({ dataList: [...data.deactiveList] });
      })
      .catch((err) => console.log(err));
  };

  // active deleted item
  const handleActiveItem = (id) => {
    fetch(`/item-active/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData({ dataList: [...data.activeList] });
        setDeactiveData({ dataList: [...data.deactiveList] });
      })
      .catch((err) => console.log(err));
  };

  // ------------CATAGORY----------------------------------------------------
  // add catagory
  const handleAddCatagory = (cat) => {
    // setCatagories([...catagories, cat]);

    fetch("/add-category", {
      method: "POST",
      body: JSON.stringify({ cat }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCatagories([...data.activeList]);
        setDeactiveCatagories([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  // deactive catagory----------------
  const handleDeleteCatagory = (id) => {
    // console.log(id);
    fetch(`/deactive-category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCatagories([...data.activeList]);
        setDeactiveCatagories([...data.deactiveList]);
      });
  };

  // Edit catagory
  // const handleEditCatagory = (id) => {
  //   alert(id);
  // };

  const handleActiveCatagory = (id) => {
    // alert(id);
    fetch(`/category-active/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCatagories([...data.activeList]);
        setDeactiveCatagories([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateCatagory = (data) => {
    console.log(data);
    fetch("/update-category", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCatagories([...data.activeList]);
        setDeactiveCatagories([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  // ------------SUB-CATAGORY----------------------------------------------------
  // add sub catagory----
  const handleAddSubCategory = (subCategory) => {
    // const subCategory = {
    //   categoryId: dt.categoryId,
    //   categoryName: dt.categoryName,
    //   subCategoryName: dt.subCategoryName,
    // };
    console.log(subCategory);

    fetch("/add-sub-category", {
      method: "POST",
      body: JSON.stringify({ subCategory }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      // .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  // Delete sub catagory----
  const handleDeleteSubCatagory = (id) => {
    fetch(`/deactive-sub-category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubCatagories([...data.activeList]);
        setDeactiveSubCatagories([...data.deactiveList]);
      });
  };

  // Edit sub catagory----
  const handleUpdateSubCatagory = (data) => {
    console.log(data);
    fetch("/update-sub-category", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSubCatagories([...data.activeList]);
        setDeactiveSubCatagories([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  // active sub category---
  const handleActiveSubCatagory = (id) => {
    fetch(`/sub-category-active/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubCatagories([...data.activeList]);
        setDeactiveSubCatagories([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  // -------------UNIT----------------------------
  // add new unit
  const handleAddUnit = (unit) => {
    // setUnits([...units, u]);

    fetch("/add-unit", {
      method: "POST",
      body: JSON.stringify({ unit }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setUnits([...data.activeList]);
        setDeactiveUnitList([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  // edit unit
  const handleUpdateUnit = (data) => {
    // setUnits([...units, u]);
    console.log(data);

    fetch("/update-unit", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUnits([...data.activeList]);
        setDeactiveUnitList([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  // delete unit
  const handleDeleteUnit = (id) => {
    fetch(`/deactive-unit/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUnits([...data.activeList]);
        setDeactiveUnitList([...data.deactiveList]);
      });
  };

  const handleActiveUnit = (id) => {
    // alert(id);
    fetch(`/unit-active/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUnits([...data.activeList]);
        setDeactiveUnitList([...data.deactiveList]);
      })
      .catch((err) => console.log(err));
  };

  // ------------- Add New vendor ------------------------------------

  const handleAddVendor = (vendor) => {
    // setVendorData({ vendorList: [...vendorData.vendorList, vData] });
    // console.log(vData);
    fetch("/add-vendor", {
      method: "POST",
      body: JSON.stringify({ vendor }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      //   setUnits([...data.activeList]);
      //   setDeactiveUnitList([...data.deactiveList]);
      // })
      .catch((err) => console.log(err));
  };

  const handleDeleteVendor = (id) => {
    fetch(`/deactive-vendor/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVendorData({ vendorList: [...data.activeList] });
        setDeactiveVendorData({ vendorList: [...data.deactiveList] });
      });
  };
  // updateVwndor
  const handleUpdateVendor = (data) => {
    // console.log(data);
    fetch("/update-vendor", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setVendorData({ vendorList: [...data.activeList] });
        setDeactiveVendorData({ vendorList: [...data.deactiveList] });
      })
      .catch((err) => console.log(err));
  };

  //active vendoe
  const handleActiveVendor = (id) => {
    fetch(`/vendor-active/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVendorData({ vendorList: [...data.activeList] });
        setDeactiveVendorData({ vendorList: [...data.deactiveList] });
      })
      .catch((err) => console.log(err));
  };

  const handleAdjustStock = (data) => {
    console.log("Adj data:   ", data);
    // stock-adjustment

    fetch("/stock-adjustment", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      // .then((data) => {
      //   console.log(data);
      //   setUnits([...data.activeList]);
      //   setDeactiveUnitList([...data.deactiveList]);
      // })
      .catch((err) => console.log(err));
  };

  // ***********************************************
  const handleAddPurchaseBill = (purBillData) => {
    fetch("/add-purchase-bill", {
      method: "POST",
      body: JSON.stringify({ purBillData }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      // .then((data) => {
      //   console.log(data);
      //   setUnits([...data.activeList]);
      //   setDeactiveUnitList([...data.deactiveList]);
      // })
      .catch((err) => console.log(err));
  };

  // handleUpdatePurchase
  const handleUpdatePurchase = (data) => {
    alert("Purchase entry updation will comming soon....! \nTHANK YOU!");
    // fetch("/update-purchase-bill", {
    //   method: "POST",
    //   body: JSON.stringify({ data }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.text())
    //   // .then((data) => {
    //   //   console.log(data);
    //   //   setUnits([...data.activeList]);
    //   //   setDeactiveUnitList([...data.deactiveList]);
    //   // })
    //   .catch((err) => console.log(err));
  };

  // ##############################################################################
  const handleState = () => {
    if (status === "active") {
      setStatus("");
    } else if (status === "") {
      setStatus("active");
    }
  };
  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className={status}>
          <div
            // style={{ alignContent: "center" }}
            className="row m-auto "
          >
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-outline-dark float-right ml-3 mt-3"
              onClick={handleState}
            // style={{ marginLeft: 3 }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div className="m-auto">
            {/* {status !== "active" && <h5 className="m-auto">User name</h5>} */}
            <h1 className="m-auto  pt-3">
              <a href="/" className="logo">
                <FontAwesomeIcon icon={faLeaf} />
                {status !== "active" && (
                  <span className="m-auto pl-3">Leaf</span>
                )}
              </a>
            </h1>

            {/* LIST ------------------------------------- */}
            <ul className="list-unstyled components mb-5">
              <li>
                <NavLink
                  exact
                  to="/"
                  style={menuText}
                  activeStyle={{ color: "#fff" }}
                  className="tooltip-test"
                  title="Dashboard"
                  data-placement="top"
                >
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  {status === "" && (
                    <>
                      <span className="p-2">Dashboard</span>
                    </>
                  )}
                </NavLink>
              </li>
              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle tooltip-test"
                  style={menuText}
                  // className="tooltip-test"
                  title="Master"
                  data-placement="top"
                // activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faBookReader} />
                  {status === "" && (
                    <>
                      <span className="p-2">Master</span>
                    </>
                  )}
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <NavLink
                      exact
                      to="/master-additem"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Add new item"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faDiceD6} />
                      {status === "" && (
                        <>
                          <span className="p-2">Add Item</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master-itemlist"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Item lists"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faTasks} />
                      {status === "" && (
                        <>
                          <span className="p-2">Item List</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master-catagory"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Catagorys"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faCubes} />
                      {status === "" && (
                        <>
                          <span className="p-2">Catagory</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master-sub-catagory"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Catagorys"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faCubes} />
                      {status === "" && (
                        <>
                          <span className="p-2">Sub Catagory</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master-unit"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Units"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faBalanceScale} />
                      {status === "" && (
                        <>
                          <span className="p-2">Unit</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/master-vendor"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Add new vendor"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faUsers} />
                      {status === "" && (
                        <>
                          <span className="p-2">Vendor</span>
                        </>
                      )}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      exact
                      to="/master-vendorList"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Vendor list"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faList} />
                      {status === "" && (
                        <>
                          <span className="p-2">Vendor list</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle tooltip-test"
                  style={menuText}
                  // className="tooltip-test"
                  title="Purchase"
                  data-placement="top"
                // activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {status === "" && (
                    <>
                      <span className="p-2">Purchase</span>
                    </>
                  )}
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  {/* <li>
                    <NavLink
                      exact
                      to="/purchase-order"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="New purchase order"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                      {status === "" && (
                        <>
                          {" "}
                          <span className="p-2">Purchase Order</span>
                        </>
                      )}
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      exact
                      to="/purchase-entry"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="New purchase entry"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faBook} />
                      {status === "" && (
                        <>
                          {" "}
                          <span className="p-2">Purchase Entry</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/purchase-list"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Purchase list"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faAlignJustify} />
                      {status === "" && (
                        <>
                          <span className="p-2">Purchase List</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      exact
                      to="/purchase-return"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Purchase return"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faExchangeAlt} />
                      {status === "" && (
                        <>
                          <span className="p-2">Purchase Return</span>{" "}
                        </>
                      )}
                    </NavLink>
                  </li> */}
                </ul>
              </li>
              <li>
                <a
                  href="#store"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle toolip-test"
                  // className="tooltip-test"
                  title="Stock"
                  data-placement="top"
                  style={menuText}
                // activeStyle={{ color: "#fff" }}
                >
                  <FontAwesomeIcon icon={faStore} />
                  {status === "" && (
                    <>
                      <span className="p-2">Stock</span>
                    </>
                  )}
                </a>
                <ul className="collapse list-unstyled" id="store">
                  <li>
                    <NavLink
                      exact
                      to="/stock-adjustment"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Adjustment"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faCogs} />
                      {status === "" && (
                        <>
                          <span className="p-2">Adjustment</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      exact
                      to="/stock-bydate"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Stock report by date"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Date</span>
                        </>
                      )}
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      exact
                      to="/stock-byitem"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Stock report by item"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faDiceD6} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Item</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      exact
                      to="/stock-bycatagory"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Stock report by catagory"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faCubes} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Catagory</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/stock-bypayment"
                      style={subMenuText}
                      activeStyle={{ color: "#fff" }}
                      className="tooltip-test"
                      title="Stock report by payment"
                      data-placement="top"
                    >
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                      {status === "" && (
                        <>
                          <span className="p-2">By Payment</span>
                        </>
                      )}
                    </NavLink>
                  </li> */}
                </ul>
              </li>

              {/* <li>
                <NavLink
                  exact
                  to="/account"
                  style={menuText}
                  activeStyle={{ color: "#fff" }}
                  className="tooltip-test"
                  title="User Account"
                  data-placement="top"
                >
                  <FontAwesomeIcon icon={faUser} />
                  {status === "" && (
                    <>
                      <span className="p-2">Account</span>
                    </>
                  )}
                </NavLink>
              </li> */}
            </ul>

            <div className="footer">
              <p>
                Copyright &copy; All rights reserved | This template is made
                with
              </p>
            </div>
          </div>
        </nav>

        {/* ################################################################################################### */}
        {/* ######################################### pages ########################################################## */}

        <div
          id="content"
          style={{
            backgroundColor: "#dfdfdf",
            // scrollBehavior: "auto",
            // overflowY: "scroll",
          }}
          className="p-3 p-md-3"
        >
          <Switch>
            <Route exact path="/">
              {/* <h1>Dashboard</h1> */}
              <Home
                data={{
                  itemCount: data.dataList.length,
                  vendorCount: vendorData.vendorList.length,
                }}
              />
            </Route>
            <Route exact path="/master-additem">
              {/* <h1>item</h1> */}
              <AddItem
                key="additemkey"
                data={{
                  // itemList: data.dataList,
                  catagories: catagories,
                  subCategories: subcatagories,
                  units: units,
                  taxs: taxs,
                  itemCount: data.dataList.length,
                }}
                func={{
                  handleAddItem: handleAddItem.bind(this),
                  handleDeleteItem: handleDeleteItem.bind(this),
                }}
              />
            </Route>
            <Route exact path="/master-itemlist">
              {/* <h1>itemList</h1> */}
              <ItemList
                key="itemlistkey"
                data={{
                  itemList: data.dataList,
                  deactiveItemList: deactiveData.dataList,

                  selectedItemId: selectedItemId,
                  catagories: catagories,
                  subCategories: subcatagories,
                  units: units,
                  taxs: taxs,
                }}
                func={{
                  handleEditItem: handleEditItem.bind(this),
                  handleDeleteItem: handleDeleteItem.bind(this),
                  handleActiveItem: handleActiveItem.bind(this),
                  handleUpdateItem: handleUpdateItem.bind(this),
                }}
              />
            </Route>

            {/* <Route exact path="/edit-item">
              {
              <EditItem
                data={{
                  selectedItemId: selectedItemId,
                  catagories: catagories,
                  subCategories: subcatagories,
                  units: units,
                  taxs: taxs,
                  itemList: data.dataList,
                }}
                func={{
                  handleUpdateItem: handleUpdateItem.bind(this),
                }}
              />
              {/* )} 
            </Route> */}

            <Route exact path="/master-catagory">
              {/* <h1>catagory</h1> */}
              <Catagory
                data={{
                  catagoryList: catagories,
                  deactiveCatagoryList: deactiveCatagories,
                }}
                func={{
                  handleAddCatagory: handleAddCatagory.bind(this),
                  handleDeleteCatagory: handleDeleteCatagory.bind(this),
                  // handleEditCatagory: handleEditCatagory.bind(this),
                  handleActiveCatagory: handleActiveCatagory.bind(this),
                  handleUpdateCatagory: handleUpdateCatagory.bind(this),
                }}
              />
            </Route>
            <Route exact path="/master-sub-catagory">
              {/* <h1>catagory</h1> */}
              <SubCatagory
                data={{
                  subCategoryList: subcatagories,
                  deactiveSubCategoryList: deactiveSubCatagories,
                  categoryList: catagories,
                }}
                func={{
                  handleAddSubCategory: handleAddSubCategory.bind(this),
                  handleDeleteSubCategory: handleDeleteSubCatagory.bind(this),
                  handleUpdateSubCatagory: handleUpdateSubCatagory.bind(this),
                  handleActiveSubCategory: handleActiveSubCatagory.bind(this),
                }}
              />
            </Route>
            <Route exact path="/master-unit">
              {/* <h1>unit</h1> */}
              <Unit
                key="unitkey"
                data={{ units: units, deactiveUnitList: deactiveUnitList }}
                func={{
                  handleUpdateUnit: handleUpdateUnit.bind(this),
                  handleAddUnit: handleAddUnit.bind(this),

                  handleDeleteUnit: handleDeleteUnit.bind(this),
                  handleActiveUnit: handleActiveUnit.bind(this),
                }}
              />
            </Route>
            <Route exact path="/master-vendor">
              {/* <h1>vendor</h1> */}
              <AddVendor
                data={{ vendorCount: vendorData.vendorList.length }}
                func={{ handleAddVendor: handleAddVendor.bind(this) }}
              />
            </Route>
            <Route exact path="/master-vendorList">
              {/* <h1>vendor</h1> */}
              <VendorList
                data={{
                  vendorList: vendorData.vendorList,
                  deactiveVendorList: deactiveVendorData.vendorList,
                }}
                func={{
                  handleDeleteVendor: handleDeleteVendor.bind(this),
                  handleUpdateVendor: handleUpdateVendor.bind(this),
                  handleActiveVendor: handleActiveVendor.bind(this),
                }}
              />
            </Route>

            <Route exact path="/purchase-order">
              {/* <h1>Purchase Order</h1> */}
              <PurchaseOrder
                data={{
                  vendorList: vendorData.vendorList,
                  itemList: data.dataList,
                }}
              />
            </Route>
            <Route exact path="/purchase-entry">
              {/* <h1>Purchase Enery</h1> */}
              <PurchaseEntry
                data={{
                  vendorList: vendorData.vendorList,
                  itemList: data.dataList,
                }}
                func={{
                  handleAddPurchaseBill: handleAddPurchaseBill.bind(this),
                }}
              />
            </Route>
            <Route exact path="/purchase-list">
              <PurchaseList
                data={{
                  vendorList: vendorData.vendorList,
                  itemList: data.dataList,
                  purchaseList: purchaseList.list,
                }}
                func={{
                  handleUpdatePurchase: handleUpdatePurchase.bind(this),
                }}
              />
            </Route>
            <Route exact path="/purchase-return">
              <h1>purchase return</h1>
            </Route>

            <Route exact path="/stock-adjustment">
              {/* <h1>stock adjustment</h1> */}
              {/* <Store /> */}
              <AdjustItem
                data={{
                  itemList: data.dataList,
                  catagories: catagories,
                  subCategories: subcatagories,
                  units: units,
                  taxs: taxs,
                  itemCount: itemCount,
                }}
                func={{
                  handleAdjustStock: handleAdjustStock.bind(this),
                }}
              />
            </Route>

            <Route exact path="/stock-byitem">
              <h1>stock report by item</h1>
            </Route>

            {/* <Route exact path="/stock-bycatagory">
              <h1>stock report by catagory</h1>
            </Route>

            <Route exact path="/stock-date">
              <h1>stock report by date</h1>
            </Route>
            <Route exact path="/stock-bypayment">
              <h1>stock report by payment</h1>
            </Route>
            <Route exact path="/account">
              <h1>Account</h1>
            </Route> */}
            <Route path="/">
              <h1 style={{ color: "#ff0000" }}>Unkhown path !</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

const menuText = {
  color: "#0f0f0f",
  // backgroundColor: "#5555ff",
};

const subMenuText = {
  color: "#03e8fc",
  backgroundColor: "#02144a",
};
