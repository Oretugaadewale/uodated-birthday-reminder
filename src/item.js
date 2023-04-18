import React, { useState } from "react";
import { data } from "./data";

const Item = ({ person }) => {
  const [celebrants, setCelebrants] = useState(data);

  const removeAll = () => {
    setCelebrants([]);
  };

  return (
    <div>
      <div>
        <h4>{celebrants.length} birthday celebrant</h4>
      </div>
      {celebrants.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <img src={image} alt={name} />
            <div>
              <h4 className="name">{name}</h4>
              <p className="age">{age}</p>
            </div>
          </div>
        );
      })}
      <div>
        <button className="btn" onClick={removeAll}>
          remove all
        </button>
      </div>
    </div>
  );
};

export default Item;
