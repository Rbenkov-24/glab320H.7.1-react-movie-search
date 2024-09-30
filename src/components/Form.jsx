/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Form(props) {
  //state to hold the data of our form
  const [formData, setFormData] = useState({ searchterm: "" });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    props.moviesearch(formData.searchterm); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
