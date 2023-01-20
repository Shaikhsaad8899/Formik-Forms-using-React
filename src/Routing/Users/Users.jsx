import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <ul>
          <li>User 1 </li>
          <li>User 2 </li>
          <li>User 3 </li>
          <Outlet />
        </ul>
      </div>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Filter
        </button>
        <button onClick={() => setSearchParams({ filter: "reset" })}>
          Reset Filter
        </button>
      </div>
      {/* {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing all users</h2>
      )} */}
    </>
  );
};
