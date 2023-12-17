import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CardComponent from "./CardComponent";
import axios from "axios";

const Home = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  //communication frontend backend
  useEffect(() => {
    async function fetchCountries() {
      const resp = await axios.get("http://localhost:5148/todoitems");
      setData(resp.data);
      console.log(resp.data);
    }

    fetchCountries();
  }, []);

  function createButton() {
    Navigate("/create");
  }

  return (
    <div className="homePage">
      <header>LET'S EXPLORE</header>
      <div className="cards">
        {data.map((d) => {
          return <CardComponent key={d.id} index={d.id} />;
        })}
      </div>
      <button className="homePageButton" onClick={createButton}>
        Create Country
      </button>
      <footer>Made by me.</footer>
    </div>
  );
};

export default Home;
