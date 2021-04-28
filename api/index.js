const express = require("express");
const mysql = require("mysql");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const key = require("./key");
const cors = require("cors")

// port
const PORT = process.env.PORT || 5002;

// create app
const app = express();

// mongodb connection--
// mongoose.connect(dbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });
// mongoose.connection.on("connected", () => {
//   console.log("Database connect...");
// });
// mongoose.connection.on("error", (err) => {
//   console.log("db connection error", err);
// });

// mysql connection
const db = mysql.createConnection({
  host: key.host,
  port: key.port,
  user: key.user,
  password: key.password,
  database: "inventoryDatabase"
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected...");
  }
});

// // create database
// const dbcreate = "CREATE DATABASE IF NOT exists inventoryDatabase; use inventoryDatabase";
// db.query(dbcreate, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Database created!");
//   }
// });

// create itemMaster
const itemmaster = `CREATE TABLE IF NOT exists itemMaster (
  id int AUTO_INCREMENT NOT null unique,
  itemCode varchar(255) not null unique,
  itemName varchar(255) not null ,

  itemCategory bigint not null ,
  itemCategoryName varchar(255) null ,

  itemSubCategory bigint null ,
  itemSubCategoryName varchar(255) null ,

  hsn varchar(255) not null ,

  itemUnit bigint not null ,
  itemUnitName varchar(255)  null ,

  itemRate bigint not null ,
  itemTax bigint not null ,
  isActive boolean NOT null  default 1,
  PRIMARY KEY (id)    
)`;
db.query(itemmaster, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("item master created!");
  }
});

// create categoryMaster
const catmaster = `CREATE TABLE if not exists categoryMaster (
  id int AUTO_INCREMENT NOT null unique,
  categoryName varchar(255) not null ,
  isActive boolean NOT null default 1,

  PRIMARY KEY (id)    
);`;
db.query(catmaster, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("category master created!");
  }
});

// create subCatMaster
const subatmaster = `CREATE TABLE if not exists subCategoryMaster (
  id int AUTO_INCREMENT NOT null unique,
  categoryId int null ,
  subCategoryName varchar(255) null ,
  categoryName varchar(255)  null ,
  isActive boolean NOT null default 1,

  PRIMARY KEY (id)
);`;
db.query(subatmaster, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("sub-category master created!");
  }
});

// create unitMaster
const unitmaster = `CREATE TABLE if not exists unitMaster (
  id int AUTO_INCREMENT NOT null unique,
  unitName varchar(255) not null ,
  isActive boolean NOT null default 1,

  PRIMARY KEY (id)    
);`;
db.query(unitmaster, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("unit master created!");
  }
});

// create taxMaster
const taxmaster = `CREATE TABLE if not exists taxMaster (
  id int AUTO_INCREMENT NOT null unique,
  tax int not null ,
  isActive boolean NOT null default 1,

  PRIMARY KEY (id)    
)`;
db.query(taxmaster, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("tax master created!");
  }
});

// create vendorMaster
const vendormaster = `CREATE TABLE if not exists vendorMaster (
  id int AUTO_INCREMENT NOT null unique,
  
  vendorCode varchar(255)  null ,
  vendorName varchar(255)  null ,
  vendorCategory varchar(255) null,
  vendorStatus  varchar(255) null,
  
  gst varchar(20) null,
  pan varchar(20) null,
  
  address varchar(255) null,
  city varchar(255) null,
  state varchar(255)  null,
  pin varchar(10)  null,
  country varchar(255) null,
  
  mobile varchar(15)  null,
  mobile2 varchar(15) null,
  email varchar(255) null,
  email2 varchar(255) null,
  website varchar(255) null,
  
  bankName varchar(255) null,
  ifsc varchar(50) null,
  accountNo varchar(100) null,    
  branch varchar (255) null,
  
  isActive boolean NOT null  default 1,
  PRIMARY KEY (id)    
)`;
db.query(vendormaster, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("vendor master created!");
  }
});

// create purchaseEntry
const purentry = `CREATE TABLE if not exists purchaseEntry (
  id int AUTO_INCREMENT NOT null unique,
  vendorId varchar (50) null ,
  billId varchar (20) null,
  purchaseDate date null ,
  
  subTotalAmount varchar (50) null,
  totalTaxAmount varchar (50) null,
  pkgAmount  varchar (50) null,
  dlvAmount varchar (50) null,
  
  netAmount varchar (50) null,
  billType varchar (200) not null,
  paidAmount varchar (50) null,
  dueAmount varchar (50) null,
  
  PRIMARY KEY (id)    
  )
`;
db.query(purentry, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("purchase entry created!");
  }
});

