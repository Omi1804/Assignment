import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerContainer">
      <div className="logoCont" onClick={() => navigate("/")}>
        <img src="/logo.png" alt="" className="logoIcon" />
      </div>
    </div>
  );
};

export default Header;
