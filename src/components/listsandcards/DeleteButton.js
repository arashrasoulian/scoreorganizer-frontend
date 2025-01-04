import React, { useState } from "react";

const DeleteButton = ({ scoreId, isOwner, storingId, onDeleteSuccess }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      let url = "";
      if (isOwner) {
        url = `http://localhost:3000/api/v1/scores/${scoreId}`;
      } else {
        url = `http://localhost:3000/api/v1/storings/${storingId}`;
      }

      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        onDeleteSuccess(); // Call the success callback when deleted
        alert("Successfully deleted!");
      } else {
        alert("Failed to delete.");
      }
    } catch (error) {
      console.error("Error deleting:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button className="btn " onClick={handleDelete} disabled={isDeleting}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        className="bi bi-trash-fill delete-button-scorelist"
        viewBox="0 0 16 16"

      >
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
      </svg>
      {/* {isDeleting ? 'Deleting...' : 'Delete'} */}
    </button>
  );
};

export default DeleteButton;
