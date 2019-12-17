import React from "react";
import style from "styled-components";

const Div = style.div`
  background: #ff69b4;
`;

export default function CharacterCard({url, names, gender, local, species, status}) {
  return (
    <Div>
      <div>
        <img src={url} alt="character" />
      </div>
        <h1>Name: {names}-{status}</h1>
        <p>Gender: {gender}</p>
        <p>Area: {local}</p>
        <p>Species: {species}</p>
    </Div>
  )
}
