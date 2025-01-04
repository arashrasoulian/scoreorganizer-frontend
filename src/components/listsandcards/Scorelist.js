import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
export default function Scorelist({ props, title }) {
  const [isDeleted, setIsDeleted] = useState(false); // Track if the card is deleted
  const handleDeleteSuccess = () => {
    setIsDeleted(true); // Remove the card from the UI when deleted
  };

  if (isDeleted) return null; // Don't render if the card is deleted
  function emailName(email) {
    const username = email.split("@")[0];
    return username;
  }

  return (
    <div className="hompage-list-container">
      <div className="homepage-list-title py-1 px-5">{title}</div>
      {props.map((item, index) => {
        return (
          <div
            className="homepage-list-eachbox py-1 px-3"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <Link to={`/scores/${item.id}`} className="scorelist-link">
              <div className="homepage-list-box-name mb-1">
                <b>{item.name}</b>
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
            </Link>
          </div>
        );
      })}
    </div>
  );
}
