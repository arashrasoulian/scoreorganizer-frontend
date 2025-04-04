import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slideshow from "../../components/landingpage/Slideshow";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function Landingpage() {
  const { data, loading, error } = useFetch("/api/v1/statistics");

  return (
    <div className="landingpage-container">
      <div className="landingpage-background-container">


      <Slideshow />
      <div className="landingpage-data-boxes">
        <div className="row">
          {data &&
            Object.entries(data).map(([key, value]) => {
              return (
                <div className="col-xl-4 col-md-6 col-12 mb-2">
                  <div className="landingpage-static">
                    <div className="landingpage-static-data ">
                      {key === "total_users" ? (
                        <div class="landingpage-statics-icon">
                          <img
                            src="images/landingpage-icons/member.png"
                            alt="member"
                          />
                        </div>
                      ) : (
                        <div class="landingpage-statics-icon">
                          <img
                            src="images/landingpage-icons/document.png"
                            alt="member"
                          />
                        </div>
                      )}
                      <div className="landingpage-static-data-letters d-inline-flex d-lg-flex flex-lg-column mt-3 mt-lg-0">
                        <div className="mr-2">{value} </div>
                        <div>{key === "total_users" ? "members acount" : "sheets uploaded"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          <div className="col-xl-4 col-md-6 col-12">
            <div className="landingpage-static">
              <div className="landingpage-static-data">
                <div class="landingpage-statics-icon">
                  <img src="images/landingpage-icons/violin.png" alt="member" />
                </div>
                <div className="landingpage-static-data-letters  d-inline-flex d-lg-flex flex-lg-column mt-3 mt-lg-0">
                  <div className="mr-2">10</div>
                  <div>instrument</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-12  "></div>
        </div>
      </div>
    </div>
    </div>
  );
}
