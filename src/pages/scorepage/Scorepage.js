import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch"; // Your custom useFetch hook
import { useSelector } from "react-redux";

const ScorePage = () => {
  const { id } = useParams(); // Get the score ID from the URL
  const [sessionType, setSessionType] = useState("repertoire");
  const [message, setMessage] = useState("");
  const token = useSelector((state) => state.user.token);
  const API_URL = process.env.REACT_APP_API_URL;

  const { data, loading, error } = useFetch(`/api/v1/scores/${id}`);

  const handleSessionTypeChange = (e) => {
    setSessionType(e.target.value);
  };

  const handleSaveScore = async () => {
    try {
      const formData = new FormData();
      formData.append("storing[score_id]", data.id);
      formData.append("storing[session_type]", sessionType);
      const response = await fetch(`${API_URL}/api/v1/storings`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: ` ${token}`,
        },
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage("Error adding score to your collection.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;
  console.log(data, data.pdf_url);

  return (
    <div className="score-page">
      <div className="row">
        <div className="col-12 col-xl-7 pdf-scorepage ml-lg-5 ">
          <embed src={data.pdf_url} width="100%" />
        </div>
        <div className="col-12 col-lg-4 scorepage-descriptions mt-3 mt-lg-5">
          <div className="scorepage-info-box">
            <h2>{data.name}</h2>
            <p>
              <strong>Composer:</strong> {data.composer}
            </p>
            <p>
              <strong>Instrument:</strong> {data.instrument}
            </p>
            <p>
              <strong>Difficulty:</strong> Difficulty Level
            </p>
            <p>
              <strong>Description:</strong> A short description of the score
              goes here. It provides details about the piece, its history, or
              other relevant information.
            </p>
            <div className="category-form">
              <label htmlFor="sessionType">
                <h4>Add this score to your collection:</h4>
              </label>
              <select
                id="sessionType"
                className="custom-select"
                value={sessionType}
                onChange={handleSessionTypeChange}
              >
                <option value="repertoire">Repertoire</option>
                <option value="practicing">Practicing</option>
                <option value="future_plan">Future Plan</option>
                <option value="orchestral">Orchestral</option>
              </select>
              <button className="add-button " onClick={handleSaveScore}>
                Add to My Scores
              </button>
            </div>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
