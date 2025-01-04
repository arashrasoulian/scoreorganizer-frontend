import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCurrUser } from '../../store/userSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "delete",
        headers: {
          "content-type": "application/json",
          "authorization": localStorage.getItem("token")
        },
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.removeItem("token");
      dispatch(clearCurrUser());
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <div onClick={handleClick} >Logout</div>
    </div>
  );
};

export default Logout;
