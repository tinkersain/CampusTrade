import React, { useState } from "react";

const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        style={{
          padding: "10px",
          fontSize: "16px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          transition: "0.3s",
        }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordToggle;
