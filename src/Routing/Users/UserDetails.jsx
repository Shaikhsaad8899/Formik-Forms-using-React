import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return (
   <>
     <div>
      <h1 htmlFor="">Name: Saad Shaikh</h1>
      <h1 htmlFor="">D.O.B: 01/01/2001</h1>
      <h1 htmlFor="">Place: Pune</h1>
      <h1 htmlFor="">User ID: {userId}</h1>
    </div>
   
   </>
    
  );
};
