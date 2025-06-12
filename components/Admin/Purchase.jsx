import React from "react";
import purchaseStyle from "./Purchase.module.css";
import { TextField, Button, styled } from "@mui/material";
// import CloudUploadIcon from '@mui/icons-material';

import MyDropdown from "./AdminComponents/MyDropdown";

import { useState, useEffect } from "react";
// import Drawer from "./AdminComponents/Drawer";
import { Link } from "react-router-dom";

const DateStyle = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: 45,
    padding: "0 12px",
    backgroundColor: "#fff",
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 14px",
  },
  "& label": {
    backgroundColor: "#fff",
    padding: "0 4px",
    transform: "translate(14px, -9px) scale(0.75)", // label upar ho
  },
}));

const InputFields = styled(TextField)(({ theme }) => ({
  width: "49%",
  "& .MuiInputBase-root": {
    height: 40, // Proper height for input box
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 14px", // Adjust padding inside
  },
}));

const ButtonStyle = styled(Button)`
  width: 98.5%;
  margin-top: 10px;
`;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const OptionButton = styled(Button)(({ theme }) => ({
  width: "50%",
  margin: "10px",
}));

// const [vendors, setVendors] = useState([]);

// const fetchVendors = async () => {
//     try {
//       const token = localStorage.getItem("access_token");

//       const response = await fetch("http://localhost:8000/api/vendors/?view=minimal", {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch vendors");
//       }

//       const data = await response.json();
//       console.log("Vendor data ", data);
//       setVendors(data);
//     } catch (err) {
//       console.error("Error fetching vendors:", err.message);
//     }
//   };

//  useEffect(() => {
//     fetchVendors(); // ✅ Auto-call on first render
//   }, []); // 👈 empty dependency array = only once on mount

