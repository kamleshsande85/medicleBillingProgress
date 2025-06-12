import React from 'react'
import paymentStyle from "./Payment.module.css"


function Payments() {

  return (
   <div className={paymentStyle.container}>
    <div className={paymentStyle.box1}>
      <div className={`${paymentStyle.subbox} ${paymentStyle.subbox1}`}>Order Review</div>
      <div className={`${paymentStyle.subbox} ${paymentStyle.subbox2}`}>delivery Address</div>
      <div className={`${paymentStyle.subbox} ${paymentStyle.subbox3}`}>Payment Mode</div>
    </div>
    <div className={paymentStyle.box2}>
      <span className={paymentStyle.box2Upper}><p>Price and other information like tax gst</p> </span>
      <hr />
      <div className={paymentStyle.box2Lower}>
        submit
      </div>
    </div>
   </div>
  )
   
     
};



export default Payments 
