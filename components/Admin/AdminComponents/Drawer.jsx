// import React from "react";
// import vendorStyle from "./Drawer.module.css";
// import { useState } from "react";
// import { Input, OptionInput } from "./Input";

// function Drawer() {
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
//             <p>Registration page</p>
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
//                 <p>Basic Information</p>
//                 <Input type="text" placeholder="Vendor Name" required="true" />
//                 <Input type="text" placeholder="Company Name" required="true" />
//                 <Input type="text" placeholder="GST Number" required="true" />
//                 <Input
//                   type="textarea"
//                   placeholder="License Details"
//                   required="true"
//                 />
//               </div>
//               <div className={vendorStyle.registrationLeftBox}>
//                 {" "}
//                 <p>Contact Information</p>
//                 <Input
//                   type="tel"
//                   placeholder="Contact Number"
//                   required="true"
//                 />
//                 <Input
//                   type="tel"
//                   placeholder="Alternate Contact Number"
//                   required="true"
//                 />
//                 <Input
//                   type="email"
//                   placeholder="Email Address"
//                   required="true"
//                 />
//                 <Input type="testarea" placeholder="Address" required="true" />
//                 <Input type="text" placeholder="State" required="true" />
//               </div>

//               {/*
//                 APi for address state distric and other details
//                https://www.data.gov.in/
//                   http://www.geonames.org/
//                   https://www.indiapost.gov.in/
//                */}

//               <div className={vendorStyle.registrationLeftBox}>
//                 {" "}
//                 <p>Business Details</p>
//                 {/* <Input type="text" placeholder="Priority Level "  required="true"/> */}
//             <OptionInput options={priorityOption} required="true" / >
//               <span style={{marginLeft:"-2px"}}>   <Input
//                   type="number"
//                   placeholder="Account Number "
//                   required="true"
//                 /></span>
//                 <Input type="text" placeholder="IFSC code" required="true" />
//                 <Input type="text" placeholder="PAN Number" required="true" />
//                 <Input type="text" placeholder="Product/Service Categories" />
//               </div>
//             </div>
//             <div className={vendorStyle.registrationRight}>
//               <span>
//                 <button>Save</button>
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
//                       type="button"
//                       value="Delete"
//                       style={{
//                         width: "100px",
//                         height: "32px",
//                         backgroundColor: "red",
//                       }}
//                     />
//                   </td>
//                   <td style={{ textAlign: "center" }}>
//                     <input
//                       type="button"
//                       value="View"
//                       style={{
//                         width: "100px",
//                         height: "32px",
//                         backgroundColor: "green",
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

// export default Drawer;

import React, { useState, useEffect } from "react";
import vendorStyle from "./Drawer.module.css";
import { Input } from "./Input";
// import API from "../../../api";

function Drawer() {
  const priorityOption = ["Select Priority", "Primary", "Secondary", "Backup"];
  const [vendorName, setVendorName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [licenseDetails, setLicenseDetails] = useState("");
  const [contact, setContact] = useState("");
  const [altContact, setAltContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [priority, setPriority] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [pan, setPan] = useState("");
  // const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch("http://localhost:8000/api/vendors/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch vendors");
      }

      const data = await response.json();
      console.log("Vendor data ", data);
      setVendors(data);
    } catch (err) {
      console.error("Error fetching vendors:", err.message);
    }
  };

const fetchVendorById = async (id) => {
  try {
    const token = localStorage.getItem("access_token");

    const response = await fetch(`http://localhost:8000/api/vendors/${id}/`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch vendor");
    }

    const data = await response.json();
    console.log("Vendor data ", data);
    // Agar aap single vendor ke liye alag state use kar rahe ho to wo set karo:
    setVendorName(data.vendor_name);
    setCompanyName(data.company_name);
    setGstNumber(data.gst_number);
    setLicenseDetails(data.license_details);
    setContact(data.contact_number);
    setAltContact(data.alternate_contact);
    setEmail(data.email);
    setAddress(data.address);
    setState(data.state);
    setPriority(data.priority);
    setAccountNumber(data.account_number);
    setIfsc(data.ifsc_code);
    setPan(data.pan_number);
  } catch (err) {
    console.error("Error fetching vendor:", err.message);
  }
};






