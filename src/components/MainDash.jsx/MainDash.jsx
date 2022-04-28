import "./MainDash.css";
import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <section className="main-dash">
      <h1>Dashboard</h1>
      <Cards />

      <Table />
    </section>
  );
};

export default MainDash;
