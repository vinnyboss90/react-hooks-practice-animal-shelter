import React from "react";

import Pet from "./Pet";

function PetBrowser({ filteredPets }) {



  return <div className="ui cards">{filteredPets.map(pet => {
    return <Pet key={pet.id}
                type={pet.type}
                gender={pet.gender}
                age={pet.age}
                weight={pet.weight}
                name={pet.name}
                isAdopted={pet.isAdopted}
    />
  })}</div>;
}

export default PetBrowser;