import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Securing Route/AuthJS";
export const Navbar = () => {
  const auth = useAuth();
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <>
      <nav>
        <NavLink style={navLinkStyles} to="/">
          <p>Home</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          <p>About</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="order-summary">
          <p>Order</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="/products">
          <p>products</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="users">
          <p>Users</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="/profile">
          <p>Profile</p>{" "}
        </NavLink>
        {!auth.user && (
          <NavLink style={navLinkStyles} to="/login">
            <p>Login</p>{" "}
          </NavLink>
        )}
      </nav>
    </>
  );
};
