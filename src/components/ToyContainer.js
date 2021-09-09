import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyArray, handleDeleteToy, updateLikes }) {
  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {toyArray.map(toy => {
        return (<ToyCard key={toy.id} toy={toy} handleDeleteToy={handleDeleteToy} updateLikes={updateLikes}/>)
      })}
    </div>
  );
}

export default ToyContainer;
