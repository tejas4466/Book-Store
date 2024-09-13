import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";   // CSS file
// import "./style.scss";  // Sass file
// import reportWebVitals from "./reportWebVitals"; // Comment out if not needed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(); // Uncomment this if you want to use it
