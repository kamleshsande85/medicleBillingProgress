// import React from "react";
// import vendorStyle from "./AdminComponents/Drawer.module.css";
// import { useState } from "react";
// import { Input, OptionInput } from "./AdminComponents/Input";

// function AddType() {
//   const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];
//   const medicines = [
//     { name: "Paracetamol", Type: "Painkiller", company: "Cipla" },
//     { name: "Amoxicillin", Type: "Antibiotic", company: "Sun Pharma" },
//     { name: "Metformin", Type: "Diabetes", company: "Lupin" },
//     { name: "Aspirin", Type: "Painkiller", company: "Zydus Cadila" },
//     {
//       name: "Cetirizine",
//       Type: "Antihistamine",
//       company: "Mankind Pharma",
//     },
//     { name: "Ibuprofen", Type: "Painkiller", company: "Dr. Reddy's" },
//     {
//       name: "Atorvastatin",
//       Type: "Cholesterol",
//       company: "Torrent Pharma",
//     },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", Type: "Acidity", company: "Glenmark" },
//   ];

//   const categories = [
//     "Diagnostic Tools",
//     "Protective Gear",
//     "Medical Supplies",
//     "Hospital Equipment",
//     "Emergency Equipment",
//     "Life Support",
//     "Surgical Instruments",
//     "Hospital Furniture",
//     "Mobility Aids",
//     "Radiology & Imaging",
//     "Anesthesia Equipment",
//     "Sterilization Equipment",
//     "Dental Equipment",
//     "Laboratory Equipment",
//     "Cardiology Devices",
//     "Orthopedic Supplies",
//     "Respiratory Equipment",
//     "Infusion Therapy",
//     "Rehabilitation Equipment",
//     "Pharmaceuticals",
//   ];

//   const companyNames = [
//     "3M Littmann",
//     "Honeywell",
//     "Medline",
//     "Omron",
//     "Dr. Morepen",
//     "BD",
//     "Hospitech",
//     "Philips",
//     "GE Healthcare",
//     "Siemens",
//     "Zoll",
//     "Medtronic",
//     "BPL Medical",
//     "Godrej",
//     "Karma Healthcare",
//     "Johnson & Johnson",
//     "Stryker",
//     "Boston Scientific",
//     "Fresenius",
//     "Abbott"
// ];


//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={vendorStyle.container}>
//       <div className={vendorStyle.box1}>
//         <div
//           className={vendorStyle.box1Upper}
//           onClick={toggleDropdown}
//           style={{ cursor: "pointer" }}
//         >
//           <span className={vendorStyle.RegiHeadLine}>
//             <p>Type </p>
//           </span>
//           <span className={vendorStyle.dropDownImage}>
//             <button
//               onClick={toggleDropdown}
//               style={{
//                 transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//                 transition: "transform 0.3s ease",
//               }}
//             >
//               <img
//                 src="/images/Adminimages/upArrow.svg"
//                 width={"25px"}
//                 alt="toggle"
//               />
//             </button>
//           </span>
//         </div>
//         <div
//           className={vendorStyle.box1Lower}
//           style={{
//             height: isOpen ? "250px" : "0",
//             opacity: isOpen ? 1 : 0,
//             transition: "all 0.3s ease",
//             border: "2px solid #053048",
//           }}
//         >
//           <div className={vendorStyle.registrationContent}>
//             <div className={vendorStyle.registrationLeft}>
//               <div className={vendorStyle.registrationLeftBox}>
//                 {/* <p>Item Information </p> */}
//                 <Input type="text" placeholder="Type" required="true" />
//                 <Input type="text" placeholder="Other information about" required="true" />
//                 {/* <OptionInput options={categories} required="true" />
//                 <OptionInput options={companyNames} required="true" /> */}
                
            
//               </div>
//             </div>
//             <div className={vendorStyle.registrationRight}>
//               <span>
//                 <button>Add</button>
//               </span>
//               <span>
//                 <button>Clear</button>
//               </span>
//               <span>
//                 <button>Close</button>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={vendorStyle.box2}>
//         <hr />
//         <div className={vendorStyle.box2Upper}>
//           <div className={vendorStyle.box2UpperSerchBox}>
//             <input type="text" placeholder="Search....................." />
//           </div>
//           <div className={vendorStyle.box2UpperFilterOption}>
//             <span>
//               <input type="radio" name="" id="" />
//               Active
//             </span>
//             <span>
//               <input type="radio" name="" id="" />
//               Inactive
//             </span>
//             <span className={vendorStyle.box2UpperFilterOptionText}>
//               <input type="text" name="" id="" placeholder="Option1" />
//             </span>
//             <span className={vendorStyle.box2UpperFilterOptionText}>
//               <input type="text" name="" id="" placeholder="Option2" />
//             </span>
//             <span className={vendorStyle.box2UpperFilterOptionText}>
//               <input type="text" name="" id="" placeholder="Option3" />
//             </span>
//           </div>
//         </div>
//         <hr />
//         <div
//           className={`${vendorStyle.box2Lower} ,${vendorStyle.tableContainer}`}
//         >
//           <table>
//             <thead>
//               {" "}
//               <tr className={vendorStyle.TableHead}>
//                 <th>Item</th>
//                 <th>Type</th>
//                 <th>Company</th>
//                 <th style={{ textAlign: "center" }}>Action</th>
//                 <th style={{ textAlign: "center" }}>View Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {medicines.map((value, key) => (
//                 <tr key={key}>
//                   <td>{value.name}</td>
//                   <td>{value.Type}</td>
//                   <td>{value.company}</td>
//                   <td style={{ textAlign: "center" }}>
//                     <input
//                       type="button"
//                       value="Delete"
//                       style={{
//                        backgroundColor: "#F44336",
//                             color: "white",
//                             border: "none",
//                             padding: "8px 16px",
//                             borderRadius: "4px",
//                              cursor: "pointer",
//                       }}
//                     />
//                   </td>
//                   <td style={{ textAlign: "center" }}>
//                     <input
//                       type="button"
//                       value="View"
//                       style={{
//                         backgroundColor: "#2196F3",
//                             color: "white",
//                             border: "none",
//                             padding: "8px 16px",
//                             borderRadius: "4px",
//                              cursor: "pointer",
//                       }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>{" "}
//       </div>
//     </div>
//   );
// }