const handleUpdatePurchase = async (id, updatedFields) => {
    const token = localStorage.getItem("access_token");
  try {
    const response = await fetch(`http://localhost:8000/api/vendors/${id}/`, {
      method: "PATCH",  // PATCH use karo PUT ki jagah
      headers: {
        "Content-Type": "application/json",
         Authorization: "Bearer " + token,
      },
      body: JSON.stringify(updatedFields),
    });

    if (response.ok) {
      const updatedVendor = await response.json();
      // setCategory((prevCategory) =>
      //   prevCategory.map((cat) => (cat.id === id ? updatedCategory : cat))
      // );
      alert("Vendor updated successfully");
    } else {
      alert("Failed to update Vendor");
    }
  } catch (error) {
    console.error("Error updating Vendor:", error);
  }
};


const [vendorid , setVendorID] = useState()
console.log("vendor ID : ",vendorid);


const handleUpdateClick = (id) => {
  // formData already updated hai inputs ke hisaab se
      const payload = {
      vendor_name: vendorName,
      company_name: companyName,
      gst_number: gstNumber,
      license_details: licenseDetails,
      contact_number: contact,
      alternate_contact: altContact,
      email: email,
      address: address,
      state: state,
      priority: priority,
      account_number: accountNumber,
      ifsc_code: ifsc,
      pan_number: pan,}
     handleUpdatePurchase(id, payload);
};



  const handleDeletePurchase = async (id) => {
      const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `http://localhost:8000/api/vendors/${id}/`,
        {
          method: "DELETE",
           headers: {
          Authorization: "Bearer " + token,
        },
        }
      );

      if (response.ok) {
        // setCategory(Category.filter((Category) => Category.id !== id));
        alert("Vendor deleted");
      } else {
        alert("Failed to delete Vendor");
      }
    } catch (error) {
      console.error("Error deleting Vendor:", error);
    }
  };



  // 🔁 Auto call once when component mounts
  useEffect(() => {
    fetchVendors();
     const interval = setInterval(() => {
    fetchVendors(); // har 5 second me chale
  }, 1000 ); // 5000ms = 5 seconds

  return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handleSave = async () => {
    if (
      !vendorName ||
      !companyName ||
      !gstNumber ||
      !licenseDetails ||
      !contact ||
      !email ||
      !address ||
      !state ||
      !priority 
      // !category ||
      // Number(category) <= 0
    ) {
      alert("Please fill all required fields and select a valid category.");
      return;
    }

    const payload = {
      vendor_name: vendorName,
      company_name: companyName,
      gst_number: gstNumber,
      license_details: licenseDetails,
      contact_number: contact,
      alternate_contact: altContact,
      email: email,
      address: address,
      state: state,
      priority: priority,
      account_number: accountNumber,
      ifsc_code: ifsc,
      pan_number: pan,
      // categories: [parseInt(category)],

      // categories: [Number(category)]
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

    // ✅ Make vendor create request
    const sendVendorRequest = async (token) => {
      const response = await fetch("http://localhost:8000/api/vendors/", {
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

    // ✅ Execute all
    try {
      let token = localStorage.getItem("access_token");
      let data;

      try {
        data = await sendVendorRequest(token); // 🔁 Try first
      } catch (error) {
        if (error.message === "Unauthorized") {
          console.log("Token expired. Refreshing...");
          token = await refreshAccessToken(); // ♻️ Get new token
          data = await sendVendorRequest(token); // 🔁 Retry request
        } else {
          throw error;
        }
      }

      console.log("Saved ✅:", data);
      alert("Vendor Data Is Saved");
      await fetchVendors(); // ✅ refresh list after save
    } catch (err) {
      console.error("Vendor save failed ❌", err.message);
      alert("Save failed ❌");
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
            <p>Registration Page Entry</p>
          </span>
          <span className={vendorStyle.dropDownImage}>
            <button
              onClick={toggleDropdown}
              style={{
                // transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                // transform: isOpen ? {} : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                // src="/images/Adminimages/upArrow.svg"
                src={isOpen ? "/images/Adminimages/drawer_subtract.svg" : "/images/Adminimages/drawer_add.svg" }
                width={"25px"}
                // backgroundColor="#fff"
                // filter= "invert(1)"
                // color="#fff"
                alt="toggle"
              />
            </button>
          </span>
        </div>
        <div
          className={vendorStyle.box1Lower}
          style={{
            height: isOpen ? "auto" : "0",
            opacity: isOpen ? 1 : 0,
            transition: "all 0.3s ease",
            border: "2px solid #053048",
          }}
        >
          <div className={vendorStyle.registrationContent}>
            <div className={vendorStyle.registrationLeft}>
              <div className={vendorStyle.registrationLeftBox}>
                <p>Basic Information</p>
                <Input
                  type="text"
                  placeholder="Vendor Name"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="GST Number"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                />
                <Input
                  type="textarea"
                  placeholder="License Details"
                  value={licenseDetails}
                  onChange={(e) => setLicenseDetails(e.target.value)}
                />
              </div>
              <div className={vendorStyle.registrationLeftBox}>
                <p>Contact Information</p>
                <Input
                  type="tel"
                  placeholder="Contact Number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Alternate Contact Number"
                  value={altContact}
                  onChange={(e) => setAltContact(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="textarea"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className={vendorStyle.registrationLeftBox}>
                <p>Business Details</p>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={{ padding: "8px", width: "202px", marginRight: "2px" }}
                >
                  {priorityOption.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <Input
                  type="number"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="IFSC code"
                  value={ifsc}
                  onChange={(e) => setIfsc(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="PAN Number"
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                />
                {/* <label>Category</label> */}
                {/* <Input
                  type="number"
                  placeholder="Category ID"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                /> */}
              </div>
            </div>
            <div className={vendorStyle.registrationRight}>
              <span>
                <button onClick={handleSave}>Save</button>
              </span>
              <span>
                <button onClick={()=>{handleUpdateClick(vendorid)}}>Update</button>
              </span>
              <span>
                <button onClick={() => window.location.reload()}>Clear</button>
              </span>
              <span>
                <button onClick={() => setIsOpen(false)}>Close</button>
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
              <input type="radio" name="status" /> Active
            </span>
            <span>
              <input type="radio" name="status" /> Inactive
            </span>
            <span className={vendorStyle.box2UpperFilterOptionText}>
              <input type="text" placeholder="Option1" />
            </span>
            <span className={vendorStyle.box2UpperFilterOptionText}>
              <input type="text" placeholder="Option2" />
            </span>
            <span className={vendorStyle.box2UpperFilterOptionText}>
              <input type="text" placeholder="Option3" />
            </span>
          </div>
        </div>
        <hr />
        <div
          className={`${vendorStyle.box2Lower} ,${vendorStyle.tableContainer}`}
        >
          <table>
            <thead>
              <tr className={vendorStyle.TableHead}>
                <th>S No.</th>
                <th>Priority</th>
                <th>Name</th>
                <th>Company</th>
                <th style={{ textAlign: "center" }} colSpan={2}>Action</th>
                {/* <th style={{ textAlign: "center" }}>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {vendors.length > 0 ? (
                vendors.map((vendor, index) => (
                  <tr key={vendor.id}>
                    <td>{index + 1}</td>
                    {/* <td>{vendor.categories?.join(", ") || "N/A"}</td> */}
                    <td>{vendor.priority}</td>
                    <td>{vendor.vendor_name}</td>
                    <td>{vendor.company_name}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        style={{
                          backgroundColor: "#fff",
                          color: "white",
                          border: "none",
                          // padding: "8px 16px",
                          // borderRadius: "4px", 
                          cursor:"pointer",
                        }}
                        onClick={()=>{
                          toggleDropdown();
                          fetchVendorById(vendor.id);
                          setVendorID(vendor.id);
                        }
                      
                      }
                      >
                        <img src="/images/Adminimages/edit.svg" alt="Edit" width={"30px"}/>
                        {/* Edit */}
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        style={{
                          backgroundColor: "#fff",
                          color: "white",
                          border: "none",
                          // padding: "8px 16px",
                          // borderRadius: "4px",
                           cursor:"pointer",
                        }}
                         onClick={() => handleDeletePurchase(vendor.id)}
                      >
                        <img src="/images/Adminimages/delete.svg" alt="Delete" width={"30px"}/>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
