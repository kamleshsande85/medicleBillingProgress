import React from "react";
import purchaseStyle from "./Purchase.module.css";
import salesStyle from "./Sales.module.css";
import { TextField, Button, styled } from "@mui/material";
// import CloudUploadIcon from '@mui/icons-material';

import MyDropdown from "./AdminComponents/MyDropdown";

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

function Sales() {
  return (
    <div className={purchaseStyle.container}>
      <div className={`${purchaseStyle.box} ${purchaseStyle.boxUpper}`}>
        <div className={`${purchaseStyle.subBox} ${purchaseStyle.subBox1}`}>
          <div className={purchaseStyle.rightSide}>
            <div
              className={`${purchaseStyle.dateItemSearch} ${salesStyle.searchItem}`}
            >
              <div className={purchaseStyle.dateStyle}>
                {" "}
                <DateStyle
                  id="outlined-basic"
                  label="Purchase date"
                  variant="outlined"
                  type="date"
                />
              </div>

              <span
                className={`${purchaseStyle.dateStyle} ${purchaseStyle.searchItem} `}
              >
                <MyDropdown
                  label="Type"
                  placeholder="Customer Phone number"
                  options={[
                    "Apollo Pharmacy",
                    "1mg",
                    "MedPlus",
                    "Local Vendor",
                    "NetMeds",
                    "Generic Store",
                  ]}
                  onSelect={(val) => console.log("You selected:", val)}
                />
              </span>
              <span
                className={`${purchaseStyle.dateStyle} ${purchaseStyle.searchItem}`}
              >
                <MyDropdown
                  label="Type"
                  placeholder="Customer name"
                  options={[
                    "Apollo Pharmacy",
                    "1mg",
                    "MedPlus",
                    "Local Vendor",
                    "NetMeds",
                    "Generic Store",
                  ]}
                  onSelect={(val) => console.log("You selected:", val)}
                />
              </span>
            </div>

            <div
              className={`${purchaseStyle.divQTYPrice} ${salesStyle.divQTYPrice}`}
            >
              <div className={salesStyle.divQTYPriceLeft}>
                <span
                  className={`${purchaseStyle.dateStyle} ${salesStyle.searchItem2} `}
                >
                  <MyDropdown
                    label="Type"
                    placeholder="Item"
                    options={[
                      "Apollo Pharmacy",
                      "1mg",
                      "MedPlus",
                      "Local Vendor",
                      "NetMeds",
                      "Generic Store",
                    ]}
                    onSelect={(val) => console.log("You selected:", val)}
                  />
                </span>
              </div>
              <div className={salesStyle.divQTYPriceRight}>
                <InputFields
                  id="outlined-basic"
                  label="QTY"
                  variant="outlined"
                  type="number"
                />
                {/* <InputFields
                id="outlined-basic"
                label="QTY"
                variant="outlined"
                type="number"
              /> */}
                <InputFields
                  id="outlined-basic"
                  label="Price/item"
                  variant="outlined"
                  type="number"
                />{" "}
              </div>
            </div>
            <div className={`${purchaseStyle.Button} ${salesStyle.AddButton}`}>
              <ButtonStyle variant="contained">Add</ButtonStyle>
            </div>
          </div>
        </div>
        <div className={`${purchaseStyle.subBox} ${purchaseStyle.subBox2}`}>
          <div className={purchaseStyle.scrollableTable}>
            <table>
              <thead>
                <tr>
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
                      width="30px"
                    />
                  </th>
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
                    <td>Type</td>
                    <td>Item</td>
                    <td>10</td>
                    <td>₹100</td>
                    <td>
                      <img
                        src="/images/Adminimages/delete.svg"
                        alt="delete"
                        width="30px"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${purchaseStyle.subBox} ${purchaseStyle.subBox3}`}>
          <div className={purchaseStyle.subBox3_upper}>
            <div className={purchaseStyle.subBox3_sub}>
              <div className={purchaseStyle.subBox3_sub_sub1}>Sub total</div>
              <div className={purchaseStyle.subBox3_sub_sub1}>$1500</div>
            </div>
            <div className={purchaseStyle.subBox3_sub}>
              <div className={purchaseStyle.subBox3_sub_sub1}>Discount</div>
              <div className={purchaseStyle.subBox3_sub_sub1}>$1500</div>
            </div>{" "}
          </div>
          <div className={purchaseStyle.subBox3_upper}>
            <div className={purchaseStyle.subBox3_sub}>
              <div className={purchaseStyle.subBox3_sub_sub1}>Tax</div>
              <div className={purchaseStyle.subBox3_sub_sub1}>$1500</div>
            </div>
            <div className={purchaseStyle.subBox3_sub}>
              <div className={purchaseStyle.subBox3_sub_sub1}>Grand Total </div>
              <div className={purchaseStyle.subBox3_sub_sub1}>$2500</div>
            </div>{" "}
          </div>

          <div className={purchaseStyle.subBox3_sub_sub1_option}>
            {/* <OptionButton variant="contained">Generate Invoice</OptionButton>
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
            </OptionButton> */}
            <OptionButton variant="contained">Save</OptionButton>
          </div>
        </div>
      </div>
      {/* <div className={`${purchaseStyle.box} ${purchaseStyle.boxLower}`}>Extra space</div> */}
    </div>
  );
}

export default Sales;
