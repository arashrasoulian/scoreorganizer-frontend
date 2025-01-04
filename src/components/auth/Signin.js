import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../store/userSlice";
const Signin = ({ setCurrUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/login";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await response.json();

      if (!response.ok) throw data.error;
      const token = response.headers.get("Authorization");
      dispatch(setCurrUser(data));
      dispatch(setToken(token));

      localStorage.setItem("token", token);

      setCurrUser(data);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <div className="m-5">
      <form ref={formRef} onSubmit={handleSubmit} >
        Email: <input type="email" name="email" placeholder="email" className="mt-5"/>
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Signin" />
      </form>
      <br />
      <div>
        Not registered yet,{" "}
        <a href="#signup" onClick={handleClick}>
          Signup
        </a>{" "}
      </div>
    </div>
  );
};
export default Signin;
