import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms.length) {
    return (
      <div className="Antonyms mt-3">
        <strong className="antonyms-list pe-1">Antonyms: </strong>
        <ul>
          {props.antonyms.map(function (antonym, index) {
            return (
              <li key={index} className="pe-2">
                {antonym}
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
