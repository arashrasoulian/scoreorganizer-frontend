import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

export default function Scorelist({ props, title }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const dificalty = ["Biginner", "Intermediate", "Advanced"];
  const [listTitle, setlisttitle] = useState("Repertoire");

  const handleDeleteSuccess = () => {
 console.log(" Arash salam");
    setIsDeleted(true);


  };

  if (isDeleted) return null;
  function emailName(email) {
    const username = email.split("@")[0];
    return username;
  }
  const textfitter = (text) => {
    return text.length > 22 ? text.slice(0, 22) + "..." : text;
  };
  const getrandomofarray = (arr) => arr[Math.floor(Math.random() * 3)];

  return (
    <div className="hompage-list-container mt-4 mx-md-2 ">
      <div className="homepage-list-title mb-4 py-3 px-5">{title}</div>
      {props.map((item, index) => {
        return (
          <div
            className="homepage-list-eachbox px-3"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <Link to={`/scores/${item.id}`} className="scorelist-link">
              <div className="homepage-list-box-name mb-1 mt-2">
                <b className="">{textfitter(item.name)}</b>
              </div>
              <div> {item.composer}</div>
              <div> {item.instrument}</div>
              <div className="uploader-list-info">
                Uploaded by:{" "}
                {item.uploader_email ? emailName(item.uploader_email) : "you"}
              </div>
              <div className="delete-button-scorelist-container">
                {item.session_type || item.isOwner ? (
                  <DeleteButton
                    storingId={item.storingId}
                    scoreId={item.id}
                    isOwner={item.isOwner}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                ) : null}
              </div>
              <div className="difficalty-button-scorelist-container ">
                {getrandomofarray(dificalty)}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
