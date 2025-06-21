import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch"; 
import { useSelector } from "react-redux";
import Scoredescription from "../../components/scorepage/Scoredescription";

const ScorePage = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const { id } = useParams();

  const { data, loading, error } = useFetch(`/api/v1/scores/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="score-page">
      <div className="row">
        <div className="col-12 col-xl-7 pdf-scorepage ml-lg-5 ">
          <embed src={data.pdf_url} width="100%" />
        </div>
        <Scoredescription props={data} />
      </div>
    </div>
  );
};

export default ScorePage;
