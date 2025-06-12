// import React from "react";
// import ItemStyle from "./Admin.module.css";
// import { Input } from "./AdminComponents/Input";

// function AddItem() {
//   const items = [
//     {
//       id: 1,
//       name: "Stethoscope",
//       details: "Used by doctors to listen to heart and lung sounds.",
//       categoryId: 1,
//       companyId: 1,
//     },
//     {
//       id: 2,
//       name: "Surgical Mask",
//       details: "Protects against airborne particles and infections.",
//       categoryId: 2,
//       companyId: 2,
//     },
//     {
//       id: 3,
//       name: "Gloves",
//       details: "Medical gloves for hygiene and protection.",
//       categoryId: 2,
//       companyId: 3,
//     },
//     {
//       id: 4,
//       name: "Thermometer",
//       details: "Measures body temperature accurately.",
//       categoryId: 1,
//       companyId: 4,
//     },
//     {
//       id: 5,
//       name: "Blood Pressure Monitor",
//       details: "Monitors blood pressure levels.",
//       categoryId: 1,
//       companyId: 4,
//     },
//     {
//       id: 6,
//       name: "Oximeter",
//       details: "Measures blood oxygen levels and pulse rate.",
//       categoryId: 1,
//       companyId: 5,
//     },
//     {
//       id: 7,
//       name: "Syringe",
//       details: "Used for injecting or withdrawing fluids.",
//       categoryId: 3,
//       companyId: 6,
//     },
//     {
//       id: 8,
//       name: "IV Stand",
//       details: "Used to hold IV fluid bags for patients.",
//       categoryId: 4,
//       companyId: 7,
//     },
//     {
//       id: 9,
//       name: "ECG Machine",
//       details: "Records heart electrical activity.",
//       categoryId: 1,
//       companyId: 8,
//     },
//     {
//       id: 10,
//       name: "Ultrasound Machine",
//       details: "Uses sound waves for medical imaging.",
//       categoryId: 10,
//       companyId: 9,
//     },
//     {
//       id: 11,
//       name: "X-Ray Machine",
//       details: "Generates X-rays for diagnostic imaging.",
//       categoryId: 10,
//       companyId: 10,
//     },
//     {
//       id: 12,
//       name: "Defibrillator",
//       details: "Delivers electric shock to restore heart rhythm.",
//       categoryId: 5,
//       companyId: 11,
//     },
//     {
//       id: 13,
//       name: "Ventilator",
//       details: "Supports breathing for critically ill patients.",
//       categoryId: 6,
//       companyId: 9,
//     },
//     {
//       id: 14,
//       name: "Surgical Scissors",
//       details: "Used for cutting tissues during surgery.",
//       categoryId: 7,
//       companyId: 3,
//     },
//     {
//       id: 15,
//       name: "Surgical Forceps",
//       details: "Precision tool for holding and manipulating tissues.",
//       categoryId: 7,
//       companyId: 3,
//     },
//     {
//       id: 16,
//       name: "Anesthesia Machine",
//       details: "Delivers anesthetic gases to patients.",
//       categoryId: 11,
//       companyId: 9,
//     },
//     {
//       id: 17,
//       name: "Hospital Bed",
//       details: "Adjustable beds for patient care.",
//       categoryId: 8,
//       companyId: 7,
//     },
//     {
//       id: 18,
//       name: "Wheelchair",
//       details: "Used for patient mobility support.",
//       categoryId: 9,
//       companyId: 18,
//     },
//     {
//       id: 19,
//       name: "Ambulance Stretcher",
//       details: "Used for transporting patients in emergencies.",
//       categoryId: 5,
//       companyId: 7,
//     },
//     {
//       id: 20,
//       name: "Oxygen Cylinder",
//       details: "Stores and supplies oxygen to patients.",
//       categoryId: 6,
//       companyId: 20,
//     },
//   ];
//   return (
//     <div className={ItemStyle.itemUpper}>
//       <div className={ItemStyle.itemSubUpper}>
//         <Input type="text" placeholder="Item" />
//         <Input type="text" placeholder="Details"/>
//         <input
//           type="button"
//           value={"+"}
//           style={{ width: "100px", height: "32px"}}
//         />
//       </div>
//       <div className={ItemStyle.itemSubLower1}>
//         <div className={ItemStyle.tableContainer}>
//           <table>
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Item</th>
//                 <th>Details</th>