// create purchaseItemList
const purchaseItemList = `CREATE TABLE if not exists purchaseItemList (
  id int AUTO_INCREMENT NOT null unique,
  itemId varchar (50) null,
  itemName varchar (200) null,
  purchaseBillId varchar (50) null,
  qty varchar (50) null ,
  total varchar (50) null,
  
  PRIMARY KEY (id)    
)`;
db.query(purchaseItemList, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("purchase item list created!");
  }
});

// create adjustment
const adjustment = `create table if not exists adjustment 
( 
	id bigint not null unique auto_increment,
    itemId varchar(50) ,
    adjQty varchar(50) ,
	  modifyOn date,
    actionType varchar(100) ,
    remark varchar(255),
    
    primary key(id)
)`;
db.query(adjustment, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("adjustment created!");
  }
});

// create purchase order
const purOrder = `CREATE TABLE if not exists purchaseOrder (
  id int AUTO_INCREMENT NOT null unique,
  vendorId int not null ,
  orderDate date not null ,
  
  subTotalAmount int not null,
  netAmount int not null,
  
  PRIMARY KEY (id)   
)`;
db.query(purOrder, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("purOrder created!");
  }
});

// create purchase order list
const purOrderItemList = `CREATE TABLE if not exists purchaseOrderItemList (
  id int AUTO_INCREMENT NOT null unique,
  itemId int not null,
  orderId int not null,
  qty int not null,
  
  PRIMARY KEY (id)    
)`;
db.query(purOrderItemList, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("purOrderLits created!");
  }
});

// create purchase order list
const stock = `create table if not exists stock
( 

    itemId bigint unique not null,
    totalQty bigint default 0,
    damage bigint default 0,
    totalActiveQty bigint default 0,
    minQty bigint default 0,
    totalValue bigint,
    
    primary key(itemId)
)`;
db.query(stock, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("purOrderLits created!");
  }
});

// ################################################################################################################
//app use --
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTION") {
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST, PATCH, DELETE");
//     return res.status(200).json({});
//   }
//   next();
// });

//route
app.get("/", (req, res) => {
  console.log("frontend connected");
  console.log(req.body);
  let data = {
    name: "pritam",
    id: 12345,
  };

  res.send(JSON.stringify(data));
});

app.post("/data", (req, res) => {
  console.log("POST req sent");
  console.log(req.body);
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.end(JSON.stringify(data));
  // res.send({ data });
  // res.status(200).send(req.body);
});

// add new category---
app.post("/add-category", (req, res) => {
  // console.log(req.body.cat);
  const { cat } = req.body.cat;

  let sql = `insert into categoryMaster (categoryName) values("${cat}");`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
    }
  });

  res.send("done!");
});

// fetch all category---
app.get("/category-list", (req, res) => {
  let sql2 = `select * from categoryMaster where isActive=1 ;`;
  let sql3 = `select * from categoryMaster where isActive=0 ;`;
  var activeList = [];
  var deactiveList = [];
  db.query(sql2, (err, active) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(active);
      activeList = active;
      // console.log(activeList);
    }
  });

  db.query(sql3, (err, deactive) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(deactive);
      deactiveList = deactive;
      // console.log(deactiveList);
    }
    res.send({ activeList: activeList, deactiveList: deactiveList });
  });
});

// delete category---
app.get("/deactive-category/:id", (req, res) => {
  let i = req.params;
  // console.log(i);

  let sql1 = `update categoryMaster set isActive = 0 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from categoryMaster where isActive=1 ;`;
      let sql3 = `select * from categoryMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// active category---
app.get("/category-active/:id", (req, res) => {
  let i = req.params;
  // console.log(i);
  let sql1 = `update categoryMaster set isActive = 1 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from categoryMaster where isActive=1 ;`;
      let sql3 = `select * from categoryMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// sub category-----------------------------------------------------------
app.post("/add-sub-category", (req, res) => {
  const { subCategory } = req.body;
  // console.log(subCategory);

  let c = `select categoryName from categoryMaster where id = ${Number(
    subCategory.categoryId
  )}`;
  db.query(c, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("category name:     ", result[0].categoryName);
      let name = result[0].categoryName;
      let sql = `insert into subCategoryMaster 
        (categoryId, categoryName, subCategoryName) 
        values(${subCategory.categoryId}, "${name}","${subCategory.subCategoryName}");`;
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(result);
        }
      });
      res.send({ message: "done!" });
    }
  });
});

