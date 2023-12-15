import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Creation from "./Creation";

import { flags } from "../Flags";

const CardComponent = () => {
  const Navigate = useNavigate();

  function goToBlog() {
    Navigate("/blog/:id");
  }

  return (
    <div className="cardComponent" onClick={goToBlog}>
      <img className="cardFlag" src={flags[0].link} alt="flag"></img>
      <h1 className="cardTitle">name</h1>
    </div>
  );
};

export default CardComponent;
