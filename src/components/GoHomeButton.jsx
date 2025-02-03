
import React from "react";
import { useNavigate } from "react-router-dom";

const GoHomeButton = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  return (
    <button onClick={() => navigate("/")} className="go-home-button">
     🏠
    </button>
  );
};

export default GoHomeButton;
