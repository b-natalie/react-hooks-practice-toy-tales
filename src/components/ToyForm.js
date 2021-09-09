import React, { useState } from "react";

function ToyForm({ toyArray, handleAddToy }) {

  const [formData, setFormData] = useState({name: "", image: ""})

  function handleFormData(event) {
    let targetName = event.target.name;
    let targetValue = event.target.value;

    setFormData({
      ...formData,
      [targetName] : targetValue
    })

    console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newToy = {
      "name": event.target.name.value,
      "image": event.target.image.value,
      "likes": 0
    }

    console.log(newToy);

    fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then(newToy => handleAddToy(newToy))
    
    setFormData({name: "", image: ""})
    event.target.reset();

  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormData}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onChange={handleFormData}
        />
      </form>
    </div>
  );
}

export default ToyForm;