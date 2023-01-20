import React from "react";
import { Outlet } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      <ul>
        <li>User 1 </li>
        <li>User 2 </li>
        <li>User 3 </li>
        <Outlet />
      </ul>
    </div>
  );
};
