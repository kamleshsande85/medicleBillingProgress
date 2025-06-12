import React from "react";
import Herocss from "./HeroCss.module.css"; 
import LoginDailog from "../Login/LoginDailog";
import { useState } from "react";

// import '../../App.css'

function Hero() {
  const [open, setOpen] = useState(false);
  
    const OpenDailog = () => {
      setOpen(true);
    };

  return (
    <div className={Herocss.herosection}>
        <div>
             <h1 className={Herocss.heroheading}  >Medical CRM</h1>
      <h1 className={Herocss.hero_sub_heading}  > Simplify Appointments, Records, and Billing with One Platform</h1>
      <button className={`${Herocss.ButtonStyle } ${Herocss.ButtonStyle2}`}  onClick={() => OpenDailog()}>Get Started</button>
      {/* <button className={Herocss.ButtonStyle}>Book Appointment</button> */}
        </div>
      <LoginDailog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Hero;