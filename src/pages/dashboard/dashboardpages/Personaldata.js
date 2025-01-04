import React from "react";
import { useSelector } from "react-redux";
const Personaldata = () => {

  const currUser = useSelector((state) => state.user.currUser);
  const token = useSelector(state => state.user.token);

  if (!currUser) {
    return <p>Please log in to view your profile.</p>;
  }
  return(
    <div>
         <div className="col py-3">
             <h1>Profile Page</h1>
            <p>Name: {currUser.name}</p>
            <p>Email: {currUser.email}</p>
            <p>Phone: {currUser.phone}</p>
            <p>City: {currUser.city}</p>
            <p>Teacher: {currUser.teacher ? "teacher" : "student"}</p>
            <p>Adress: {currUser.adress}</p>
            <p>Birthday: {currUser.birthday}</p>
          </div>
    </div>
  )
}
export default Personaldata
