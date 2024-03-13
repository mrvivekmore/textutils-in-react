import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p className="mt-3">Contact us component</p>
      <button className="btn btn-success" onClick={goToHome}>
        Home
      </button>
    </div>
  );
}

export default Contact;
