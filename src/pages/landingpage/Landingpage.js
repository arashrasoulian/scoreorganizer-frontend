import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slideshow from "../../components/landingpage/Slideshow";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function Landingpage() {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/v1/statistics"
  );

  return (
    <div className="landingpage-container">
      <Slideshow />
      <div className="landingpage-data-boxes">
        <div className="row ">
          {data &&
            Object.entries(data).map(([key, value]) => {
              return (
                <div className="col-xl-3 col-md-6 col-12  ">
                  <div className="landingpage-static">
                    <div className="landingpage-static-data">
                      {key === "total_users" ? "members" : "sheets uploaded"}
                      <p>{value} </p>
                    </div>
                  </div>
                </div>
              );
            })}

          <div className="col-xl-3 col-md-6 col-12  ">
            <div className="landingpage-static"></div>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <div className="landingpage-link-box">
            <div className="landingpage-link-data">
              Get started now
                      <p>Home page </p>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
