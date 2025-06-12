import React from 'react'
// import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import LayoutStyle from "./Layout.module.css";
import { Link } from 'react-router-dom';
// import { useState } from 'react';


function ItemLauout() {

  // const [colorr , setColor] = useState("#ffffff")




  return (
    <div className={LayoutStyle.containerItem}>
        <div className={LayoutStyle.itemNavbar}>
        <span className={LayoutStyle.liHome}>  <Link to={"itemManagement"}> Item Dashboard</Link> </span>
            {/* <Link to={"addItem"}>Item</Link> */}
            <Link to={"addCategory"}>Categories</Link>
            <Link to={"addType"}>Type</Link>
            <Link to={"addCompany"}>Companies</Link>
            
        </div>
        <div className={LayoutStyle.itemOutlet} >
            <Outlet />
        </div>
    </div>
    


  )
}

export default ItemLauout

/*
onClick={() => setColor("blue")} style={{color:colorr}
*/