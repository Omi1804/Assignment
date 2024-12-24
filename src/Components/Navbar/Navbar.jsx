import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { Heart, MapPin, Search, User } from "lucide-react";

const NavbarItem = [
  { id: 1, label: "Explore", path: "/", icon: <Search /> },
  { id: 2, label: "Wishlists", path: "/wishlists", icon: <Heart /> },
  { id: 3, label: "Show map", path: "/map", icon: <MapPin /> },
  { id: 4, label: "Log in", path: "/login", icon: <User /> },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="navContainer">
      <ul className="navItems">
        {NavbarItem.map((item) => (
          <li
            key={item.id}
            className={`navItem ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            {React.cloneElement(item.icon, {
              size: 24,
              color: location.pathname === item.path ? "#E57601" : "#000000b1",
            })}
            <p
              style={{
                color:
                  location.pathname === item.path ? "#E57601" : "#000000b1",
              }}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
