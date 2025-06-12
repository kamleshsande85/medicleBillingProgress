import React from "react";
import expiryStyle from "./Expiry.module.css";
import purchaseStyle from "./Purchase.module.css";
import vendorStyle from "./AdminComponents/Drawer.module.css";

const medicines = [
  { name: "Paracetamol", category: "Painkiller", company: "Cipla" },
  { name: "Amoxicillin", category: "Antibiotic", company: "Sun Pharma" },
  { name: "Metformin", category: "Diabetes", company: "Lupin" },
  { name: "Aspirin", category: "Painkiller", company: "Zydus Cadila" },
  {
    name: "Cetirizine",
    category: "Antihistamine",
    company: "Mankind Pharma",
  },
  { name: "Ibuprofen", category: "Painkiller", company: "Dr. Reddy's" },
  {
    name: "Atorvastatin",
    category: "Cholesterol",
    company: "Torrent Pharma",
  },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
  { name: "Ranitidine", category: "Acidity", company: "Glenmark" },
];

function ExpiryManagement() {
  return (
    <div className={expiryStyle.Box}>
      <div className={`${expiryStyle.subBox} ${expiryStyle.subBoxUpper}`}>
        <div
          className={`${expiryStyle.subBox_sub} ${expiryStyle.subBox_subLeft}`}
        >
          <div
            className={`${purchaseStyle.subBox} ${purchaseStyle.subBox2} ${expiryStyle.subBox2}`}
          >
            <div className={`${purchaseStyle.scrollableTable} ${expiryStyle.purchaseStyle} ${expiryStyle.purchaseStyle1}`}>
              <table>
                <thead>
                  <tr>
                    <th>Vendor</th>
                    <th>Company</th>
                    <th>Category</th>
                    <th>Purchase date</th>
                    <th>Expiry date</th>
                    {/* <th>Type</th>
                    <th>Item</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>
                      <img
                        src="/images/Adminimages/delete.svg"
                        alt="delete"
                        width="35px"
                      />
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* Sample rows */}
                  {[...Array(10)].map((_, i) => (
                    <tr key={i}>
                      <td>Vendor {i + 1}</td>
                      <td>Company</td>
                      <td>Category</td>
                      <td>date</td>
                      <td>date </td>
                      {/* <td>Type</td>
                      <td>Item</td>
                      <td>10</td>
                      <td>₹100</td>
                      <td>
                        <img
                          src="/images/Adminimages/delete.svg"
                          alt="delete"
                          width="35px"
                        />
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className={`${expiryStyle.subBox_sub} ${expiryStyle.subBox_subRight}`}
        >
          <div className={`${purchaseStyle.subBox} ${purchaseStyle.subBox2}`}>
            <div className={`${purchaseStyle.scrollableTable} ${expiryStyle.purchaseStyle} ${expiryStyle.purchaseStyle2}`}>
              <table>
                <thead>
                  <tr>
                    <th>Vendor</th>
                    <th>Company</th>
                    <th>Category</th>
                    <th>Purchase date</th>
                    <th>Expiry date</th>
                    {/* <th>Type</th>
                    <th>Item</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>
                      <img
                        src="/images/Adminimages/delete.svg"
                        alt="delete"
                        width="35px"
                      />
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* Sample rows */}
                  {[...Array(10)].map((_, i) => (
                    <tr key={i}>
                      <td>Vendor {i + 1}</td>
                      <td>Company</td>
                      <td>Category</td>
                      <td>date</td>
                      <td>date </td>
                      {/* <td>Type</td>
                      <td>Item</td>
                      <td>10</td>
                      <td>₹100</td>
                      <td>
                        <img
                          src="/images/Adminimages/delete.svg"
                          alt="delete"
                          width="35px"
                        />
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <th>Category</th>
                <th>Company</th>
                <th style={{ textAlign: "center" }}>Action</th>
                <th style={{ textAlign: "center" }}>View Details</th>
                <th style={{ textAlign: "center" }}>Order</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((value, key) => (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.category}</td>
                  <td>{value.company}</td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="button"
                      value="Delete"
                      style={{
                        backgroundColor: "#F44336",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "4px",
                      }}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="button"
                      value="View"
                      style={{
                        backgroundColor: "#2196F3",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "4px",
                      }}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="button"
                      value="Order"
                      style={{
                       backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "4px",
                            fontWeight: "bold",
                      }}
                    />
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

export default ExpiryManagement;
