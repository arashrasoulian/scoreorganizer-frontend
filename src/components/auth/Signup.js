import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setCurrUser }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const signup = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/signup";
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

      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        // city: data.city,
        // name: data.first_name + " " + data.last_name,
      },
    };
    signup(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" required />
        <br />
        {/* first name:{" "}
        <input type="text" name="first_name" placeholder="merila" required />
        <br />
        last name:{" "}
        <input type="text" name="last_name" placeholder="zareii" required />
        <br />
        city: <input type="text" name="city" placeholder="tehran" required />
        <br /> */}
        {/* phone number:{" "}
        <input type="tel" name="phone" placeholder="091211111" required />
        <br /> */}
        {/* are you a teacher: <input type="checkbox" name='teacher' placeholder="email" defaultChecked={true} />
      <br /> */}
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered,{" "}
        <a href="#signin" onClick={handleClick}>
          Sign in
        </a>{" "}
        here.
      </div>
    </div>
  );
};

export default Signup;
