import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { CoursesContextProvider } from "./context/CoursesContext.jsx";
import { AuthContextProvider } from "./context/AouthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthContextProvider>
        <CoursesContextProvider>
          <App />
        </CoursesContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
);
