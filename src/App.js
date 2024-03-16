import React from "react";
import Navbar from "../src/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebHome from "./Pages/Website & server Solution/webHome";
import StaticWebpage from "./Pages/Website & server Solution/StaticWebpage";
import DigitalHome from "./Pages/Digital Marketing/DigitalHome";
import CedmHome from "./Pages/Cedm/CedmHome";
import ServerSolution from "./Pages/Website & server Solution/ServerSolution";
import DynamicWebsite from "./Pages/Website & server Solution/Dynamic website";
import EcommerceWebsite from "./Pages/Website & server Solution/E-commerce website";
import Seo from "./Pages/Digital Marketing/Seo";
import Smo from "./Pages/Digital Marketing/Smo";
import PaidCampaning from "./Pages/Digital Marketing/PaidCampaning";
import Elite1Program from "./Pages/Cedm/Elite1Program";
import Elite2Program from "./Pages/Cedm/Elite2Program";
import Elite3Program from "./Pages/Cedm/Elite3Program";
import CorporateWorkshop from "./Pages/Cedm/CorporateWorkshop";
import Footer from "./Pages/Footer";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home></Home>} />

            <Route path="/website-service-solution" element={<WebHome />} />
            <Route
              path="/digital-marketing"
              element={<DigitalHome></DigitalHome>}
            />
            <Route path="/cedm" element={<CedmHome></CedmHome>} />
            <Route
              path="/static-website"
              element={<StaticWebpage></StaticWebpage>}
            ></Route>
            <Route
              path="/dynamic-website"
              element={<DynamicWebsite></DynamicWebsite>}
            ></Route>
            <Route
              path="/e-commerce-website"
              element={<EcommerceWebsite></EcommerceWebsite>}
            ></Route>
            <Route
              path="/server-solution"
              element={<ServerSolution></ServerSolution>}
            ></Route>
            <Route path="/seo" element={<Seo></Seo>}></Route>
            <Route path="/smo" element={<Smo></Smo>}></Route>
            <Route
              path="/paid-campaning"
              element={<PaidCampaning></PaidCampaning>}
            ></Route>
            <Route
              path="/elite1program"
              element={<Elite1Program></Elite1Program>}
            ></Route>
            <Route
              path="/elite2program"
              element={<Elite2Program></Elite2Program>}
            ></Route>
            <Route
              path="/elite3program"
              element={<Elite3Program></Elite3Program>}
            ></Route>
            <Route
              path="/corporate-workshop"
              element={<CorporateWorkshop></CorporateWorkshop>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
