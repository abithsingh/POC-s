import { useState, useEffect } from "react";

const AddTaskForm = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Priority: "",
    Description: "",
  });
  const handleSubmit = () => {
    e.preventDefault();
  };

  const handleChange = () => {};
  return (
    <div className="AddTaskForm">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={handleChange} />
        <Select>
            <option
        </Select>
      </form>
    </div>
  );
};

export default AddTaskForm;