// fetch all sub-category---
app.get("/sub-category-list", (req, res) => {
  let sql2 = `select * from subCategoryMaster where isActive=1 ;`;
  let sql3 = `select * from subCategoryMaster where isActive=0 ;`;
  var activeList = [];
  var deactiveList = [];
  db.query(sql2, (err, active) => {
    if (err) {
      console.log(err);
    } else {
      activeList = active;
      // console.log(activeList);
    }
  });

  db.query(sql3, (err, deactive) => {
    if (err) {
      console.log(err);
    } else {
      deactiveList = deactive;
      // console.log(deactiveList);
    }
    res.send({ activeList: activeList, deactiveList: deactiveList });
  });
});

// delete sub-category---
app.get("/deactive-sub-category/:id", (req, res) => {
  let i = req.params;
  // console.log(i);

  let sql1 = `update subCategoryMaster set isActive = 0 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from subCategoryMaster where isActive=1 ;`;
      let sql3 = `select * from subCategoryMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// active sub-category---
app.get("/sub-category-active/:id", (req, res) => {
  let i = req.params;
  // console.log(i);
  let sql1 = `update subCategoryMaster set isActive = 1 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from subCategoryMaster where isActive=1 ;`;
      let sql3 = `select * from subCategoryMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// #######################################################
// unit----------------------------------------------------------------------------------
app.post("/add-unit", (req, res) => {
  console.log(req.body);
  const { unit } = req.body.unit;

  let sql = `insert into unitMaster (unitName) values("${unit}");`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from unitMaster where isActive=1 ;`;
      let sql3 = `select * from unitMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// fetch all unit---
app.get("/unit-list", (req, res) => {
  let sql2 = `select * from unitMaster where isActive=1 ;`;
  let sql3 = `select * from unitMaster where isActive=0 ;`;
  var activeList = [];
  var deactiveList = [];
  db.query(sql2, (err, active) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(active);
      activeList = active;
      // console.log(activeList);
    }
  });

  db.query(sql3, (err, deactive) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(deactive);
      deactiveList = deactive;
      // console.log(deactiveList);
    }
    res.send({ activeList: activeList, deactiveList: deactiveList });
  });
});

// delete unit---
app.get("/deactive-unit/:id", (req, res) => {
  let i = req.params;
  // console.log(i);

  let sql1 = `update unitMaster set isActive = 0 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from unitMaster where isActive=1 ;`;
      let sql3 = `select * from unitMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// active unit---
app.get("/unit-active/:id", (req, res) => {
  let i = req.params;
  // console.log(i);
  let sql1 = `update unitMaster set isActive = 1 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from unitMaster where isActive=1 ;`;
      let sql3 = `select * from unitMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// #################################################################################################################################
// item----------------------------------------------------------------------------------
app.post("/add-item", (req, res) => {
  // console.log(req.body);
  const {
    code,
    itemName,
    category,
    subCategory,
    HSNcode,
    unit,
    unitPrice,
    tax,
  } = req.body.item;
  // console.log(item);

  let cat = `select categoryName from categoryMaster where id= ${category}`;
  let unt = `select unitName from unitMaster where id= ${unit}`;
  let subCat = `select subCategoryName from subcategorymaster where id= ${subCategory}`;

  let catName;
  let uName;
  let scName;

  db.query(cat, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      catName = result[0].categoryName;
    }
  });
  db.query(unt, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      uName = result[0].unitName;
    }
  });
  db.query(subCat, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      scName = result[0].subCategoryName;
    }

    let sql = `insert into itemMaster 
      (itemCode, itemName, itemCategory,itemCategoryName, itemSubCategory,itemSubCategoryName,hsn ,itemUnit, itemUnitName, itemRate, itemTax) 
      values("${code}", "${itemName}", ${category},"${catName}", ${subCategory},"${scName}", "${HSNcode}", ${unit}, "${uName}",${unitPrice}, ${tax});`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result.insertId);
        let s = `insert into stock (itemId, totalValue)
            value(${result.insertId}, ${unitPrice})`;
        db.query(s, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            let sql2 = `select * from itemMaster where isActive=1 ;`;
            let sql3 = `select * from itemMaster where isActive=0 ;`;

            var activeList = [];
            var deactiveList = [];
            db.query(sql2, (err, active) => {
              if (err) {
                console.log(err);
              } else {
                // console.log("ACTIVE:  ", active);

                activeList = active;
                // console.log(activeList);
              }
            });

            db.query(sql3, (err, deactive) => {
              if (err) {
                console.log(err);
              } else {
                // console.log("DEACTIVE:  ", deactive);

                deactiveList = deactive;
                // console.log(deactiveList);
              }
              res.send({ activeList: activeList, deactiveList: deactiveList });
            });
          }
        });
      }
    });
  });
});

