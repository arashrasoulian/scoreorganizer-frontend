import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboardcomponents/Sidebar";

export function Dashboard() {
  return (
    <div>
      <div className="">
        <div className="row flex-nowrap mt-5">
          <Sidebar />
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
