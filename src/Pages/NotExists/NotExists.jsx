import React from "react";
import "./notexists.css";
import { useNavigate } from "react-router-dom";

function NotExists() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="not-exists-container">
      <div className="not-exists-content">
        <h1 className="not-exists-title">404</h1>
        <p className="not-exists-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotExists;
