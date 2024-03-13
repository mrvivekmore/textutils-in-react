import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function goToContact() {
    navigate("/contact");
  }

  return (
    <div className="container mt-5">
      <h2>About TextUtils</h2>
      <p className="mt-2 mb-4">
        TextUtils is a FREE tool that allows you transform sentences in
        UPPERCASE, lovercase, Capitalize. It also hepls to count number of words
        and characters present.
      </p>
      <button className="btn btn-success" onClick={goToContact}>
        Contact Us
      </button>
    </div>
  );
};

export default About;
