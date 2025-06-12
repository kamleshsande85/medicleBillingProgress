// import React from 'react'
// import ItemStyle from "./Admin.module.css"
// import { Input } from './AdminComponents/Input';

// function AddCompany() {

//     const companies = [
//         { id: 1, name: "3M Littmann", details: "Known for high-quality stethoscopes used by doctors worldwide." },
//         { id: 2, name: "Honeywell", details: "Provides protective masks and healthcare safety equipment." },
//         { id: 3, name: "Medline", details: "Specializes in medical gloves and hygiene products." },
//         { id: 4, name: "Omron", details: "Manufactures thermometers and blood pressure monitors." },
//         { id: 5, name: "Dr. Morepen", details: "Produces reliable and affordable medical devices." },
//         { id: 6, name: "BD", details: "Leading supplier of syringes and medical supplies." },
//         { id: 7, name: "Hospitech", details: "Manufactures hospital equipment like IV stands and beds." },
//         { id: 8, name: "Philips", details: "Develops advanced ECG machines and healthcare electronics." },
//         { id: 9, name: "GE Healthcare", details: "Leader in ultrasound and imaging equipment." },
//         { id: 10, name: "Siemens", details: "Provides high-quality radiology and diagnostic imaging." },
//         { id: 11, name: "Zoll", details: "Specialized in defibrillators and emergency medical devices." },
//         { id: 12, name: "Medtronic", details: "Global leader in medical technology, offering ventilators and life support systems." },
//         { id: 13, name: "BPL Medical", details: "Manufactures high-quality oxygen cylinders and respiratory devices." },
//         { id: 14, name: "Godrej", details: "Well-known for manufacturing hospital furniture including beds and storage units." },
//         { id: 15, name: "Karma Healthcare", details: "Specializes in wheelchairs and mobility aids." },
//         { id: 16, name: "Johnson & Johnson", details: "Provides a wide range of medical supplies, including surgical instruments." },
//         { id: 17, name: "Stryker", details: "Manufactures advanced surgical equipment and hospital beds." },
//         { id: 18, name: "Boston Scientific", details: "Leader in medical devices for cardiovascular and endoscopic procedures." },
//         { id: 19, name: "Fresenius", details: "Major provider of dialysis machines and kidney care solutions." },
//         { id: 20, name: "Abbott", details: "Develops diagnostic tools, glucose monitors, and health devices." }
//     ];

    
//   return (
//     <div className={ItemStyle.itemUpper}>
//       <div className={ItemStyle.itemSubUpper}>
//         <Input Company="text" placeholder="Company" />
//          <Input Company="text" placeholder="Details"/>
//         <input
//           Company="button"
//           value={"+"}
//           style={{ width: "100px", height: "32px" }}
//         />
//       </div>
//       <div className={ItemStyle.itemSubLower1}>
//         <div className={ItemStyle.tableContainer}>

        
//         <table >
//           <thead >
//             <tr>
//               <th>S.No</th>

//               <th>Company</th>
//               <th>Details</th>
//               <th colSpan={"2"} style={{textAlign:'center'}}>Action</th>
             

//             </tr>
//           </thead>
//           <tbody>
          
//             {companies.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td style={{width:"20%"}}>{item.name}</td>
//                 <td style={{width:"50%"}}>{item.details}</td>
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


// export default AddCompany




// import React from "react";
// import vendorStyle from "./AdminComponents/Drawer.module.css";
// import { useState } from "react";
// import { Input, OptionInput } from "./AdminComponents/Input";


