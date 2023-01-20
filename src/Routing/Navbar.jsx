import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
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
        <NavLink style={navLinkStyles} to="products">
          <p>products</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="users">
          <p>Users</p>{" "}
        </NavLink>
      </nav>
    </>
  );
};
