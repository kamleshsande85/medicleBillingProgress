import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import LayoutStyle from "./Layout.module.css";
import { useAuth } from "../../../AuthContext";




function Layout() {

 const { setIsLoggedIn } = useAuth();

 const handleLogout = () =>{
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  setIsLoggedIn(false);
  
 }

  return (
    <div className={LayoutStyle.container}>
      <Sidebar />
      <div className={LayoutStyle.maincontent}>
        <div className={LayoutStyle.subHeader}>
          <div className={LayoutStyle.upper}>
            <div> <h1>Admin</h1></div>
            <div className={LayoutStyle.leftUpper}>
      
              <div className={`${LayoutStyle.leftitem} ${LayoutStyle.leftimg2}`}><img src="/images/Adminimages/zondicons--notification.svg"  width="35px" alt="notifica_tionicon" srcset="" style={{filter: "invert(1)" }} /></div>
              <div className={`${LayoutStyle.leftitem} ${LayoutStyle.leftimg}`}><img src="/images/Adminimages/iconamoon--profile-fill.svg" alt="Profile_logo" srcset="" style={{filter: "invert(1)" }}/></div>
              <div className={`${LayoutStyle.leftitem} ${LayoutStyle.leftbutton}`}> <button type="button" onClick={handleLogout}>Logout</button></div>
            </div>
           
            
          </div>
          <div className={LayoutStyle.lower}>
            <div className={LayoutStyle.Box1}>Dynamic data <br /></div>
            <div className={LayoutStyle.Box1}>Dynamic data <br />
            </div>
            <div className={LayoutStyle.Box1}>Dynamic data<br />
            </div>
            <div className={LayoutStyle.Box1}>Dynamic data <br />
            </div>
          </div>
          {/* <div className={LayoutStyle.lower}>
            <div className={LayoutStyle.Box1}>Total Vendors <br />0</div>
            <div className={LayoutStyle.Box1}>Pending Orders <br />
            10</div>
            <div className={LayoutStyle.Box1}>Payment Due <br />
            ₹50,000</div>
            <div className={LayoutStyle.Box1}>Medicine Stock <br />
            1200 items</div>
          </div> */}
        </div>
        <div className={LayoutStyle.outletstyle}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