// fetch all item---
app.get("/item-list", (req, res) => {
  let sql2 = `select * from itemMaster where isActive=1 ;`;
  let sql3 = `select * from itemMaster where isActive=0 ;`;

  var activeList = [];
  var deactiveList = [];
  db.query(sql2, (err, active) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("ACTIVE:  ", active);

      activeList = active;
      // console.log(activeList);
    }
  });

  db.query(sql3, (err, deactive) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("DEACTIVE:  ", deactive);

      deactiveList = deactive;
      // console.log(deactiveList);
    }
    res.send({ activeList: activeList, deactiveList: deactiveList });
  });
});

// delete unit---
app.get("/deactive-item/:id", (req, res) => {
  let i = req.params;
  // console.log(i);

  let sql1 = `update itemMaster set isActive = 0 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from itemMaster where isActive=1 ;`;
      let sql3 = `select * from itemMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// active unit---
app.get("/item-active/:id", (req, res) => {
  let i = req.params;
  // console.log(i);
  let sql1 = `update itemMaster set isActive = 1 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from itemMaster where isActive=1 ;`;
      let sql3 = `select * from itemMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// ################################################################################
// ----------------Vendor--------
// add new vendor--
app.post("/add-vendor", (req, res) => {
  // console.log(req.body.vendor);

  const {
    code,
    firmDtls,
    personalDtls,
    contactDtls,
    bank,
  } = req.body.vendor.data;

  // console.log(bank.name);

  let sql = `insert into vendorMaster
              (vendorCode, vendorName, vendorCategory, vendorStatus, gst,pan,address ,city, state, pin, country, mobile, mobile2, email, email2, website, bankName, ifsc, accountNo, branch)
    values("${code}", "${firmDtls.firmName}", "${firmDtls.catagory}","${firmDtls.firmStatus}", "${firmDtls.gst}","${firmDtls.pan}", "${personalDtls.address}", "${personalDtls.city}", "${personalDtls.state}","${personalDtls.pin}", "${firmDtls.counrty}","${contactDtls.mobile}", "${contactDtls.mobile2}","${contactDtls.email}","${contactDtls.email2}","${contactDtls.website}","${bank.name}","${bank.ifsc}","${bank.acc}","${bank.branch}" );`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
    }
  });

  res.send("done!");
});

// fetch all vendor---
app.get("/vendor-list", (req, res) => {
  let sql2 = `select * from vendorMaster where isActive=1 ;`;
  let sql3 = `select * from vendorMaster where isActive=0 ;`;

  var activeList = [];
  var deactiveList = [];
  db.query(sql2, (err, active) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("ACTIVE:  ", active);
      activeList = active;
      // console.log(activeList);
    }
  });

  db.query(sql3, (err, deactive) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("DEACTIVE:  ", deactive);
      deactiveList = deactive;
      // console.log(deactiveList);
    }
    res.send({ activeList: activeList, deactiveList: deactiveList });
  });
});

