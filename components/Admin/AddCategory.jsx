// import React from 'react'
// import Categorytyle from "./Admin.module.css"
// import { Input } from './AdminComponents/Input';

// function AddCategory() {
//     const categories = [
//         { id: 1, name: "Diagnostic Tools", details: "Devices used for medical examination and diagnosis." },
//         { id: 2, name: "Protective Gear", details: "Essential equipment to protect medical staff and patients from infections." },
//         { id: 3, name: "Medical Supplies", details: "Consumables used in hospitals and clinics for treatments and procedures." },
//         { id: 4, name: "Hospital Equipment", details: "Large-scale medical devices and tools used in hospitals." },
//         { id: 5, name: "Emergency Equipment", details: "Critical tools used in emergency situations, including defibrillators and stretchers." },
//         { id: 6, name: "Life Support", details: "Machines and equipment that help sustain patients in critical condition." },
//         { id: 7, name: "Surgical Instruments", details: "Precision tools used in surgeries and medical procedures." },
//         { id: 8, name: "Hospital Furniture", details: "Beds, cabinets, and other furniture used in hospitals and clinics." },
//         { id: 9, name: "Mobility Aids", details: "Devices designed to help individuals with movement difficulties." },
//         { id: 10, name: "Radiology & Imaging", details: "Machines used for medical imaging such as X-rays, MRIs, and ultrasounds." },
//         { id: 11, name: "Anesthesia Equipment", details: "Devices used to administer anesthesia during surgeries." },
//         { id: 12, name: "Sterilization Equipment", details: "Tools used to sterilize medical instruments and equipment." },
//         { id: 13, name: "Dental Equipment", details: "Tools and devices used in dental procedures and oral care." },
//         { id: 14, name: "Laboratory Equipment", details: "Instruments used for conducting medical tests and research." },
//         { id: 15, name: "Cardiology Devices", details: "Medical devices related to heart monitoring and treatment." },
//         { id: 16, name: "Orthopedic Supplies", details: "Equipment and tools used for bone and joint treatments." },
//         { id: 17, name: "Respiratory Equipment", details: "Devices that help patients with breathing difficulties." },
//         { id: 18, name: "Infusion Therapy", details: "Equipment used for IV therapy and administering fluids to patients." },
//         { id: 19, name: "Rehabilitation Equipment", details: "Tools used for physiotherapy and patient recovery." },
//         { id: 20, name: "Pharmaceuticals", details: "Medications and drugs used for treatment and prevention of diseases." }
//     ];

//   return (
//     <div className={Categorytyle.CategoryUpper}>
//       <div className={Categorytyle.CategoryubUpper}>
//         <Input type="text" placeholder="Category" />
//          <Input type="text" placeholder="Details"/>
//         <input
//           type="button"
//           value={"+"}
//           style={{ width: "100px", height: "32px" }}
//         />
//       </div>
//       <div className={Categorytyle.CategoryubLower1}>
//         <div className={Categorytyle.tableContainer}>

//         <table >
//           <thead >
//             <tr>
//               <th>S.No</th>

//               <th>Category</th>
//               <th>Details</th>

//               <th colSpan={"2"} style={{textAlign:'center'}}>Action</th>
//             </tr>
//           </thead>
//           <tbody>

//           {categories.map((Category, index) => (
//               <tr key={index}>
//                 <td>{Category.id}</td>
//                 <td style={{width:"20%"}}>{Category.name}</td>
//                 <td style={{width:"50%"}}>{Category.details}</td>
//                 <td style={{textAlign:'center'}}><button style={{textAlign:'center', height:"30px" , width:"100px",backgroundColor:"green"}}>Edit</button></td>
//                 <td style={{textAlign:'center'}}><button style={{textAlign:'center',  height:"30px",width:"100px" , backgroundColor:"red"}}>Delete</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default AddCategory

// import React from "react";
// import vendorStyle from "./AdminComponents/Drawer.module.css";
// import { useState } from "react";
// import { Input, OptionInput } from "./AdminComponents/Input";

// function AddCategory() {
//   const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];
//   const medicines = [
//     { name: "Paracetamol", category: "Painkiller", company: "Cipla" },
//     { name: "Amoxicillin", category: "Antibiotic", company: "Sun Pharma" },
//     { name: "Metformin", category: "Diabetes", company: "Lupin" },
//     { name: "Aspirin", category: "Painkiller", company: "Zydus Cadila" },
//     {
//       name: "Cetirizine",
//       category: "Antihistamine",
//       company: "Mankind Pharma",
//     },
//     { name: "Ibuprofen", category: "Painkiller", company: "Dr. Reddy's" },
//     {
//       name: "Atorvastatin",
//       category: "Cholesterol",
//       company: "Torrent Pharma",
//     },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//     { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
//   ];

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={vendorStyle.container}>
//       <div className={vendorStyle.box1}>
//         <div className={vendorStyle.box1Upper}  onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
//           <span className={vendorStyle.RegiHeadLine}>
//             <p>Category</p>
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
//                 {/* <p>Category page</p> */}
//                 <Input type="text" placeholder="Category" required="true" />
//                 <Input type="text" placeholder="Category other details" required="true" />
//                 {/* <Input type="text" placeholder="detail" required="true" /> */}

