import React from "react";
import { Link } from "react-router-dom";

import sidebarStyle from "./Layout.module.css";
import HeaderStyle from "../Admin.module.css";

function Sidebar() {
  return (
    <div>
      <nav className={sidebarStyle.navBar}>
        <div className={HeaderStyle.logo} style={{ marginBottom: "20px" }}>
          <img
            src="/images/heart-care-icon.svg"
            alt="Logo"
            width={"40px"}
            style={{ filter: "invert(1)" }}
          />
          Medical <i style={{ fontSize: "10px" }}>CRM</i>
        </div>
        <ul>
          <li>
            <Link to="/">
              {" "}
              <span>
                {" "}
                <img
                  src="/images/Adminimages/material-symbols--team-dashboard.svg"
                  alt="Logo"
                  style={{ filter: "invert(1)", marginRight: "10px" }}
                ></img>{" "}
              </span>
            </Link>{" "}
            <Link to="/">
               <span> Dashboard</span>
            </Link>{" "}
          
          </li>
          <li>
            <Link to="/vendorManagement">
              <img
                src="/images/Adminimages/carbon--user-profile.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
            </Link>{" "}
            <Link to="/vendorManagement">
  <span>Vendor Management</span>
            </Link>{" "}
          
          </li>

          <li>
            <Link to="/itemlayout">
              <img
                src="/images/Adminimages/mdi--medicine.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
            </Link>
            <Link to="/itemlayout">
              <span>Item management</span>
            </Link>
          </li>
            {/* <li>
              <Link to="/expiryManagement">
                <img
                  src="/images/Adminimages/expiry.svg"
                  alt="Logo"
                  style={{ filter: "invert(1)", marginRight: "10px" }}
                ></img>
              </Link>
              <Link to="/expiryManagement">
                <span>Expiry management</span>
              </Link>
            </li> */}

          <li>
            <Link to="/purchaseEntry">
              <img
                src="/images/Adminimages/purchase.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
            </Link>{" "}
            <Link to="/purchaseEntry">
              <span>Purchase Entry</span>
            </Link>{" "}
          </li>

          <li>
            <Link to="/salesEntary">
              <img
                src="/images/Adminimages/sales.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
            </Link>{" "}
            <Link to="/salesEntary">
              <span>Sales Entry</span>
            </Link>{" "}
          </li>

          {/* <li>
            <Link to="/medicineorder">
              <img
                src="/images/Adminimages/mdi--truck.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
              <span>Item Orders</span>
            </Link>{" "}
          </li> */}
          <li>
            <Link to="/Report">
              <img
                src="/images/Adminimages/report.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
            </Link>{" "}
            <Link to="/Report">
              <span>Report</span>
            </Link>{" "}
          </li>
{/* 
          <li>
            <Link to="/Invoice">
              <img
                src="/images/Adminimages/invoice.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
            </Link>{" "}
            <Link to="/Invoice">
              <span>Invoices</span>
            </Link>
          </li> */}

          {/* <li>
            <Link to="/qualitycompliance">
              <img
                src="/images/Adminimages/wpf--security-checked.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
              <span>Quality & Compliance</span>
            </Link>
          </li>

         */}

          <li>
            <Link to="/settings">
              <img
                src="/images/Adminimages/ion--settings.svg"
                alt="Logo"
                style={{ filter: "invert(1)", marginRight: "10px" }}
              ></img>
            </Link>

            <Link to="/settings">
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