// delete vendor---
app.get("/deactive-vendor/:id", (req, res) => {
  let i = req.params;
  // console.log(i);

  let sql1 = `update vendorMaster set isActive = 0 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from vendorMaster where isActive=1 ;`;
      let sql3 = `select * from vendorMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// active vendor---
app.get("/vendor-active/:id", (req, res) => {
  let i = req.params;
  // console.log(i);
  let sql1 = `update vendorMaster set isActive = 1 where id=${i.id};`;
  db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from vendorMaster where isActive=1 ;`;
      let sql3 = `select * from vendorMaster where isActive=0 ;`;
      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// ############################################################################

// generate vendor code
app.get("/vendor-code-generate", (req, res) => {
  let sql = `SELECT id FROM vendormaster ORDER BY id DESC LIMIT 1`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("Vendor list:   ", result.length);
      let id;
      if (result.length > 0) {
        id = result[0].id;
        res.send({ id: id });
      } else {
        res.send({ id: 0 });
      }
    }
  });
});

// generate item code
app.get("/item-code-generate", (req, res) => {
  let sql = `SELECT id FROM itemmaster ORDER BY id DESC LIMIT 1`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let id;
      if (result.length > 0) {
        id = result[0].id;
        res.send({ id: id });
      } else {
        res.send({ id: 0 });
      }
    }
  });
});

// purchase-enrty-code-generate
// generate item code
app.get("/purchase-enrty-code-generate", (req, res) => {
  let sql = `SELECT id FROM purchaseentry ORDER BY id DESC LIMIT 1`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let id;
      if (result.length > 0) {
        id = result[0].id;
        res.send({ id: id });
      } else {
        res.send({ id: 0 });
      }
    }
  });
});

// get-stock-item
app.get("/get-item/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  let sql = `SELECT * FROM itemmaster WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result[0]);
      res.send({ data: result[0] });
    }
  });
});

// get-vendor
// get-stock-item
app.get("/get-vendor/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  let sql = `SELECT id, vendorCode, vendorName, city, gst, mobile  FROM vendormaster WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result[0]);
      res.send({ data: result[0] });
    }
  });
});

// get-stock-item
app.get("/get-stock-item/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  let sql = `SELECT * FROM stock WHERE itemId=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result[0]);
      res.send({ data: result[0] });
    }
  });
});

// add-purchase-bill
app.post("/add-purchase-bill", (req, res) => {
  // console.log(req.body);

  const { purBillData } = req.body;
  const { itemData } = purBillData;

  // console.log(itemData);

  let sql = `insert into purchaseEntry
              ( billId, purchaseDate, vendorId,subTotalAmount, totalTaxAmount ,netAmount, pkgAmount ,dlvAmount, billType, paidAmount, dueAmount)
    values("${purBillData.billId}", "${purBillData.billDate}", "${purBillData.vendorId}","${purBillData.subTotal}", "${purBillData.totalTaxAmt}","${purBillData.totalAmt}", "${purBillData.pkgAmt}", "${purBillData.dlvAmt}", "${purBillData.billType}","${purBillData.billPaid}", "${purBillData.billDue}" );`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
    }
  });

  let sql2 =
    `insert into purchaseitemlist 
  ( itemId, itemName, purchaseBillId, qty, total)
  values` +
    itemData.map((data, i) => {
      return `("${data.itemId}","${data.itemName}" ,"${purBillData.billId}", "${data.qty}","${data.total}" )`;
    });

  db.query(sql2, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
    }
  });

  itemData.map((data, i) => {
    let s = `update stock set totalQty=${data.qty} , totalActiveQty= ${data.qty}  where itemId = ${data.itemId} `;
    db.query(s, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
      }
    });
  });

  res.send("done!");
});

// adjustment--
app.post("/stock-adjustment", (req, res) => {
  // console.log("Data sended:    ", req.body.data);

  const {
    itemId,
    action,
    adjQtn,
    mdfDate,
    remark,
    minQty,
    totalQty,
    dmg,
  } = req.body.data;

  let t =
    action === "Add to stock"
      ? Number(totalQty + adjQtn)
      : action === "Minus from stock"
        ? Number(totalQty - adjQtn)
        : totalQty;

  let d = action === "Damaged" ? dmg + adjQtn : dmg;

  let ta = Number(t - d);

  let rate = `SELECT itemRate FROM itemmaster where id =${itemId};`;

  let tv;
  let r;

  db.query(rate, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      r = result[0].itemRate;
      // console.log(r);
      tv = ta * r;
      let sql = `update stock set totalQty=${t} , totalActiveQty=${ta}, minQty= ${minQty}, damage= ${d} , totalValue=${tv} where itemId = ${itemId} `;
      let adj = `insert into adjustment (itemId, adjQty, modifyOn, actionType, remark )
  values(${itemId}, ${adjQtn}, '${mdfDate}', "${action}", "${remark}" ) `;

      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          db.query(adj, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ message: "successful" });
            }
          });
        }
      });
    }
  });

  // res.send({ message: "ERROR ! Try again !" });
});

