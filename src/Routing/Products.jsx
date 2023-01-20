import React from "react";
import { Link,Outlet  } from "react-router-dom";
export const Products = () => {
  return (
    <>
      <div>
        <input type="search" name="" id="" placeholder="Search..." />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     <div>
     <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet/>
     </div> 
    
    </>
  );
};
