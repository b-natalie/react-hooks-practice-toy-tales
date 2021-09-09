import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => {
      setToyArray(data)
    })
  }, [])
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToyArray([...toyArray, newToy])
  }

  function handleDeleteToy(toy) {
    const toyIndex = toyArray.indexOf(toy);
    const firstHalf = toyArray.slice(0,toyIndex);
    const secondHalf = toyArray.slice(toyIndex + 1, toyArray.length + 1);
    const updatedToyArray = firstHalf.concat(secondHalf);
    setToyArray(updatedToyArray);
  }

  function updateLikes(updatedToy) {
    setToyArray(toyArray.map(oldToy => oldToy.id === updatedToy.id ? oldToy = updatedToy : oldToy));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toyArray={toyArray} handleAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} handleDeleteToy={handleDeleteToy} updateLikes={updateLikes}/>
    </>
  );
}

export default App;
