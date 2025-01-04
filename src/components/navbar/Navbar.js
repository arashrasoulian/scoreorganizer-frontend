import { useDispatch, useSelector } from "react-redux";
import { clearCurrUser } from "../../store/userSlice";
import Logout from "../auth/Logout";
import { Link } from "react-router-dom";

export function Navbar() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.user.currUser);

  function emailName( email ) {
    const username = email.split('@')[0];
    return username;
  }

  return (
    <nav className="navbar-container  fixed-top">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src="logo2.png" alt="Logo" />
        </Link>
        {currUser ? (
          <span className="welcome-navbar d-none d-md-block">hello {emailName(currUser.email).toUpperCase()} </span>
        ) : null}
      </div>

      <div className="navbar-right">
        {!currUser ? (
          <>
            <Link to="/signin" className="nav-sign-link">
              Sign In
            </Link>
            <Link to="/signup" className="nav-sign-link">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard/Myscores" className="nav-link">
              Dashboard
            </Link>

            <Link to="/" className="nav-link d-none d-md-block">
              Home
            </Link>
            <div className="logout-button-navbar mx-4">
              <Logout setCurrUser={() => dispatch(clearCurrUser())} />
            </div>
            <Link to="/dashboard/personaldata" className="nav-link d-none d-md-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
