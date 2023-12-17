import React from "react";
import { useNavigate } from "react-router-dom";
import { flags } from "../Flags";

const EditingCountry = () => {
  const Navigate = useNavigate();

  function editingSubmit() {
    Navigate(-1);
  }
  return (
    <div className="editingPage">
      <img className="countryFlag" src={flags[1].link} alt="flagofcountry" />
      <h1 className="editingPageTitle">EDIT THE INFORMATION</h1>
      <div className="creationForm">
        <input
          className="creationInput"
          type="text"
          placeholder="Edit the country name."
        />
        <textarea
          placeholder="Edit the description."
          className="creationTextarea"
          name="textarea"
          id="textArea"
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={editingSubmit} className="creationSubmit">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditingCountry;
