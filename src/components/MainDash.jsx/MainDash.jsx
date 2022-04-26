import "./MainDash.css";
import React from "react";
import Cards from "../Cards/Cards";

const MainDash = () => {
  return (
    <section className="main-dash">
      <h1>Dashboard</h1>
      <Cards />
    </section>
  );
};

export default MainDash;
