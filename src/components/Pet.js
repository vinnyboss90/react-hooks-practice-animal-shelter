import React, { useState } from "react";

function Pet({type, gender, age, weight, name}) {


  const [isAdopted, setIsAdopted] = useState(true)

  function handleAdoption () {
    setIsAdopted(prev => !prev)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {name + ' - ' +(gender === 'female' ? '♀' : '♂')}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        { !isAdopted && <button className="ui disabled button">Already adopted</button>}
        { isAdopted && <button className="ui primary button" 
                onClick={ () => handleAdoption()}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;