//               </div>
//               </div>

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
//               <input type="text" name="" id="" placeholder="Option1"/>
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
//                 <th>Category</th>
//                 <th>Category</th>
//                 <th>Company</th>
//                 <th style={{ textAlign: "center" }}>Action</th>
//                 <th style={{ textAlign: "center" }}>View Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {medicines.map((value, key) => (
//                 <tr key={key}>
//                   <td>{value.name}</td>
//                   <td>{value.category}</td>
//                   <td>{value.company}</td>
//                   <td style={{ textAlign: "center" }}>
//                     <input
//                       type="button"
//                       value="Delete"
//                       style={{
//                         backgroundColor: "#F44336",
//                             color: "white",
//                             border: "none",
//                             padding: "8px 16px",
//                             borderRadius: "4px",
//                             cursor: "pointer",
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
//                             cursor: "pointer",
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

// export default AddCategory;

import React from "react";
import vendorStyle from "./AdminComponents/Drawer.module.css";
import { useState, useEffect } from "react";
import { Input, OptionInput } from "./AdminComponents/Input";

function AddCategory() {
  // const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];

  const [CategoryName, setCategoryName] = useState("");
  const [Category, setCategory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryID , setCategoryID] = useState("");

  const CategariHandleUpdate = (id , category_value) =>{
      toggleDropdown();
      setCategoryID(id);
      setCategoryName(category_value);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddCategory = async () => {
    if (!CategoryName.trim()) {
      alert("Category Name cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/itemcategory/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category: CategoryName }),
      });

      if (response.ok) {
        const newCategory = await response.json();
        setCategory([...Category, newCategory]);
        setCategoryName("");
        alert("Category add successfully");
      } else {
        alert("Failed to add Category");
      }
    } catch (error) {
      console.error("Error adding Category:", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch("http://localhost:8000/api/itemcategory/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

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

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleDeleteCategory = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/itemcategory/${id}/`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setCategory(Category.filter((Category) => Category.id !== id));
        alert("Category deleted");
      } else {
        alert("Failed to delete Category");
      }
    } catch (error) {
      console.error("Error deleting Category:", error);
    }
  };

  const handleUpdateCategory = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/itemcategory/${id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category: CategoryName }),
        }
      );

      if (response.ok) {
        const updatedCategory = await response.json();
        setCategory((prevCategory) =>
          prevCategory.map((Category) =>
            Category.id === id ? updatedCategory : Category
          )
        );
        alert("Category updated successfully");
      } else {
        alert("Failed to update Category");
      }
    } catch (error) {
      console.error("Error updating Category:", error);
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
            <p>Category Entry</p>
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
                {/* <p>Category Information </p> */}
                <Input
                  type="text"
                  placeholder="Category Name"
                  required={true}
                  value={CategoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />

                {/* <OptionInput options={categories} required="true" />
                <OptionInput options={companyNames} required="true" /> */}
              </div>
            </div>
            <div className={vendorStyle.registrationRight}>
              <span>
                <button onClick={handleAddCategory}>Add</button>
              </span>
              <span>
                <button onClick={()=>{handleUpdateCategory(categoryID)}}>Update</button>
              </span>
              <span>
                <button onClick={() => setCategoryName("")}>Clear</button>
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
                <th>Category</th>
                {/* <th>Category</th>
                <th>Company</th> */}
                <th style={{ textAlign: "center" }} colSpan={2}>
                  Action
                </th>
                {/* <th style={{ textAlign: "center" }}>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {Category.map((value, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{value.category}</td>
                  {/* <td>{value.category}</td>
                  <td>{value.company}</td> */}
                   <td style={{ textAlign: "center" }}>
                    <button
                      style={{
                        backgroundColor: "#fff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        width: "30px",
                      }}
                      onClick={() => {
                        CategariHandleUpdate(value.id,value.category);
                        // const updatedCategoryName = prompt("Enter value");
                        // handleUpdateCategory(value.id, updatedCategoryName);
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
                        const updatedCategoryName = prompt("Enter value");
                        handleUpdateCategory(value.id, updatedCategoryName);
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
                        width: "30px",
                      }}
                      onClick={() => handleDeleteCategory(value.id)}
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
                      onClick={() => handleDeleteCategory(value.id)}
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

export default AddCategory;
