import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/available" className="nav-item">
        Availability
      </NavLink>
      <NavLink to="/signup" className="nav-item">
        Signup
      </NavLink>
      <Link to="/jobs" className="nav-item">
        What's-New
      </Link>
    </div>
  );
}