// get-item-update
app.post("/update-item", (req, res) => {
  // console.log(req.body.data);
  const {
    id,
    itemCode,
    itemName,
    itemCategory,
    itemSubCategory,
    hsn,
    itemUnit,
    itemRate,
    itemTax,
  } = req.body.data;

  let cat = `select categoryName from categoryMaster where id= ${itemCategory}`;
  let unt = `select unitName from unitMaster where id= ${itemUnit}`;
  let subCat = `select subCategoryName from subcategorymaster where id= ${itemSubCategory}`;

  let catName;
  let uName;
  let scName;

  db.query(cat, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      catName = result[0].categoryName;
    }
  });
  db.query(unt, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      uName = result[0].unitName;
    }
  });
  db.query(subCat, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      scName = result[0].subCategoryName;
    }

    let sql = `UPDATE itemMaster 
      set  itemName="${itemName}", itemCategory=${Number(
      itemCategory
    )},itemCategoryName="${catName}", itemSubCategory=${Number(
      itemSubCategory
    )},itemSubCategoryName="${scName}",hsn="${hsn}" ,itemUnit=${itemUnit}, itemUnitName="${uName}", itemRate=${Number(
      itemRate
    )}, itemTax=${Number(itemTax)} WHERE id =${Number(id)}`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let sql2 = `select * from itemMaster where isActive=1 ;`;
        let sql3 = `select * from itemMaster where isActive=0 ;`;

        var activeList = [];
        var deactiveList = [];
        db.query(sql2, (err, active) => {
          if (err) {
            console.log(err);
          } else {
            // console.log("ACTIVE:  ", active);

            activeList = active;
            // console.log(activeList);
          }
        });

        db.query(sql3, (err, deactive) => {
          if (err) {
            console.log(err);
          } else {
            // console.log("DEACTIVE:  ", deactive);

            deactiveList = deactive;
            // console.log(deactiveList);
          }
          res.send({ activeList: activeList, deactiveList: deactiveList });
        });
      }
    });
  });
});

// get-category-update
app.post("/update-category", (req, res) => {
  // console.log(req.body.data);
  const { id, cat } = req.body.data;

  let sql = `UPDATE categoryMaster 
      set  categoryName="${cat}" where id =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from categoryMaster where isActive=1 ;`;
      let sql3 = `select * from categoryMaster where isActive=0 ;`;

      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("ACTIVE:  ", active);

          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("DEACTIVE:  ", deactive);

          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// update unit
app.post("/update-unit", (req, res) => {
  // console.log(req.body.data);
  const { id, unit } = req.body.data;

  let sql = `UPDATE unitMaster 
      set  unitName="${unit}" where id =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from unitMaster where isActive=1 ;`;
      let sql3 = `select * from unitMaster where isActive=0 ;`;

      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("ACTIVE:  ", active);

          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("DEACTIVE:  ", deactive);

          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// update sub categoy
app.post("/update-sub-category", (req, res) => {
  // console.log("UPDATE: ", req.body.data);
  const { id, categoryId, subCategoryName } = req.body.data;

  let s = `SELECT categoryName FROM categorymaster where id= ${categoryId}`;
  let cn;
  db.query(s, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      cn = result[0].categoryName;

      let sql = `UPDATE subCategoryMaster
      set  subCategoryName="${subCategoryName}", categoryId=${categoryId}, categoryName="${cn}" where id =${id}`;
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          let sql2 = `select * from subCategoryMaster where isActive=1 ;`;
          let sql3 = `select * from subCategoryMaster where isActive=0 ;`;

          var activeList = [];
          var deactiveList = [];
          db.query(sql2, (err, active) => {
            if (err) {
              console.log(err);
            } else {
              // console.log("ACTIVE:  ", active);

              activeList = active;
              // console.log(activeList);
            }
          });

          db.query(sql3, (err, deactive) => {
            if (err) {
              console.log(err);
            } else {
              // console.log("DEACTIVE:  ", deactive);

              deactiveList = deactive;
              // console.log(deactiveList);
            }
            res.send({ activeList: activeList, deactiveList: deactiveList });
          });
        }
      });
    }
  });
});

