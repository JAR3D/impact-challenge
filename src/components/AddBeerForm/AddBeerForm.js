import { useState } from "react";

import classes from "./AddBeerForm.module.css";

const AddBeerForm = ({ addBeer }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    addBeer({
      nameDisplay: formData.name,
      description: formData.description,
      labels: { medium: formData["label-url"] },
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="label-url">Label url:</label>
        <input
          type="text"
          name="label-url"
          id="label-url"
          value={formData["label-url"]}
          onChange={onChange}
        />
      </div>

      <button type="submit">Add Beer</button>
    </form>
  );
};

export default AddBeerForm;
