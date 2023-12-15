import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CardComponent from "./CardComponent";

const Home = () => {
  const Navigate = useNavigate();

  function createButton() {
    Navigate("/create");
  }

  return (
    <div className="homePage">
      <header>LET'S EXPLORE</header>
      <div className="cards">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <button className="homePageButton" onClick={createButton}>
        Create Country
      </button>
      <footer>Made by me.</footer>
    </div>
  );
};

export default Home;
