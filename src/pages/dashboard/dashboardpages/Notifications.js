import React from "react";
import { useSelector } from "react-redux";
const Notifications = () => {
  const currUser = useSelector((state) => state.user.currUser);
  if (!currUser) {
    return <p>Please log in to view your profile.</p>;
  }
  return (
    <div>
      <div className="col py-3">Notifications</div>
    </div>
  );
};
export default Notifications;
