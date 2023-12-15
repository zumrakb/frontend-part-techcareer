import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { flags } from "../Flags";

const Creation = () => {
  const Navigate = useNavigate();

  function creationSubmit(event) {
    Navigate("/");
  }

  return (
    <div className="creationPage">
      <div className="flagList">
        {flags.map((flag) => (
          <img className="flagSvg" src={flag.link} alt={flag.name} />
        ))}
      </div>
      <form className="creationForm" action="">
        <input
          className="creationInput"
          type="text"
          placeholder="Enter the country name."
        />
        <textarea
          className="creationTextarea"
          name="textarea"
          id="textArea"
          cols="30"
          rows="10"
          placeholder="Tell us about this country."
        ></textarea>
        <button onClick={creationSubmit} className="creationSubmit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Creation;
