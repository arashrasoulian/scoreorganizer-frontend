import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Dashboard } from "../../pages/dashboard/Dashboard";
import Homepage from "../../pages/homepage/Homepage";
import Landingpage from "../../pages/landingpage/Landingpage";
import Signin from "../../pages/signinsignup/Signin";
import Signup from "../../pages/signinsignup/Signup";
import Personaldata from "../../pages/dashboard/dashboardpages/Personaldata";
import ScorePage from "../../pages/scorepage/Scorepage";
import Notifications from "../../pages/dashboard/dashboardpages/Notifications";
import Myscores from "../../pages/dashboard/dashboardpages/Myscores";
import Statistics from "../../pages/dashboard/dashboardpages/Statistics";

const ProtectedRoute = ({ children }) => {
  const currUser = useSelector((state) => state.user.currUser);
  return currUser ? children : <Navigate to="/landing" replace />;
};

const PublicRoute = ({ children }) => {
  const currUser = useSelector((state) => state.user.currUser);
  return !currUser ? children : <Navigate to="/home" replace />;
};

const User = () => {
  const currUser = useSelector((state) => state.user.currUser);
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              currUser ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/landing" replace />
              )
            }
          />
          <Route
            path="/landing"
            element={
              <PublicRoute>
                <Landingpage />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <Signin />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/scores/:id"
            element={
              <ProtectedRoute>
                <ScorePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route
              path="personaldata"
              element={
                <ProtectedRoute>
                  <Personaldata />
                </ProtectedRoute>
              }
            />
            <Route
              path="Notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="Myscores"
              element={
                <ProtectedRoute>
                  <Myscores />
                </ProtectedRoute>
              }
            />
            <Route
              path="Statistics"
              element={
                <ProtectedRoute>
                  <Statistics />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default User;
