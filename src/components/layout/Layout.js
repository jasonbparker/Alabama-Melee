import React from "react";
import Nav from "./Nav";
import Routes1 from "./Routes";

function Layout() {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-2 side-bar">
          <Nav />
        </div>
        <div className="col">
          <Routes1 />
        </div>
      </div>
    </div>
  );
}

export default Layout;
