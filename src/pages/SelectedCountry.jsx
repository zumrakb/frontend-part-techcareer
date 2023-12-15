import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { flags } from "../Flags";

const SelectedCountry = () => {
  const Navigate = useNavigate();

  function goHome() {
    Navigate("/");
  }

  function goEditingCountry() {
    Navigate("/blog/:id/edit");
  }

  return (
    <div className="selectedCountryPage">
      <img
        className="selectedCountryFlag"
        src={flags[1].link}
        alt="flagofcountry"
      />
      <h1 className="selectedCountryName">{flags[1].name}</h1>
      <p className="selectedCountryDescription">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        placeat quod quia rerum, dolore iure. Soluta vero sit fugit, veritatis
        eveniet est atque autem quis voluptatibus. Nulla, atque placeat. Rerum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        placeat quod quia rerum, dolore iure. Soluta vero sit fugit, veritatis
        eveniet est atque autem quis voluptatibus. Nulla, atque placeat. Rerum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        placeat quod quia rerum, dolore iure. Soluta vero sit fugit, veritatis
        eveniet est atque autem quis voluptatibus. Nulla, atque placeat. Rerum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        placeat quod quia rerum, dolore iure. Soluta vero sit fugit, veritatis
        eveniet est atque autem quis voluptatibus. Nulla, atque placeat. Rerum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        placeat quod quia rerum, dolore iure. Soluta vero sit fugit, veritatis
        eveniet est atque autem quis voluptatibus. Nulla, atque placeat. Rerum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        placeat quod quia rerum, dolore iure. Soluta vero sit fugit, veritatis
        eveniet est atque autem quis voluptatibus. Nulla, atque placeat. Rerum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        placeat quod quia rerum, dolore iure. Soluta vero sit fugit, veritatis
        eveniet est atque autem quis voluptatibus. Nulla, atque placeat. Rerum!
      </p>
      <div className="selectedCountryPageButtons">
        <button onClick={goHome} className="selectedCountryButton">
          Delete
        </button>
        <button onClick={goEditingCountry} className="selectedCountryButton">
          Edit
        </button>
      </div>
    </div>
  );
};

export default SelectedCountry;
