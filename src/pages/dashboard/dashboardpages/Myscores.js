import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Myverticallycenteredmodal } from "../../../components/dashboardcomponents/Myverticallycenteredmodal";
import useFetch from "../../../hooks/useFetch";
import Scorelist from "../../../components/listsandcards/Scorelist";

const Myscores = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [groupedScores, setGroupedScores] = useState({});
  const { data, loading, error } = useFetch("/api/v1/scores");
  const currUser = useSelector((state) => state.user.currUser);


  const groupScoresBySessionType = (scores) => {
    return scores.reduce((acc, score) => {

      let sessionType = score.session_type || "uploaded";
      switch (score.session_type) {
        case "repertoire":
          sessionType = "Repertoire";
          break;
        case "practicing":
          sessionType = "Practicing";
          break;
        case "future_plan":
          sessionType = "Future Plan";
          break;
        case "orchestral":
          sessionType = "Orchestral";
          break;
        default:
          sessionType = "upload";
      }

      if (!acc[sessionType]) {
        acc[sessionType] = [];
      }
      acc[sessionType].push(score);
      return acc;
    }, {});
  };

  const putObjectInArray = (scoreObject) => {
    for (const property in scoreObject) {
      setGroupedScores((prevState) => ({
        ...prevState,
        [property]: scoreObject[property],
      }));
    }
  };

  useEffect(() => {
    if (data) {
      const grouped = groupScoresBySessionType(data);
      putObjectInArray(grouped);
    }
  }, [data]);

  if (!currUser) {
    return <p>Please log in to view your profile.</p>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="myscores-container">
      <div className="d-flex justify-content-end ">
        <div
          onClick={() => setModalShow(true)}
          className="mt-5 mx-4 mt-4  myscore-addnewpdf-button col-4 col-md-2"
        >
          Add new pdf
        </div>
      </div>

      <div className="mb-3 row  d-flex justify-content-center align-items-center searchbar-myscores-container">
        <div className="col-md-8">
          <div className="searchform-myscores">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control searchform-myscores-input"
              placeholder="Search anything..."
            />
            <span className="left-pan">
              <i className="fa fa-microphone"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="row mx-4 mt-1">
        {Object.keys(groupedScores).length === 0 ? (
          <p>No scores available</p>
        ) : (
          Object.keys(groupedScores).map((sessionType, index) => (

            <div key={index} className="col-4 col-md-3">
              <Scorelist
                props={groupedScores[sessionType]}
                title={sessionType}
              />
            </div>
          ))
        )}
      </div>

      <Myverticallycenteredmodal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default Myscores;
