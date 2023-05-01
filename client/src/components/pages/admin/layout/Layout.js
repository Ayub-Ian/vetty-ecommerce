import React, { Fragment } from "react";
import Navbar from "../../../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </Fragment>
  );
}

export default Layout;
