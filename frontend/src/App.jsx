import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Message from "./pages/Messages";
import Notification from "./pages/Notification";
import Course from "./pages/courseCard";
import { useAuthContext } from "./hooks/useAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("");
  const [form, setForm] = useState(false);
  function toggleActive() {
    setActive(active === "" ? "active" : "");
  } // Add loading state

  const { dispatch } = useAuthContext();

  useEffect(() => {
    const isAuthenticated = async () => {
      const user = await JSON.parse(localStorage.getItem("user"));
      if (user && user.token) {
        const isExpired = user.expiration;
        if (Date.now() < isExpired) {
          setStatus(true);
          dispatch({ type: "LOGIN", payload: user });
          console.log("Token is valid.");
        } else {
          setStatus(false);
          console.log("Token has expired.");
        }
      } else {
        console.log("User not found");
        setStatus(false);
      }
      setLoading(false); // Set loading to false after authentication check
    };

    isAuthenticated();
  }, [dispatch, setStatus]);

  // Render loading spinner or content based on loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              status ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/sign-in"
            element={status ? <Navigate to="/dashboard" /> : <Signup setStatus={setStatus}/>}
          />
          <Route
            path="/login"
            element={
              status ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login setStatus={setStatus} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              status ? (
                <Dashboard active={active} showForm={setForm} setStatus={setStatus}/>
              ) : (
                <Navigate to="/login" />
              )
            }
          >
            <Route
              path=""
              element={
                <Home showForm={setForm} form={form} Toggle={toggleActive} />
              }
            />
            <Route path="profile" element={<Profile />} />
            <Route path="messages" element={<Message />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="courses" element={<Course />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