// export default AddType;



import React from "react";
import vendorStyle from "./AdminComponents/Drawer.module.css";
import { useState, useEffect } from "react";
import { Input, OptionInput } from "./AdminComponents/Input";

function AddType() {
  // const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];

  const [TypeName, setTypeName] = useState("");
  const [Type, setType] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [TypeID , setTypeID] = useState("");
  
  const TypeHandlingUpdating = (id, type_value) =>{
    toggleDropdown();
    setTypeID(id);
    setTypeName(type_value);
  }


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddType = async () => {
    if (!TypeName.trim()) {
      alert("Type Name cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/itemtype/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ typename: TypeName }),
      });

      if (response.ok) {
        const newType = await response.json();
        setType([...Type, newType]);
        setTypeName("");
        alert("Type add successfully");
      } else {
        alert("Failed to add Type");
      }
    } catch (error) {
      console.error("Error adding Type:", error);
    }
  };

  const fetchType = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch("http://localhost:8000/api/itemtype/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

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

  useEffect(() => {
    fetchType();
  }, []);

  const handleDeleteType = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/itemtype/${id}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        setType(Type.filter((Type) => Type.id !== id));
        alert("Type deleted");
      } else {
        alert("Failed to delete Type");
      }
    } catch (error) {
      console.error("Error deleting Type:", error);
    }
  };

  const handleUpdateType = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/itemtype/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ typename: TypeName }),
      });

      if (response.ok) {
        const updatedType = await response.json();
        setType((prevType) =>
          prevType.map((Type) => (Type.id === id ? updatedType : Type))
        );
        alert("Type updated successfully");
      } else {
        alert("Failed to update Type");
      }
    } catch (error) {
      console.error("Error updating Type:", error);
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
            <p>Type Entry</p> 
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
                {/* <p>Type Information </p> */}
                <Input
                  type="text"
                  placeholder="Type Name"
                  required={true}
                  value={TypeName}
                  onChange={(e) => setTypeName(e.target.value)}
                />

                {/* <OptionInput options={categories} required="true" />
                <OptionInput options={companyNames} required="true" /> */}
              </div>
            </div>
            <div className={vendorStyle.registrationRight}>
              <span>
                <button onClick={handleAddType}>Add</button>
              </span>
              <span>
                <button onClick={()=>{
                  handleUpdateType(TypeID);
                }}>Update</button>
              </span>
              <span>
                <button onClick={() => setTypeName("")}>Clear</button>
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
                <th>Type</th>
                {/* <th>Type</th>
                <th>Company</th> */}
                <th style={{ textAlign: "center", width:"5px" }} colSpan={2}>Action</th>
                {/* <th style={{ textAlign: "center" }}>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {Type.map((value, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{value.typename}</td>
                  {/* <td>{value.Type}</td>
                  <td>{value.company}</td> */}
                   <td style={{ textAlign: "center" }}>
                    <button
                            style={{
                              backgroundColor: "#fff",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                               width:"5px"
                            }}
                              onClick={() => {
                        // const updatedTypeName = prompt("Enter value");
                        // handleUpdateType(value.id, updatedTypeName);
                        TypeHandlingUpdating(value.id,value.typename);
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
                        const updatedTypeName = prompt("Enter value");
                        handleUpdateType(value.id, updatedTypeName);
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
                               width:"5px"
                            }}
                              onClick={() => handleDeleteType(value.id)}
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
                      onClick={() => handleDeleteType(value.id)}
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

export default AddType;
