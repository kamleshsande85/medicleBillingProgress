// import "./App.css";
// import Header from "./components/Header/Header";
// import Hero from "./components/HeroSection/Hero";
// import AfterHero from "./components/AfterHero/AfterHero";
// import ExtraSpace from "./ExtraSpace.jsx";
// import AppRoutes from "./routes.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { useState } from "react";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div>
//       <BrowserRouter>
//         {!isLoggedIn && <Header />}
//         <AppRoutes setIsLoggedIn={setIsLoggedIn} /> {/* Pass setIsLoggedIn as an object */}
//         {!isLoggedIn && <Hero />}
//         {!isLoggedIn && <AfterHero />}
//         {!isLoggedIn && <ExtraSpace />}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Header from "./components/Header/Header";
// import Hero from "./components/HeroSection/Hero";
// import AfterHero from "./components/AfterHero/AfterHero";
// import Footer from "./Footer.jsx";
// import AppRoutes from "./routes.jsx";
// import { BrowserRouter } from "react-router-dom";
// import Dashboard from "./components/Admin/Dashboard";
// import { AuthProvider, AuthContext } from "./AuthContext";
// import { useContext } from "react";

// function AppContent() {
//   const { isLoggedIn } = useContext(AuthContext); // ✅ Context se state access karo

//   return (
//     <div>
//       <BrowserRouter>
//         {isLoggedIn ? (
//           <Dashboard /> // ✅ Login hone par sirf Dashboard dikhega
//         ) : (
//           <>
//             <Header />
//             <AppRoutes />
//             <Hero />
//             <AfterHero />
//             <Footer />
//           </>
//         )}
//       </BrowserRouter>
//     </div>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }

// export default App;

// import "./App.css";
// import Header from "./components/Header/Header";
// import Hero from "./components/HeroSection/Hero";
// import AfterHero from "./components/AfterHero/AfterHero";
// import Footer from "./Footer.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { useState } from "react";
// import Dashboard from "./components/Admin/Dashboard";
// import Payments from "./components/Admin/Payments";
// import VendorManagement from "./components/Admin/VendorManagement";
// import Settings from "./components/Admin/Settings";
// import QualityCompliance from "./components/Admin/QualityCompliance";
// import Layout from "./components/Admin/layout/Layout";
// import { isLoggedIn2 } from "./AuthContext.js";

// function AppContent() {
//   const isLoggedIn = isLoggedIn2;

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "/", element: <Dashboard /> },
//         { path: "/payments", element: <Payments /> },
//         { path: "/vendorManagement", element: <VendorManagement /> },
//         { path: "/settings", element: <Settings /> },
//         { path: "/qualityCompliance", element: <QualityCompliance /> },
//       ],
//     },
//   ]);

//   return isLoggedIn ? (
//     <RouterProvider router={router} />
//   ) : (
//     <>
//       <Header />
//       <Hero />
//       <AfterHero />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (

//       <AppContent />

//   );
// }

// export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import AfterHero from "./components/AfterHero/AfterHero";
import Footer from "./Footer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import Payments from "./components/Admin/Payments";
import VendorManagement from "./components/Admin/VendorManagement";
import Settings from "./components/Admin/Settings";
import QualityCompliance from "./components/Admin/QualityCompliance";
import Layout from "./components/Admin/layout/Layout";
import { AuthProvider, useAuth } from "./AuthContext";
import Order from "./components/Admin/Order.jsx";
import ItemLayout from "./components/Admin/layout/ItemLayout.jsx";
import ItemManagement from "./components/Admin/ItemManagement.jsx";
import AddCategory from "./components/Admin/AddCategory.jsx";
import AddCompany from "./components/Admin/AddCompany.jsx";
import AddItem from "./components/Admin/AddItem.jsx";
import AddType from "./components/Admin/AddType.jsx";
import Purchase from "./components/Admin/Purchase.jsx"
import Sales from "./components/Admin/Sales.jsx"
import Report from "./components/Admin/Report.jsx"
import Invoice from "./components/Admin/Invoice.jsx"
import ExpiryManagemnet from "./components/Admin/ExpiryManagement.jsx"



function AppContent() {
  const { isLoggedIn } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // { path: "/", element: <Dashboard /> },
        { index: true, element: <Dashboard /> },
        { path: "/payments", element: <Payments /> },
        { path: "/vendorManagement", element: <VendorManagement /> },
        { path: "/medicineorder", element: <Order /> },
        { path: "/purchaseEntry", element: <Purchase /> },
        { path: "/salesEntary", element: <Sales /> },
        { path: "/Report", element: <Report /> },
        { path: "/Invoice", element: <Invoice /> },
        { path: "/expiryManagement", element: <ExpiryManagemnet /> },
        { path: "/settings", element: <Settings /> },
        { path: "/qualityCompliance", element: <QualityCompliance /> },
        {
          path: "ItemLayout",
          element: <ItemLayout />,
          children: [{ index:true, element: <ItemManagement /> },
            {path:"addItem",element:<AddItem />},
            {path:"addCategory",element:<AddCategory />},
            {path:"addCompany",element:<AddCompany />},
            {path:"itemManagement", element: <ItemManagement />},
            {path:"addType", element: <AddType />},
          ],
        },
      ],
    },
   
  ]);

  return isLoggedIn ? (
    <RouterProvider router={router} />
  ) : (
    <>
      <Header />
      <Hero />
      <AfterHero />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
