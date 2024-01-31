import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div >
          <Navbar  />
       
          <div className="content" >
          <div className="conteiner">
            <main>{children}</main>
            </div>
          </div>
          <Footer />
      </div>
  );
};

export default Layout;