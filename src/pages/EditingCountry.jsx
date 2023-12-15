import React from "react";
import { useNavigate } from "react-router-dom";
import { flags } from "../Flags";

const EditingCountry = () => {
  const Navigate = useNavigate();
  function editingSubmit() {
    Navigate("/blog/:id");
  }
  return (
    <div className="editingPage">
      <img className="countryFlag" src={flags[1].link} alt="flagofcountry" />
      <h1 className="editingPageTitle">EDIT THE INFORMATION</h1>
      <form className="creationForm" action="">
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
      </form>
    </div>
  );
};

export default EditingCountry;
