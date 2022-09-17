import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div>
      <strong>Synonyms: </strong>
        <ul className="Synonyms d-sm-flex flex-row justify-content-start">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index} className="p-2">
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
