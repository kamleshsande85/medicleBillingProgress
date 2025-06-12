import React from "react";
import adminStyles from "./Admin.module.css";
import { Input, OptionInput } from "./AdminComponents/Input";

import vendorStyle from "./AdminComponents/Drawer.module.css";
import { useState, useEffect } from "react";
import MyDropdown from "./AdminComponents/MyDropdown";
import purchaseStyle from "./Purchase.module.css";

function ItemManagement() {
  const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  const [TypeName, setTypeName] = useState("");
  const [Type, setType] = useState([]);

  const [CategoryName, setCategoryName] = useState("");
  const [Category, setCategory] = useState([]);

  const [CompanyName, setCompanyName] = useState("");
  const [Company, setCompany] = useState([]);

  const [itemsAll, setItemAll] = useState("");

  // const medicines = [
  //   { name: setItems, category: setCategory, company: setCompany },
  // ];

  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    if (items.length && Type.length && Category.length && Company.length) {
      const combined = items.map((item, index) => ({
        id: item.id,
        name: item.item_name,
        type: Type[index]?.typename,
        category: Category[index]?.category,
        company: Company[index]?.Company,
      }));
      setMedicines(combined);
    }
  }, [items, Type, Category, Company]);
  console.log(medicines);

  // const handleAddItem = async () => {
  //   const payload = {
  //     item_name: itemName,
  //     category: CategoryName,
  //     typename: TypeName,
  //     Company: CompanyName,
  //   };
  //    console.log("Payload to be sent:", payload);
  //   if (!itemName.trim()) {
  //     alert("Item Name cannot be empty");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:8000/api/items/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ payload }),
  //     });

  //     if (response.ok) {
  //       const newItem = await response.json();
  //       setItemAll([...itemsAll, newItem]);
  //       setItemAll("");
  //       // alert("Item add successfully");
  //     } else {
  //       alert("Failed to add item");
  //     }
  //   } catch (error) {
  //     console.error("Error adding item:", error);
  //   }
  // };


  const handleAddItem = async () => {
  const payload = {
    item_name: itemName,
    category: CategoryName,
    typename: TypeName,
    Company: CompanyName,
  };
  
  console.log("Payload to be sent:", payload);

  if (!itemName.trim()) {
    alert("Item Name cannot be empty");
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/api/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // सीधे payload भेजें, उसे और ऑब्जेक्ट में न रैप करें
    });

    if (response.ok) {
      const newItem = await response.json();
      setItemAll([...itemsAll, newItem]);
      setItemName(""); // अन्य फील्ड्स भी रीसेट करें
      setCategoryName("");
      setTypeName("");
      setCompanyName("");
      alert("Item added successfully");
    } else {
      const errorData = await response.json();
      alert(`Failed to add item: ${errorData.message || response.statusText}`);
    }
  } catch (error) {
    console.error("Error adding item:", error);
    alert("An error occurred while adding the item");
  }
};

 const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/items/${id}/`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setItemAll(itemsAll.filter((item) => item.id !== id));
        alert("Item  deleted");
      } else {
        alert("Failed to delete Item");
      }
    } catch (error) {
      console.error("Error deleting Item:", error);
    }
  };


  // const handleAddType = async () => {
  //   if (!TypeName.trim()) {
  //     alert("Type Name cannot be empty");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:8000/api/itemtype/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ typename: TypeName }),
  //     });

  //     if (response.ok) {
  //       const newType = await response.json();
  //       setType([...Type, newType]);
  //       setTypeName("");
  //       // alert("Type add successfully");
  //     } else {
  //       alert("Failed to add Type");
  //     }
  //   } catch (error) {
  //     console.error("Error adding Type:", error);
  //   }
  // };

  // const handleAddCategory = async () => {
  //   if (!CategoryName.trim()) {
  //     alert("Category Name cannot be empty");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:8000/api/itemcategory/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ category: CategoryName }),
  //     });

  //     if (response.ok) {
  //       const newCategory = await response.json();
  //       setCategory([...Category, newCategory]);
  //       setCategoryName("");
  //       // alert("Category add successfully");
  //     } else {
  //       alert("Failed to add Category");
  //     }
  //   } catch (error) {
  //     console.error("Error adding Category:", error);
  //   }
  // };

  // const handleAddCompany = async () => {
  //   if (!CompanyName.trim()) {
  //     alert("Company Name cannot be empty");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:8000/api/company/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ Company: CompanyName }),
  //     });

  //     if (response.ok) {
  //       const newCompany = await response.json();
  //       setCompany([...Company, newCompany]);
  //       setCompanyName("");
  //       // alert("Company add successfully");
  //     } else {
  //       alert("Failed to add Company");
  //     }
  //   } catch (error) {
  //     console.error("Error adding Company:", error);
  //   }
  // };

  const handleAllAdd = () => {
    handleAddItem();
    // handleAddType();
    // handleAddCategory();
    // handleAddCompany();
    // alert("All Data Added Successfully");
  };

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch("http://localhost:8000/api/items/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }

      const data = await response.json();
      console.log("Item data:", data);
      setItemAll(data);
    } catch (err) {
      console.error("Error fetching items:", err.message);
    }
  };

  const fetchCategory = async () => {
    try {
      const token = localStorage.getItem("access_token");

      // const response = await fetch("http://localhost:8000/api/itemcategory/", {
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
  const fetchType = async () => {
    try {
      const token = localStorage.getItem("access_token");

      // const response = await fetch("http://localhost:8000/api/itemtype/", {
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

  const fetchCompany = async () => {
    try {
      const token = localStorage.getItem("access_token");

      // const response = await fetch("http://localhost:8000/api/company/", {
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

  const handleFetchAll = () => {
    fetchItems();
    fetchCategory();
    fetchType();
    fetchCompany();
  };

  useEffect(() => {
    fetchItems();
    fetchCategory();
    fetchType();
    fetchCompany();
    handleFetchAll();
  }, []);

  return (
    <div className={adminStyles.imContainer}>
      <div className={adminStyles.imContainerinner}>
        <div className={vendorStyle.container}>
          <div className={vendorStyle.box1}>
            <div
              className={vendorStyle.box1Upper}
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            >
              <span className={vendorStyle.RegiHeadLine}>
                <p>Item Dashboard Entry</p>
              </span>
              <span className={vendorStyle.dropDownImage}>
                <button
                  onClick={toggleDropdown}
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <img
                    src="/images/Adminimages/upArrow.svg"
                    width={"25px"}
                    alt="toggle"
                  />
                </button>
              </span>
            </div>
            <div
              className={vendorStyle.box1Lower}
              style={{
                height: isOpen ? "250px" : "0",
                opacity: isOpen ? 1 : 0,
                transition: "all 0.3s ease",
                border: "2px solid #053048",
              }}
            >
              <div className={vendorStyle.registrationContent}>
                <div className={vendorStyle.registrationLeft}>
                  <div
                    className={`${vendorStyle.registrationLeftBox} ${purchaseStyle.dropBoxCss}`}
                  >
                    {/* <p>Item Information 1 </p> */}
                    <span
                      className={`${vendorStyle.typee} ${vendorStyle.itemInput}`}
                    >
                      <Input
                        type="text"
                        placeholder="Item Name"
                        required={true}
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                      />
                    </span>
                    {/* <Input
                      type="text"
                      placeholder="Type Name"
                      required={true}
                      value={TypeName}
                      onChange={(e) => setTypeName(e.target.value)}
                    /> */}
                    <span className={vendorStyle.typee}>
                      <MyDropdown
                        label="Type"
                        placeholder="Type"
                        options={Type.map((v) => v.typename)}
                        onSelect={(val) => setTypeName(val)}
                      />{" "}
                    </span>
                    {/* <Input
                      type="text"
                      placeholder="Category Name"
                      required={true}
                      value={CategoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                    /> */}
                    <span className={vendorStyle.typee}>
                      <MyDropdown
                        label="Category"
                        placeholder="Category"
                        options={Category.map((v) => v.category)}
                        onSelect={(val) => setCategoryName(val)}
                      />{" "}
                    </span>
                    {/* <Input
                      Company="text"
                      placeholder="Company Name"
                      required={true}
                      value={CompanyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    /> */}
                    <span className={vendorStyle.typee}>
                      <MyDropdown
                        label="Company"
                        placeholder="Company"
                        options={Company.map((v) => v.Company)}
                        onSelect={(val) => setCompanyName(val)}
                      />{" "}
                    </span>

                    {/* <OptionInput options={categories} required="true" />

                    <OptionInput options={companyNames} required="true" />

                    <Input
                      type="number"
                      placeholder="Price Per Unit "
                      required="true"
                    />
                    <Input
                      type="number"
                      placeholder="Stock Quantity "
                      required="true"
                    />
                    <Input
                      type="number"
                      placeholder="Reorder Level"
                      required="true"
                    /> */}
                  </div>
                </div>
                <div className={vendorStyle.registrationRight}>
                  <span>
                    <button onClick={handleAllAdd}>Add</button>
                  </span>
                  <span>
                    <button  onClick={() => window.location.reload()} >Clear</button>
                  </span>
                  <span>
                    <button>Close</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={vendorStyle.box2}>
            <hr />
            <div className={vendorStyle.box2Upper}>
              <div className={vendorStyle.box2UpperSerchBox}>
                <input type="text" placeholder="Search....................." />
              </div>
              <div className={vendorStyle.box2UpperFilterOption}>
                <span>
                  <input type="radio" name="" id="" />
                  Active
                </span>
                <span>
                  <input type="radio" name="" id="" />
                  Inactive
                </span>
                <span className={vendorStyle.box2UpperFilterOptionText}>
                  <input type="text" name="" id="" placeholder="Option1" />
                </span>
                <span className={vendorStyle.box2UpperFilterOptionText}>
                  <input type="text" name="" id="" placeholder="Option2" />
                </span>
                <span className={vendorStyle.box2UpperFilterOptionText}>
                  <input type="text" name="" id="" placeholder="Option3" />
                </span>
              </div>
            </div>
            <hr />
            <div
              className={`${vendorStyle.box2Lower} ,${vendorStyle.tableContainer}`}
            >
              <table>
                <thead>
                  {" "}
                  <tr className={vendorStyle.TableHead}>
                    <th>Item</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th style={{ textAlign: "center" }} colSpan={3}>
                      Action
                    </th>
                    {/* <th style={{ textAlign: "center" }}>View Details</th> */}
                    {/* <th style={{ textAlign: "center" }}>Order</th> */}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(itemsAll) && itemsAll.length > 0 ? (
                    itemsAll.map((item) => (
                      <tr key={item.id || item._id}>
                        {" "}
                        {/* Fallback to _id if id doesn't exist */}
                        <td>{item.item_name || "N/A"}</td>
                        <td>{item.typename || "N/A"}</td>
                        <td>{item.category || "N/A"}</td>
                        <td>{item.Company || "N/A"}</td>
                        {/* Edit Button */}
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="icon-button"
                            // onClick={() => handleEdit(item.id)}
                            aria-label="Edit"
                          >
                            <img
                              src="/images/Adminimages/edit.svg"
                              alt="Edit"
                              width="30px"
                              height="30px"
                            />
                          </button>
                        </td>
                        {/* Delete Button */}
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="icon-button"
                            onClick={() => handleDelete(item.id)} 
                            //  onClick={() => handleDelete(value.id)}
                            aria-label="Delete"
                          >
                            <img
                              src="/images/Adminimages/delete.svg"
                              alt="Delete"
                              width="30px"
                              height="30px"
                            />  
                           
                          </button>
                        </td>
                        {/* View Button */}
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="view-button"
                            // onClick={() => handleView(item.id)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center" }}>
                        {Array.isArray(itemsAll)
                          ? "No items found"
                          : "Loading..."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className={adminStyles.item3}>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            padding: "12px",
            fontWeight: "bold",
          }}
        >
          Item Details
        </p>
        <hr />
        <div className={adminStyles.item3Lower}>
          <p>Item : </p>
          <p>Type : </p>
          <p>Category : </p>
          <p>Company : </p>
          <p>Purchase date : </p>
          <p>Expiry date : </p>
          <p>Stock : </p>
          <p>Price : </p>
          <p>Other : </p>
        </div>
      </div>
    </div>
  );
}

export default ItemManagement;
