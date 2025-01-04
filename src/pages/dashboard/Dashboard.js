import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboardcomponents/Sidebar";

export function Dashboard() {
  return (
    <div>
      <div className="">
        <div className="row flex-nowrap mt-5">
          <Sidebar />
          <Outlet />
        </div>
      </div>{" "}
    </div>
  );
}