//                 <th colSpan={"2"} style={{ textAlign: "center" }}>
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.id}</td>
//                   <td style={{ width: "20%" }}>{item.name}</td>
//                   <td style={{ width: "50%" }}>{item.details}</td>
//                   <td style={{ textAlign: "center" }}>
//                     <button
//                       style={{
//                         textAlign: "center",
//                         height: "30px",
//                         width: "100px",
//                         backgroundColor: "green",
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </td>
//                   <td style={{ textAlign: "center" }}>
//                     <button
//                       style={{
//                         textAlign: "center",
//                         height: "30px",
//                         width: "100px",
//                         backgroundColor: "red",
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddItem;

import React from "react";
import vendorStyle from "./AdminComponents/Drawer.module.css";
import { useState, useEffect } from "react";
import { Input, OptionInput } from "./AdminComponents/Input";

function AddItem() {
  // const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];

  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemId, setItemId] = useState("");



  const UpdateHandlingToggle = (id,item) =>{
    toggleDropdown();
    setItemName(item);
    setItemId(id)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItem = async () => {
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
        body: JSON.stringify({ item_name: itemName }),
      });

      if (response.ok) {
        const newItem = await response.json();
        setItems([...items, newItem]);
        setItemName("");
        alert("Item add successfully");
      } else {
        alert("Failed to add item");
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
      setItems(data);
    } catch (err) {
      console.error("Error fetching items:", err.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/items/${id}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        setItems(items.filter((item) => item.id !== id));
        alert("Item deleted");
      } else {
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  

  const handleUpdateItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/items/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_name: itemName }),
      });

      if (response.ok) {
        const updatedItem = await response.json();
        setItems((prevItems) =>
          prevItems.map((item) => (item.id === id ? updatedItem : item))
        );
        alert("Item updated successfully");
      } else {
        alert("Failed to update item");
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className={vendorStyle.container}>
      <div className={vendorStyle.box1}>
        <div
          className={vendorStyle.box1Upper}
          onClick={toggleDropdown}
          style={{ cursor: "pointer" }}
        >
          <span className={vendorStyle.RegiHeadLine}>
            <p>Item Entry </p>
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
              <div className={vendorStyle.registrationLeftBox}>
                {/* <p>Item Information </p> */}
                <Input
                  type="text"
                  placeholder="Item Name"
                  required={true}
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />

                {/* <OptionInput options={categories} required="true" />
                <OptionInput options={companyNames} required="true" /> */}
              </div>
            </div>
            <div className={vendorStyle.registrationRight}>
              <span>
                <button onClick={handleAddItem}>Add</button>
              </span>
              <span>
                <button onClick={()=>{handleUpdateItem(itemId)}}>Update</button>
              </span>
              <span>
                <button onClick={() => setItemName("")}>Clear</button>
              </span>
              <span>
                <button onClick={toggleDropdown}>Close</button>
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
                <th>S.No</th>
                <th>Item</th>
                {/* <th>Category</th>
                <th>Company</th> */}
                <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                {/* <th style={{ textAlign: "center" }}>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {items.map((value, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{value.item_name}</td>
                  {/* <td>{value.category}</td>
                  <td>{value.company}</td> */}
                  
                  <td style={{ textAlign: "center" }}>
                    <button
                            style={{
                              backgroundColor: "#fff",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                               width:"30px"
                            }}
                               onClick={() => {
                        UpdateHandlingToggle(value.id,value.item_name);
                        // const updatedItemName = prompt("Enter value");
                        // handleUpdateItem(value.id, updatedItemName);
                      }}
                          >
                            <img
                              src="/images/Adminimages/edit.svg"
                              alt="Edit"
                              width={"30px"}
                            />
                          </button>
                    {/* <input
                      type="button"
                      value="Edit"
                      style={{
                        backgroundColor: "#FFA500",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        const updatedItemName = prompt("Enter value");
                        handleUpdateItem(value.id, updatedItemName);
                      }}
                    /> */}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                            style={{
                              backgroundColor: "#fff",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                               width:"30px"
                            }}
                              onClick={() => handleDeleteItem(value.id)}
                          >
                            <img
                              src="/images/Adminimages/delete.svg"
                              alt="delete"
                              width={"30px"}

                            />

                          </button>
                    {/* <input
                      type="button"
                      value="Delete"
                      style={{
                        backgroundColor: "#F44336",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDeleteItem(value.id)}
                    /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </div>
  );
}

export default AddItem;
