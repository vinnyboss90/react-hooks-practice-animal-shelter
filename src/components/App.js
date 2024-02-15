import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [statePets, stateSetPets] = useState([])
  const [stateFilters, setStateFilters] = useState('all')
  const [middleState, setMiddleState] = useState('all')

  

  
  useEffect( () => {
    fetch("http://localhost:3001/pets")
    .then(resp => resp.json())
    .then(data => stateSetPets(data))
  }, [])

  const filteredPets = statePets.filter(pet => pet.type === stateFilters || stateFilters === 'all')

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters  setMiddleState={setMiddleState}
                      setStateFilters={setStateFilters}
                      middleState={middleState} />
          </div>
          <div className="twelve wide column">
            <PetBrowser filteredPets={filteredPets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;