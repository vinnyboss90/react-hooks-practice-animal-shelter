import React, { useState } from "react";

function Filters( {setStateFilters, middleState, setMiddleState }) {

  function handleFilter () {
    setStateFilters(middleState)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={ (e) => setMiddleState(e.target.value)}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button"
                onClick={ () => handleFilter()}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;

