import React from "react";
import HeaderStyle from "./Header.module.css";
// import { Dialog } from "@mui/material";
import LoginDailog from "../Login/LoginDailog";

import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const OpenDailog = () => {
    setOpen(true);
  };

  return (
    <div className={HeaderStyle.container}>
      <div className={HeaderStyle.logo} style={{ marginLeft: "35px" }}>
        <img
          src="/images/heart-care-icon.svg"
          alt="Logo"
          width={"40px"}
          style={{ filter: "invert(1)" }}
        />
        Medical <i style={{ fontSize: "10px" }}>CRM</i>
      </div>
      <div className={HeaderStyle.item2}>
        <div className={HeaderStyle.profile}>
          <div>
            <img
              src="/images/hospital-patient-icon.svg"
              alt="Logo"
              width={"30px"}
              style={{ filter: "invert(1)", marginRight: "10px" }}
              onClick={() => OpenDailog()}
            ></img>
          </div>
          <div style={{ marginTop: "5px" }}>
            <p onClick={() => OpenDailog()}> Login/Signup</p>
          </div>

          {/* <p onClick={()=>OpenDailog()} >  Login/Signup</p>   style={{color:'#ffff'}} */}
          {/* <a href="/Signup"><img
            src="/images/hospital-patient-icon.svg"
            alt="Logo"
            width={"30px"}
          ></img></a>  */}
        </div>
      </div>
      <LoginDailog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Header;