// update-vendor
app.post("/update-vendor", (req, res) => {
  // console.log("UPDATE: ", req.body.data.data);
  const {
    id,
    code,
    firmDtls,
    personalDtls,
    contactDtls,
    bank,
  } = req.body.data.data;

  // console.log(firmDtls);

  let sql = `UPDATE vendorMaster SET
   vendorName="${firmDtls.firmName}", vendorCategory="${firmDtls.catagory}", vendorStatus="${firmDtls.firmStatus}", gst="${firmDtls.gst}",pan="${firmDtls.pan}",address="${personalDtls.address}" ,city="${personalDtls.city}", state="${personalDtls.state}", pin="${personalDtls.pin}", country="${firmDtls.counrty}", mobile="${contactDtls.mobile}", mobile2="${contactDtls.mobile2}", email="${contactDtls.email}", email2="${contactDtls.email2}", website="${contactDtls.website}", bankName="${bank.name}", ifsc="${bank.ifsc}", accountNo="${bank.acc}", branch="${bank.branch}" where id = ${id}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let sql2 = `select * from vendorMaster where isActive=1 ;`;
      let sql3 = `select * from vendorMaster where isActive=0 ;`;

      var activeList = [];
      var deactiveList = [];
      db.query(sql2, (err, active) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("ACTIVE:  ", active);
          activeList = active;
          // console.log(activeList);
        }
      });

      db.query(sql3, (err, deactive) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("DEACTIVE:  ", deactive);
          deactiveList = deactive;
          // console.log(deactiveList);
        }
        res.send({ activeList: activeList, deactiveList: deactiveList });
      });
    }
  });
});

// purchase list
app.get("/purchase-list", (req, res) => {
  let sql = `SELECT p.id, p.billId, p.purchaseDate, p.vendorId, v.vendorName,p.subTotalAmount, p.totalTaxAmount, p.netAmount,p.dlvAmount, p.pkgAmount, p.billType, p.paidAmount, p.dueAmount FROM purchaseentry as p join vendormaster as v on p.vendorId = v.id`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send({ data: result });
    }
  });
});

// /get-purchase-item/:id
app.get("/get-purchase-item/:billId", (req, res) => {
  console.log(req.params);
  const { billId } = req.params;

  let sql = `SELECT p.id, p.itemId, p.purchaseBillId, p.qty, p.total, i.itemName, i.itemCode, i.itemRate, i.itemTax  FROM purchaseitemlist as p join itemmaster as i on itemId = i.id where purchaseBillId = "${billId}"`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({ data: result });
    }
  });
});

app.get("/get-item/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  let sql = `SELECT * FROM itemmaster WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result[0]);
      res.send({ data: result[0] });
    }
  });
});

app.post("/update-purchase-bill", (req, res) => {
  console.log(req.body.data);
  //  const { purBillData } = req.body;
  const { itemData } = req.body.data;

  // console.log(itemData);

  let sql = `UPDATE purchaseEntry
                purchaseDate="${purBillData.billDate}", vendorId="${purBillData.vendorId}",subTotalAmount="${purBillData.subTotal}", totalTaxAmount="${purBillData.totalTaxAmt}" ,netAmount="${purBillData.totalAmt}", pkgAmount="${purBillData.pkgAmt}" ,dlvAmount="${purBillData.dlvAmt}", billType="${purBillData.billType}", paidAmount="${purBillData.billPaid}", dueAmount="${purBillData.billDue}" where id = ${id} `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
    }
  });

  // let sql2 =
  //   `insert into purchaseitemlist
  // ( itemId, itemName, purchaseBillId, qty, total)
  // values` +
  //   itemData.map((data, i) => {
  //     return `("${data.itemId}","${data.itemName}" ,"${purBillData.billId}", "${data.qty}","${data.total}" )`;
  //   });

  // db.query(sql2, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // console.log(result);
  //   }
  // });

  // itemData.map((data, i) => {
  //   let s = `update stock set totalQty=${data.qty} , totalActiveQty= ${data.qty}  where itemId = ${data.itemId} `;
  //   db.query(s, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       // console.log(result);
  //     }
  //   });
  // });

  res.send("done!");
});

app.listen(PORT, () => console.log(`Server running.... ${PORT} `));
