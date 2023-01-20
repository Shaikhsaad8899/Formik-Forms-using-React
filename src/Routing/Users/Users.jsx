import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
    </>
  );
};