// function AddCompany() {
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
//             <p>Company </p>
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
//                 {/* <p>Company Information 1 </p> */}
//                 <Input Company="text" placeholder="Company name" required="true" />
//                 <Input Company="text" placeholder="Company other details" required="true" />
//                 {/* <Input Company="text" placeholder="Company Name" required="true" />
//                 <Input Company="text" placeholder="GST Number" required="true" />
//                 <Input
//                   Company="textarea"
//                   placeholder="License Details"
//                   required="true"
//                 />
//                */}</div>
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
//             <input Company="text" placeholder="Search....................." />
//           </div>
//           <div className={vendorStyle.box2UpperFilterOption}>
//             <span>
//               <input Company="radio" name="" id="" />
//               Active
//             </span>
//             <span>
//               <input Company="radio" name="" id="" />
//               Inactive
//             </span>
//             <span className={vendorStyle.box2UpperFilterOptionText}>
//               <input Company="text" name="" id="" placeholder="Option1"/>
//             </span>
//             <span className={vendorStyle.box2UpperFilterOptionText}>
//               <input Company="text" name="" id="" placeholder="Option2" />
//             </span>
//             <span className={vendorStyle.box2UpperFilterOptionText}>
//               <input Company="text" name="" id="" placeholder="Option3" />
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
//                       Company="button"
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
//                       Company="button"
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

// export default AddCompany  ;




import React from "react";
import vendorStyle from "./AdminComponents/Drawer.module.css";
import { useState, useEffect } from "react";
import { Input, OptionInput } from "./AdminComponents/Input";

function AddCompany() {
  // const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];

  const [CompanyName, setCompanyName] = useState("");
  const [Company, setCompany] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [CompaniesID , setCompaniesID] = useState("");

  const CompaniesHandlingUpdating = (id , companie_value) =>{
      toggleDropdown();
      setCompanyName(companie_value);
      setCompaniesID(id);
  }
    
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddCompany = async () => {
    if (!CompanyName.trim()) {
      alert("Company Name cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/company/", {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
        },
        body: JSON.stringify({ Company: CompanyName }),
      });

      if (response.ok) {
        const newCompany = await response.json();
        setCompany([...Company, newCompany]);
        setCompanyName("");
        alert("Company add successfully");
      } else {
        alert("Failed to add Company");
      }
    } catch (error) {
      console.error("Error adding Company:", error);
    }
  };

  const fetchCompany = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch("http://localhost:8000/api/company/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

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

  useEffect(() => {
    fetchCompany();
  }, []);

  const handleDeleteCompany = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/company/${id}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        setCompany(Company.filter((Company) => Company.id !== id));
        alert("Company deleted");
      } else {
        alert("Failed to delete Company");
      }
    } catch (error) {
      console.error("Error deleting Company:", error);
    }
  };

  const handleUpdateCompany = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/company/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Company: CompanyName }),
      });

      if (response.ok) {
        const updatedCompany = await response.json();
        setCompany((prevCompany) =>
          prevCompany.map((Company) => (Company.id === id ? updatedCompany : Company))
        );
        alert("Company updated successfully");
      } else {
        alert("Failed to update Company");
      }
    } catch (error) {
      console.error("Error updating Company:", error);
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
            <p>Company Entry</p>
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
                {/* <p>Company Information </p> */}
                <Input
                  Company="text"
                  placeholder="Company Name"
                  required={true}
                  value={CompanyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />

                {/* <OptionInput options={categories} required="true" />
                <OptionInput options={companyNames} required="true" /> */}
              </div>
            </div>
            <div className={vendorStyle.registrationRight}>
              <span>
                <button onClick={handleAddCompany}>Add</button>
              </span>
              <span>
                <button onClick={()=>{handleUpdateCompany(CompaniesID)}}>Update</button>
              </span>
              <span>
                <button onClick={() => setCompanyName("")}>Clear</button>
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
                <th>Company</th>
                {/* <th>Company</th>
                <th>Company</th> */}
                <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                {/* <th style={{ textAlign: "center" }}>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {Company.map((value, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{value.Company}</td>
                  {/* <td>{value.Company}</td>
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
                        // const updatedCompanyName = prompt("Enter value");
                        // handleUpdateCompany(value.id, updatedCompanyName);
                        CompaniesHandlingUpdating(value.id,value.Company);
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
                        const updatedCompanyName = prompt("Enter value");
                        handleUpdateCompany(value.id, updatedCompanyName);
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
                      onClick={() => handleDeleteCompany(value.id)}
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
                      onClick={() => handleDeleteCompany(value.id)}
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

export default AddCompany;
