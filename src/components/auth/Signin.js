import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../store/userSlice";
const Signin = ({ setCurrUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const formRef = useRef();
  const login = async (userInfo, setCurrUser) => {
    const url = `${API_URL}/login`;
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
    <div className=" login-body">
      <div className="sign-in-box">
      <h1>Sign In</h1>

        <form ref={formRef} onSubmit={handleSubmit} >
       <input type="email" name="email" placeholder="email" className="mt-5"/>
        <br />

        <input type="password" name="password" placeholder="password" />
        <br />
        <button type="submit" value="Signin" >Sign in</button>
      </form>
      <br />
      <div>
        <a href="#">Forgot Password?</a>
        <a href="#signup" onClick={handleClick}>Create an Account</a>

      </div>
      </div>

    </div>
  );
};
export default Signin;
