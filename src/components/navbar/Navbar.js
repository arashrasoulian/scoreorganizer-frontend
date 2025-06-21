import { useDispatch, useSelector } from "react-redux";
import { clearCurrUser } from "../../store/userSlice";
import Logout from "../auth/Logout";
import { Link } from "react-router-dom";

export function Navbar() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.user.currUser);

  return (
    <nav className="navbar-container  fixed-top">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src="logo2.png" alt="Logo" />
        </Link>
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

            <Link to="/" className="nav-link d-none d-md-block mx-4">
              Home
            </Link>
            <div className="logout-button-navbar mx-4">
              <Logout setCurrUser={() => dispatch(clearCurrUser())} />
            </div>
            <Link
              to="/dashboard/personaldata"
              className="nav-link d-none d-md-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillrule="evenodd"
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
