import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        <ul>
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