function Purchase() {
  const [vendors, setVendors] = useState([]);
  const [Type, setType] = useState([]);
  const [items, setItems] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Company, setCompany] = useState([]);

  const [vendorName, setVendorName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [TypeName, setTypeName] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [grandtotal, setgrandtotal] = useState("");
  const [tax, setTax] = useState(5);
  const [discount, setDiscount] = useState(20);
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryDate, setExpirydate] = useState("");

  const [purchasedata, setPurchase] = useState("");

  const PriceCalculate = async () => {
    const q = parseFloat(quantity) || 0;
    const p = parseFloat(price) || 0;
    const d = parseFloat(discount) || 0;
    const t = parseFloat(tax) || 0;

    const sub_price = q * p;
 
    setSubtotal(sub_price.toFixed(2));
    // setPrice(sub_price.toFixed(2));
    console.log("sub price ", sub_price);

    const taxAmount = (sub_price * t) / 100;
    const discountAmount = (sub_price * d) / 100;
    const grandTotal = sub_price + taxAmount - discountAmount;

    setgrandtotal(grandTotal.toFixed(2));
    console.log("grand total ", grandTotal);
  };

  //|| !subtotal ||!grandtotal ||!tax ||discount
  const handleSave = async () => {
    if (
      !TypeName ||
      !companyName ||
      !itemName ||
      !CategoryName ||
      !quantity ||
      !price
    ) {
      alert("Please fill all required fields and select a valid category.");
      return;
    }
    const payload = {
      vendor_name: vendorName,
      company_name: companyName,
      category_name: CategoryName,
      type_name: TypeName,
      purchase_date: purchaseDate,
      expiry_date: expiryDate,
      item_name: itemName,
      quantity: quantity,
      price_per_item: price,
      sub_total: subtotal,
      discount: discount,
      tax: tax,
      grand_total: grandtotal,
    };

    console.log("Payload to be sent:", payload);

    // ✅ Function to get new access token using refresh token
    const refreshAccessToken = async () => {
      const res = await fetch("http://localhost:8000/api/token/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: localStorage.getItem("refresh_token"),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.access);
        return data.access;
      } else {
        throw new Error("Token refresh failed");
      }
    };

    const sendPurchaseRequest = async (token) => {
      const response = await fetch("http://localhost:8000/api/purchase/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
      return await response.json();
    };
    try {
      let token = localStorage.getItem("access_token");
      let data;

      try {
        data = await sendPurchaseRequest(token); // 🔁 Try first
      } catch (error) {
        if (error.message === "Unauthorized") {
          console.log("Token expired. Refreshing...");
          token = await refreshAccessToken(); // ♻️ Get new token
          data = await sendPurchaseRequest(token); // 🔁 Retry request
        } else {
          throw error;
        }
      }

      console.log("Saved ✅:", data);
      alert("Purchase Data Is Saved");
      fetchPurchase();
      // await fetchPurchase(); // ✅ refresh list after save
    } catch (err) {
      console.error("Purchase save failed ❌", err.message);
      alert("Save failed ❌");
    }
  };

  const fetchVendors = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch(
        "http://localhost:8000/api/vendors/?view=minimal",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch vendors");
      }

      const data = await response.json();
      console.log("Vendor data", data);
      setVendors(data);
    } catch (err) {
      console.error("Error fetching vendors:", err.message);
    }
  };

  const fetchType = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch(
        "http://localhost:8000/api/itemtype/?view=minimal",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Type");
      }

      const data = await response.json();
      console.log("Type data:", data);
      setType(data);
    } catch (err) {
      console.error("Error fetching Type:", err.message);
    }
  };

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch(
        "http://localhost:8000/api/items/?view=minimal",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }

      const data = await response.json();
      console.log("Item data:", data);
      setItems(data);
    } catch (err) {
      console.error("Error fetching items:", err.message);
    }
  };

  const fetchCategory = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch(
        "http://localhost:8000/api/itemcategory/?view=minimal",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Category");
      }

      const data = await response.json();
      console.log("Category data:", data);
      setCategory(data);
    } catch (err) {
      console.error("Error fetching Category:", err.message);
    }
  };

  const fetchCompany = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch(
        "http://localhost:8000/api/company/?view=minimal",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Company");
      }

      const data = await response.json();
      console.log("Company data:", data);
      setCompany(data);
    } catch (err) {
      console.error("Error fetching Company:", err.message);
    }
  };

  const fetchPurchase = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch("http://localhost:8000/api/purchase/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Purchase data");
      }

      const data = await response.json();
      console.log("Purchase data:", data);
      setPurchase(data);
    } catch (err) {
      console.error("Error fetching purchase data:", err.message);
    }
  };

  useEffect(() => {
    fetchVendors(); // ✅ Auto-call on first render
    fetchType();
    fetchItems();
    fetchCategory();
    fetchCompany();
    fetchPurchase();
  }, []); // 👈 empty dependency array = only once on mount

  useEffect(() => {
    PriceCalculate();
  }, [quantity, price, discount, tax]);
  //  const navigate = useNavigate();

  // const handleDrawerRoute = () => {
  //   navigate("/Drawer.jsx"); // ya jis route pe Drawer dikh raha ho
  // };

  return (
    <div className={purchaseStyle.container}>
      <div className={`${purchaseStyle.box} ${purchaseStyle.boxUpper}`}>
        <div className={`${purchaseStyle.subBox} ${purchaseStyle.subBox1}`}>
          <div className={purchaseStyle.subBox1_box1}>
            <div className={purchaseStyle.dropBoxCss}>
              <span className={purchaseStyle.typee}>
                <MyDropdown
                  label="Vendor"
                  placeholder="Vendor"
                  options={vendors.map((v) => v.vendor_name)}
                  onSelect={(val) => setVendorName(val)}
                />{" "}
              </span>{" "}
              <span>
                <Link to="/vendorManagement">
                  <img
                    src="/images/Adminimages/add.svg"
                    alt=""
                    srcset=""
                    width={"35px"}
                    // onClick={handleDrawerRoute}
                    style={{ cursor: "pointer" }}
                  ></img>
                </Link>{" "}
                {/* <img
                  src="/images/Adminimages/add.svg"
                  alt=""
                  srcset=""
                  width={"35px"}
                  onClick={handleDrawerRoute}
                  style={{cursor:"pointer"}}
                /> */}
              </span>
            </div>
            <div className={purchaseStyle.dropBoxCss}>
              <span className={purchaseStyle.typee}>
                <MyDropdown
                  label="Company"
                  placeholder="Company"
                  options={Company.map((v) => v.Company)}
                  onSelect={(val) => setCompanyName(val)}
                />{" "}
              </span>{" "}
              <span>
              {/* <Link to={"/ItemLayout/addCompany"}>
                  <img
                    src="/images/Adminimages/add.svg"
                    alt="type add"
                    srcset=""
                    width={"35px"}
                  />
                </Link> */}
                {/* <img
                  src="/images/Adminimages/add.svg"
                  alt=""
                  srcset=""
                  width={"35px"}
                /> */}
              </span>
            </div>
            <div className={purchaseStyle.dropBoxCss}>
              <span className={purchaseStyle.typee}>
                <MyDropdown
                  label="Category"
                  placeholder="Category"
                  options={Category.map((v) => v.category)}
                  onSelect={(val) => setCategoryName(val)}
                />{" "}
              </span>{" "}
              <span>
                {/* <Link to={"/ItemLayout/addCategory"}>
                  <img
                    src="/images/Adminimages/add.svg"
                    alt="type add"
                    srcset=""
                    width={"35px"}
                  />
                </Link> */}
                {/* <img
                  src="/images/Adminimages/add.svg"
                  alt=""
                  srcset=""
                  width={"35px"}  
                /> */}
              </span>
            </div>
            <div className={purchaseStyle.dropBoxCss}>
              <span className={purchaseStyle.typee}>
                <MyDropdown
                  label="Type"
                  placeholder="Type"
                  options={Type.map((v) => v.typename)}
                  onSelect={(val) => setTypeName(val)}
                />{" "}
              </span>{" "}
              <span>
                {/* <Link to={"/ItemLayout/addType"}>
                  <img
                    src="/images/Adminimages/add.svg"
                    alt="type add"
                    srcset=""
                    width={"35px"}
                  />
                </Link> */}
                {/* <img
                  src="/images/Adminimages/add.svg"
                  alt=""
                  srcset=""
                  width={"35px"}
                /> */}
              </span>
            </div>
          </div>
          <div className={purchaseStyle.rightSide}>
            <div className={purchaseStyle.dateItemSearch}>
              <div className={purchaseStyle.dateStyle}>
                {" "}
                <DateStyle
                  id="outlined-basic"
                  label="Purchase date"
                  variant="outlined"
                  type="date"
                  dateFormat="yyyy-MM-dd"
                  onChange={(e) => {
                    console.log("Date:", e.target.value); // Optional: Debug
                    setPurchaseDate(e.target.value); // Yeh sirf string "2025-05-30" bhejega
                  }}
                />
              </div>
              <div className={purchaseStyle.dateStyle}>
                {" "}
                <DateStyle
                  id="outlined-basic"
                  label="Expiry date"
                  variant="outlined"
                  type="date"
                  dateFormat="yyyy-MM-dd"
                  // onSelect={(val)=>setExpirydate(val)}
                  // onChange={(e) => setExpirydate(e.target.value)}
                  onChange={(e) => {
                    console.log("Date:", e.target.value); // Optional: Debug
                    setExpirydate(e.target.value); // Yeh sirf string "2025-05-30" bhejega
                  }}
                />
              </div>
              <span
                className={`${purchaseStyle.dateStyle} ${purchaseStyle.searchItem}`}
              >
                <MyDropdown
                  label="Type"
                  placeholder="Item"
                  options={items.map((v) => v.item_name)}
                  onSelect={(val) => setItemName(val)}
                />

                <span>
                  <Link to={"/ItemLayout/addItem"}>
                    <img
                      src="/images/Adminimages/add.svg"
                      alt="type add"
                      srcset=""
                      width={"35px"}
                    />
                  </Link>
                  {/* <img
                    src="/images/Adminimages/add.svg"
                    alt=""
                    srcset=""
                    width={"35px"}
                  /> */}
                </span>
              </span>
            </div>

            <div className={purchaseStyle.divQTYPrice}>
              <InputFields
                id="outlined-basic"
                label="QTY"
                variant="outlined"
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <InputFields
                id="outlined-basic"
                label="Price/item"
                variant="outlined"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />{" "}
            </div>
            <div className={purchaseStyle.Button}>
              <ButtonStyle variant="contained" onClick={handleSave}>
                Add
              </ButtonStyle>
            </div>
          </div>
        </div>
        <div className={`${purchaseStyle.subBox} ${purchaseStyle.subBox2}`}>
          <div className={purchaseStyle.scrollableTable}>
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Vendor</th>
                  <th>Company</th>
                  <th>Category</th>
                  <th>Purchase date</th>
                  <th>Expiry date</th>
                  <th>Type</th>
                  <th>Item</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>
                    <img
                      src="/images/Adminimages/delete.svg"
                      alt="delete"
                      width="30x"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {purchasedata === null ? (
                  // Loading state (initial fetch)
                  <tr>
                    <td colSpan="11" className="text-center">
                      Loading data...
                    </td>
                  </tr>
                ) : Array.isArray(purchasedata) && purchasedata.length > 0 ? (
                  // Data exists - render rows
                  purchasedata.map((item, index) => (
                    <tr key={index || item.id || `row-${index}`}>
                      {" "}
                      {/* Better key handling */}
                      <td>{index + 1}</td>
                      <td>{item.vendor_name || "-"}</td>
                      <td>{item.company_name || "-"}</td>
                      <td>{item.category_name || "-"}</td>
                      <td>{item.purchase_date || "-"}</td>
                      <td>{item.expiry_date || "-"}</td>
                      <td>{item.type_name || "-"}</td>
                      <td>{item.item_name || "-"}</td>
                      <td>{item.quantity || "0"}</td>
                      <td>
                        ₹{item.price_per_item ? Number(item.price_per_item).toFixed(2) : "0.00"}
                      </td>
                      <td>
                        <img
                          src="/images/Adminimages/delete.svg"
                          alt="delete"
                          width="30px"
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  // Empty state (no data available)
                  <tr>
                    <td colSpan="11" className="text-center">
                      {purchasedata && purchasedata.length === 0
                        ? "No purchase records found"
                        : "Failed to load data"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${purchaseStyle.subBox} ${purchaseStyle.subBox3}`}>
          <div className={purchaseStyle.subBox3_upper}>
            <div className={purchaseStyle.subBox3_sub}>
                <div className={purchaseStyle.subBox3_sub_sub1}>Tax</div>
              <div className={purchaseStyle.subBox3_sub_sub1}>{tax}%</div>
             
            </div>
            <div className={purchaseStyle.subBox3_sub}>
              <div className={purchaseStyle.subBox3_sub_sub1}>Discount</div>
              <div className={purchaseStyle.subBox3_sub_sub1}>₹{discount}</div>
            </div>{" "}
          </div>
          <div className={purchaseStyle.subBox3_upper}>
            <div className={purchaseStyle.subBox3_sub}>
              <div className={purchaseStyle.subBox3_sub_sub1}>Sub total</div>
              <div className={purchaseStyle.subBox3_sub_sub1}>₹{subtotal}</div>
            </div>
            <div className={purchaseStyle.subBox3_sub}>
              <div className={purchaseStyle.subBox3_sub_sub1}>Grand Total </div>
              <div className={purchaseStyle.subBox3_sub_sub1}>
                ₹{grandtotal}
              </div>
            </div>{" "}
          </div>

          <div className={purchaseStyle.subBox3_sub_sub1_option}>
            <OptionButton variant="contained">Generate Invoice</OptionButton>
            <OptionButton
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={
                <img
                  src="/images/Adminimages/upload.svg"
                  alt="upload"
                  width="24px"
                  style={{ marginRight: 4, filter: "invert(1)" }}
                />
              }
            >
              Generate Invoce
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </OptionButton>

            <OptionButton
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={
                <img
                  src="/images/Adminimages/upload.svg"
                  alt="upload"
                  width="24px"
                  style={{ marginRight: 4, filter: "invert(1)" }}
                />
              }
            >
              Receive Invoice
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </OptionButton>
            <OptionButton variant="contained">Save</OptionButton>
          </div>
        </div>
      </div>
      {/* <div className={`${purchaseStyle.box} ${purchaseStyle.boxLower}`}>Extra space</div> */}
    </div>
  );
}

export default Purchase;
