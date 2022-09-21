import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms mb-3">
        <strong className="synonyms-list pe-1">Synonyms:</strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
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
