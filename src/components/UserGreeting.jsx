import React, { useState } from "react";

const UserGreeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: isLoggedIn ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          transition: "0.3s",
        }}
      >
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default UserGreeting;
