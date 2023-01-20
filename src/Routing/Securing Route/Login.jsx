import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthJS";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };
  return (
    <div>
      <label htmlFor="">Username:</label>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        className="text"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
