import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <br />
            <Example example={definition.example} />
          </div>
        );
      })}
      <br />
        <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
